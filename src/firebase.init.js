// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtqedwsMY8YV3ePEjLdcZjM1ZgnGTM84U",
  authDomain: "atg-world-ab6df.firebaseapp.com",
  projectId: "atg-world-ab6df",
  storageBucket: "atg-world-ab6df.appspot.com",
  messagingSenderId: "1007271292617",
  appId: "1:1007271292617:web:cbaf1e9b251688ecad6718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;