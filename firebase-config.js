// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5NdcVxl1m77m4PBGaU9PL3jqvLtfJL9I",
  authDomain: "pos-web-3ca21.firebaseapp.com",
  projectId: "pos-web-3ca21",
  storageBucket: "pos-web-3ca21.firebasestorage.app",
  messagingSenderId: "163092162625",
  appId: "1:163092162625:web:eeef79875a66d327de3ec0",
  measurementId: "G-GW32ZLNVN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); // This must be defined before you use it