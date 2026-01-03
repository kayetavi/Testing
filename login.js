import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 🔹 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAJFEQbD9Q-hixTAWuwRgE3M7yfm_InUZM",
  authDomain: "loginapp-feb72.firebaseapp.com",
  projectId: "loginapp-feb72",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 Inject spinner CSS dynamically
const style = document.createElement("style");
style.textContent = `
#loginBtn {
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: opacity 0.3s ease;
}
#loginBtn .spinner {
  display: none;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255,255,255,0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  position: absolute;
  right: 15px;
}
#loginBtn.loading {
  cursor: not-allowed;
  opacity: 0.8;
}
#loginBtn.loading .btn-text {
  opacity: 0.5;
}
#loginBtn.loading .spinner {
  display: block;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(style);

// 🔹 Inline login function (reCAPTCHA removed)
window.login = async function () {
  const loginBtn = document.getElementById("loginBtn");
  const error = document.getElementById("errorMsg");
  if (!loginBtn || !error) return;

  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const deviceId = navigator.userAgent;

  loginBtn.classList.add("loading");
  error.textContent = "";

  try {
    // 🔐 Firebase sign-in
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // 🔐 Backend session creation
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, deviceId }),
    });

    const data = await res.json();

    if (!res.ok || !data.sessionId) {
      error.textContent = `❌ ${data.error || "Invalid login response."}`;
      loginBtn.classList.remove("loading");
      return;
    }

    // ✅ Save session info
    localStorage.setItem("sessionId", data.sessionId);
    localStorage.setItem("loggedInUser", data.email);
    const usernameUpper = data.email.split("@")[0].toUpperCase();
    localStorage.setItem("usernameUpper", usernameUpper);

    // ✅ Redirect to dashboard
    window.location.href = "dashboard.html";

  } catch (err) {
    console.error("Login error:", err);
    error.textContent = "❌ Login failed.";
  } finally {
    loginBtn.classList.remove("loading");
  }
};

// 🔹 Attach button listener dynamically
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");
  if (!loginBtn) return;

  // Add spinner element if not present
  if (!loginBtn.querySelector(".spinner")) {
    const spinner = document.createElement("span");
    spinner.classList.add("spinner");
    loginBtn.appendChild(spinner);
  }

  // Add btn-text span if not present
  if (!loginBtn.querySelector(".btn-text")) {
    const text = document.createElement("span");
    text.classList.add("btn-text");
    text.textContent = loginBtn.textContent || "Login";
    loginBtn.textContent = "";
    loginBtn.appendChild(text);
  }

  loginBtn.addEventListener("click", window.login);
});
