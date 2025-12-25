// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxifjS9LK99WSgF_7JNcpgMXAWUPdRKaI",
  authDomain: "cryotech-4a70d.firebaseapp.com",
  projectId: "cryotech-4a70d",
  storageBucket: "cryotech-4a70d.firebasestorage.app",
  messagingSenderId: "985940697796",
  appId: "1:985940697796:web:8ddba7625d162e63abdf91",
  measurementId: "G-2G04QCRDXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;