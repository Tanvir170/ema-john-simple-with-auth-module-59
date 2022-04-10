// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNNJBsd7vNPXsU6J_QRZQHXBBckW6pUTE",
  authDomain: "ema-john-simple-cdd50.firebaseapp.com",
  projectId: "ema-john-simple-cdd50",
  storageBucket: "ema-john-simple-cdd50.appspot.com",
  messagingSenderId: "493223108210",
  appId: "1:493223108210:web:c3fa43d2ddf7b6cab2aceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;