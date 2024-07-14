// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjBjNLX8wkEso1h1p1o0RmsusXWHxbTMo",
  authDomain: "react-dragon-news-auth-c818c.firebaseapp.com",
  projectId: "react-dragon-news-auth-c818c",
  storageBucket: "react-dragon-news-auth-c818c.appspot.com",
  messagingSenderId: "459910102264",
  appId: "1:459910102264:web:9a41339ce50ad0f30c8f0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;