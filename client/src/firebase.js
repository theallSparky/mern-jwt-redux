// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-73873.firebaseapp.com",
  projectId: "mern-auth-73873",
  storageBucket: "mern-auth-73873.appspot.com",
  messagingSenderId: "250450669116",
  appId: "1:250450669116:web:bcf388dc1b0603d63c9d39",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
