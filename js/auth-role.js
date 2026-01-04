
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://apmmvovefgywogzcnvmr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwbW12b3ZlZmd5d29nemNudm1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNDA4ODQsImV4cCI6MjA4MjkxNjg4NH0.B0KRW0-OoV_11E_ism4_3xwusP85syna3UMy3kZy3gU"
);

export async function getUserRole() {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    window.location.href = "index.html";
    return;
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (error) {
    console.error("Role fetch error:", error);
    return;
  }

  applyRoleUI(data.role);
}
// ===============================
// ROLE BASED UI CONTROL
// ===============================
function applyRoleUI(role) {

  // HIDE ALL ROLE-BASED ELEMENTS
  document.querySelectorAll("[data-role]").forEach(el => {
    el.style.display = "none";
  });

  // SHOW ELEMENTS ALLOWED FOR THIS ROLE
  document.querySelectorAll(`[data-role*="${role}"]`).forEach(el => {
    el.style.display = "block";
  });

}
