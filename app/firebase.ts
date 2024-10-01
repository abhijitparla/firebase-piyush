// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzTqAlXvAyqAu5rxvJazzDewR-sKwsJIU",
  authDomain: "real-me-6a76b.firebaseapp.com",
  projectId: "real-me-6a76b",
  storageBucket: "real-me-6a76b.appspot.com",
  messagingSenderId: "38881043721",
  appId: "1:38881043721:web:5b0f0e508c9074d8c89fd8",
  databseURL:"https://real-me-6a76b-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);