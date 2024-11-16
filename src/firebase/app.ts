// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHOosE2qdOybzFe854bl9OSzkRWVvP41A",
  authDomain: "yufeng-resume.firebaseapp.com",
  databaseURL:
    "https://yufeng-resume-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "yufeng-resume",
  storageBucket: "yufeng-resume.appspot.com",
  messagingSenderId: "832717267595",
  appId: "1:832717267595:web:5bf80319116662fdaeaa8e",
  measurementId: "G-67PG7PNNBC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
