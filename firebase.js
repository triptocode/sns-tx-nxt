// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6I7J8KV2yfA_3x_LH5-G1iRsMEXXZuMY",
  authDomain: "sns-tw.firebaseapp.com",
  projectId: "sns-tw",
  storageBucket: "sns-tw.appspot.com",
  messagingSenderId: "1010012884505",
  appId: "1:1010012884505:web:04759abdf025c906b7a488",
  measurementId: "G-RK6NXM568M"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
