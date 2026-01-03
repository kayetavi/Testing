import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAJFEQbD9Q-hixTAWuwRgE3M7yfm_InUZM",
  authDomain: "loginapp-feb72.firebaseapp.com",
  projectId: "loginapp-feb72",
  storageBucket: "loginapp-feb72.appspot.com",
  messagingSenderId: "743648198302",
  appId: "1:743648198302:web:745564ac4b714d81f5458f",
  measurementId: "G-T7J1626T53"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 🔐 Generate Unique Session ID
function generateSessionId() {
  return Math.random().toString(36).substring(2);
}

const deviceId = navigator.userAgent;
let sessionId = localStorage.getItem("sessionId") || "";

window.login = async function () {
  const recaptchaResponse = grecaptcha.getResponse(); // ✅ reCAPTCHA token
  const error = document.getElementById("errorMsg");

  // ✅ Step: Verify if CAPTCHA is completed
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
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userDocRef = doc(db, "userSessions", user.uid);
    const userSessionDoc = await getDoc(userDocRef);

    // Generate a new session ID for this login
    sessionId = generateSessionId();

    const now = Date.now();
    if (userSessionDoc.exists()) {
      const existingSession = userSessionDoc.data();
      const lastActive = existingSession.timestamp || 0;
      const isExpired = now - lastActive > 60000; // 1 min timeout

      if (!isExpired && existingSession.sessionId !== sessionId) {
        error.textContent = "⚠️ You're already logged in on another device.";
        loginBtn.classList.remove("loading");
        return;
      }

      // If expired, delete old session
      if (isExpired) {
        await deleteDoc(userDocRef);
      }
    }

    // ✅ Save new session
    await setDoc(userDocRef, {
      sessionId: sessionId,
      timestamp: now
    });

    localStorage.setItem("sessionId", sessionId);
    localStorage.setItem("loggedInUser", email);
    window.location.href = "dashboard.html";
  } catch (err) {
    console.error(err.message);
    error.textContent = "❌ Invalid username or password";
  } finally {
    loginBtn.classList.remove("loading");
    grecaptcha.reset(); // ✅ Reset CAPTCHA after each login attempt
  }
};
