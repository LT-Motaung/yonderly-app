// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRnDCAQCV_gqxMkytjPbJI-Jwm2D6yfg4",
  authDomain: "yonderly-5d77a.firebaseapp.com",
  projectId: "yonderly-5d77a",
  storageBucket: "yonderly-5d77a.firebasestorage.app",
  messagingSenderId: "516842604671",
  appId: "1:516842604671:web:711e06aead62f1aa81d74a",
  measurementId: "G-WT5G31NT7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage }; 