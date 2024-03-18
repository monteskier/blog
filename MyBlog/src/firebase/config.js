// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore}  from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ53EfrgJPXGctuqnDpnb3at6I3zkSGPk",
  authDomain: "myblog-74252.firebaseapp.com",
  projectId: "myblog-74252",
  storageBucket: "myblog-74252.appspot.com",
  messagingSenderId: "447160129960",
  appId: "1:447160129960:web:59bbc8e19402ee9268a59d",
  measurementId: "G-JBKMHVXXGK"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
