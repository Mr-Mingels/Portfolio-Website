// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-_tRVDy2AjiF-NfkyszA3GSpWCR0pPyE",
  authDomain: "portfolio-website-f6494.firebaseapp.com",
  projectId: "portfolio-website-f6494",
  storageBucket: "portfolio-website-f6494.appspot.com",
  messagingSenderId: "412486500252",
  appId: "1:412486500252:web:c559e1bd0868cdc2f39259",
  measurementId: "G-MNCW0SZYE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)