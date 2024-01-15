// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_B5UxofmddYwRMNVjhFDrBw0ZMTbpY7E",
  authDomain: "netflixgpt-41cd2.firebaseapp.com",
  projectId: "netflixgpt-41cd2",
  storageBucket: "netflixgpt-41cd2.appspot.com",
  messagingSenderId: "511877983029",
  appId: "1:511877983029:web:307aa29f1fc4173d1d7a7c",
  measurementId: "G-6W8SZ73GJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
