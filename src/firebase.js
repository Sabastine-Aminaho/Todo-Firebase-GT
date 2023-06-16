// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_SjrP3o3UNrcwdf8SzWjeayZAbXuqUTk",
  authDomain: "todo-firebase-676f8.firebaseapp.com",
  projectId: "todo-firebase-676f8",
  storageBucket: "todo-firebase-676f8.appspot.com",
  messagingSenderId: "325362903276",
  appId: "1:325362903276:web:64304eec9de25b342eddc9",
  measurementId: "G-W16WFXNXXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);