import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

/* ===========================
   ✅ SUPABASE CONFIG
=========================== */
const supabase = createClient(
  "https://apmmvovefgywogzcnvmr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwbW12b3ZlZmd5d29nemNudm1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNDA4ODQsImV4cCI6MjA4MjkxNjg4NH0.B0KRW0-OoV_11E_ism4_3xwusP85syna3UMy3kZy3gU"
);

/* ===========================
   🔐 SESSION ID
=========================== */
function generateSessionId() {
  return Math.random().toString(36).substring(2);
}

const deviceId = navigator.userAgent;

/* ===========================
   🔐 LOGIN FUNCTION
=========================== */
async function login() {
  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("errorMsg");
  const loginBtn = document.getElementById("loginBtn");

  if (!email || !password) {
    error.textContent = "⚠️ Email and password required";
    return;
  }

  loginBtn.classList.add("loading");
  error.textContent = "";

  try {
    // 🔐 Supabase Auth
    const { data, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (authError) throw authError;

    const user = data.user;
    const now = Date.now();
    const sessionId = generateSessionId();

    // 🔍 Check existing session
    const { data: existingSession } = await supabase
      .from("user_sessions")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (existingSession) {
      const expired = now - existingSession.last_active > 60000;

      if (!expired) {
        error.textContent =
          "⚠️ Already logged in on another device";
        loginBtn.classList.remove("loading");
        return;
      }

      await supabase
        .from("user_sessions")
        .delete()
        .eq("user_id", user.id);
    }

    // ✅ Save new session
    await supabase.from("user_sessions").upsert({
      user_id: user.id,
      session_id: sessionId,
      device_id: deviceId,
      last_active: now,
    });

    localStorage.setItem("sessionId", sessionId);
    localStorage.setItem("loggedInUser", email);

    window.location.href = "dashboard.html";

  } catch (err) {
    console.error(err.message);
    error.textContent = err.message;
  } finally {
    loginBtn.classList.remove("loading");
  }
}

/* ===========================
   🔘 BUTTON BINDING
=========================== */
document
  .getElementById("loginBtn")
  .addEventListener("click", login);
