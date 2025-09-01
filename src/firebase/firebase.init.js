// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzAbookOV5OhQEM35Uiwkho3dMq7JxbG4",
  authDomain: "emporium-espresso.firebaseapp.com",
  projectId: "emporium-espresso",
  storageBucket: "emporium-espresso.firebasestorage.app",
  messagingSenderId: "244650691821",
  appId: "1:244650691821:web:64a5f629ec635da69110e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);