// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOb2HbXeKDnAhTGC8Dgo0PPpskIhT-6YA",
  authDomain: "free-school-ace8c.firebaseapp.com",
  projectId: "free-school-ace8c",
  storageBucket: "free-school-ace8c.appspot.com",
  messagingSenderId: "164954841675",
  appId: "1:164954841675:web:29f96d9943cfb20ffae3ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) 
export default auth