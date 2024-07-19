// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB6JeSzpc1CmSwVIuzMyRoctKSTRclGUzg",
  authDomain: "pennywise-897c9.firebaseapp.com",
  projectId: "pennywise-897c9",
  storageBucket: "pennywise-897c9.appspot.com",
  messagingSenderId: "268704844228",
  appId: "1:268704844228:web:f82ebf0418e799397abc91",
  measurementId: "G-JYVSZX97JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };