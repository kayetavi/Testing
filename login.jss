<script type="module">
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

/* ===========================
   ✅ SUPABASE CONFIG
=========================== */
const supabase = createClient(
  "https://apmmvovefgywogzcnvmr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwbW12b3ZlZmd5d29nemNudm1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNDA4ODQsImV4cCI6MjA4MjkxNjg4NH0.B0KRW0-OoV_11E_ism4_3xwusP85syna3UMy3kZy3gU"
);

/* ===========================
   🔐 SESSION ID GENERATOR
=========================== */
function generateSessionId() {
  return Math.random().toString(36).substring(2);
}

const deviceId = navigator.userAgent;
let sessionId = localStorage.getItem("sessionId") || "";

/* ===========================
   🔐 LOGIN FUNCTION
=========================== */
window.login = async function () {
  const recaptchaResponse = grecaptcha.getResponse();
  const error = document.getElementById("errorMsg");

  // ✅ CAPTCHA check
  if (!recaptchaResponse) {
    error.textContent = "⚠️ Please complete the reCAPTCHA.";
    return;
  }

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.classList.add("loading");
  error.textContent = "";

  try {
    /* ===========================
       🔐 SUPABASE AUTH LOGIN
    =========================== */
    const { data, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (authError) throw authError;

    const user = data.user;
    const now = Date.now();
    sessionId = generateSessionId();

    /* ===========================
       🔍 CHECK EXISTING SESSION
    =========================== */
    const { data: existingSession } = await supabase
      .from("user_sessions")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (existingSession) {
      const lastActive = existingSession.last_active || 0;
      const isExpired = now - lastActive > 60000; // ⏱ 1 minute

      if (!isExpired && existingSession.session_id !== sessionId) {
        error.textContent =
          "⚠️ You're already logged in on another device.";
        loginBtn.classList.remove("loading");
        return;
      }

      // 🧹 Delete expired session
      if (isExpired) {
        await supabase
          .from("user_sessions")
          .delete()
          .eq("user_id", user.id);
      }
    }

    /* ===========================
       ✅ SAVE NEW SESSION
    =========================== */
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
    error.textContent = "❌ Invalid username or password";
  } finally {
    loginBtn.classList.remove("loading");
    grecaptcha.reset();
  }
};
</script>
