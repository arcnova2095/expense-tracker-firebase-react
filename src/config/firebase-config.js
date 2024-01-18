// Import the functions you need from the SDKs you need
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgviIRekKvMZkPDcs_W8DJCvofQg5Aqdg",
  authDomain: "expense-tracker-b3726.firebaseapp.com",
  projectId: "expense-tracker-b3726",
  storageBucket: "expense-tracker-b3726.appspot.com",
  messagingSenderId: "641229886400",
  appId: "1:641229886400:web:32dc0a6d79e35e1a922e25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth()
export const provider= new GoogleAuthProvider()
export const db= getFirestore(app)