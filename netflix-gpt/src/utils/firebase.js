// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6TENgFldjQQx9wTBPEY2ootv833vtyRw",
  authDomain: "netflix-gpt-dfa70.firebaseapp.com",
  projectId: "netflix-gpt-dfa70",
  storageBucket: "netflix-gpt-dfa70.appspot.com",
  messagingSenderId: "525245081126",
  appId: "1:525245081126:web:1d76d5c0c9ec6f49af68e7",
  measurementId: "G-X2GNJ3RVR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();