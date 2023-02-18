// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDallItEn40lnLjGsf1SeAvR-Oukw7nHGA",
  authDomain: "e-commerce-9e52e.firebaseapp.com",
  projectId: "e-commerce-9e52e",
  storageBucket: "e-commerce-9e52e.appspot.com",
  messagingSenderId: "688064687090",
  appId: "1:688064687090:web:eb32eb7d2e0507e202196b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
