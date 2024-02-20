// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEAS7SKEAlI4pIPd35I3QUGH-_bcprKV4",
  authDomain: "my-first-auth-project-bff09.firebaseapp.com",
  projectId: "my-first-auth-project-bff09",
  storageBucket: "my-first-auth-project-bff09.appspot.com",
  messagingSenderId: "845877539911",
  appId: "1:845877539911:web:9d8dcae28079c55db96d62",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
