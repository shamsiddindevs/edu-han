// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCSFJ4dF-2kjbi5cYEH94TbmE-OJbquFTg",
    authDomain: "hanyuban-b6357.firebaseapp.com",
    projectId: "hanyuban-b6357",
    storageBucket: "hanyuban-b6357.firebasestorage.app",
    messagingSenderId: "10625741905",
    appId: "1:10625741905:web:8718cead239f781866f470",
    measurementId: "G-21HBJTNJDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function onAuth(e){
    e.preventDefault()
    console.log("onsubmit")
}


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

