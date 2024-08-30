// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2ZHI0s5aawt_16c-Aq0dshLRxoxSmr40",
  authDomain: "resumate-4cba3.firebaseapp.com",
  projectId: "resumate-4cba3",
  storageBucket: "resumate-4cba3.appspot.com",
  messagingSenderId: "787648725746",
  appId: "1:787648725746:web:f14e542f67a0ea8b62c66b",
  measurementId: "G-K9FDM7S2YV",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export { auth, provider };
