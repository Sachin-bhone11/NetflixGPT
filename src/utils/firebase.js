// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrYEgWrgHpFYhHTurA5iQF_N8pLghR1gE",
  authDomain: "netflixgpt-cae9b.firebaseapp.com",
  projectId: "netflixgpt-cae9b",
  storageBucket: "netflixgpt-cae9b.firebasestorage.app",
  messagingSenderId: "906735279723",
  appId: "1:906735279723:web:86b94e477e235e174f1b2e",
  measurementId: "G-RKZ8N9C9PN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
