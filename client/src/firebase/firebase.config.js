// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk5j7_TC0auWPNeQryC4wuz3WiKHPbbCw",
  authDomain: "du-library-book.firebaseapp.com",
  projectId: "du-library-book",
  storageBucket: "du-library-book.appspot.com",
  messagingSenderId: "573997552650",
  appId: "1:573997552650:web:e653169d3cc98cdf267bf3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);