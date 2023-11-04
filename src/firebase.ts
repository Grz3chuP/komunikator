// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN4I-s5Og--uHloqonE8doZ4UOMzIauXI",
  authDomain: "grecom-ab1c1.firebaseapp.com",
  databaseURL: "https://grecom-ab1c1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "grecom-ab1c1",
  storageBucket: "grecom-ab1c1.appspot.com",
  messagingSenderId: "176664469306",
  appId: "1:176664469306:web:27c279ebac159d46b8ba03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
