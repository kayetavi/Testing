
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJFEQbD9Q-hixTAWuwRgE3M7yfm_InUZM",
  authDomain: "loginapp-feb72.firebaseapp.com",
  projectId: "loginapp-feb72",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const localSessionId = localStorage.getItem("sessionId");

// ✅ Auto logout on inactivity after 10 minutes
let inactivityTimer;

function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(async () => {
    const user = auth.currentUser;
    if (user) {
      alert("⏳ You've been logged out due to 10 minutes of inactivity.");
      try {
        await deleteDoc(doc(db, "userSessions", user.uid));
      } catch (e) {
        console.error("Auto-logout session delete error:", e);
      }
      await signOut(auth);
      localStorage.removeItem("sessionId");
      localStorage.removeItem("loggedInUser");
      window.location.href = "index.html";
    }
  }, 600000); // 10 minutes
}

// ✅ Detect user activity and reset timer
["mousemove", "keydown", "scroll", "click"].forEach((event) => {
  window.addEventListener(event, resetInactivityTimer);
});

// ✅ Check session on load
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const docRef = doc(db, "userSessions", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const sessionInDB = docSnap.data().sessionId;
      const lastActive = docSnap.data().timestamp || 0;
      const now = Date.now();
      const isExpired = now - lastActive > 60000; // 1 min timeout

      if (isExpired || localSessionId !== sessionInDB) {
        alert("⚠️ Session expired. Please login again.");
        await deleteDoc(docRef);
        await signOut(auth);
        localStorage.removeItem("sessionId");
        localStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
        return;
      }

      // ✅ Start inactivity timer
      resetInactivityTimer();

      // ✅ Heartbeat - update timestamp every 30 sec
      setInterval(async () => {
        const user = auth.currentUser;
        if (user) {
          try {
            await updateDoc(doc(db, "userSessions", user.uid), {
              timestamp: Date.now()
            });
          } catch (e) {
            console.error("Heartbeat update failed", e);
          }
        }
      }, 30000); // every 30 sec

    } else {
      alert("⚠️ No active session found. Please login again.");
      await signOut(auth);
      localStorage.removeItem("sessionId");
      localStorage.removeItem("loggedInUser");
      window.location.href = "index.html";
    }
  } else {
    window.location.href = "index.html";
  }
});

// ✅ Logout button handler
window.logout = async function () {
  const user = auth.currentUser;
  if (user) {
    try {
      await deleteDoc(doc(db, "userSessions", user.uid));
    } catch (error) {
      console.error("Failed to delete session from DB:", error);
    }
  }
  await signOut(auth);
  localStorage.removeItem("sessionId");
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
};
