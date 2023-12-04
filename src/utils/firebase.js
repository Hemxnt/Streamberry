// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAs4v8-iZgJOaO6oHibneG9DmoyTvCit4",
  authDomain: "streamberry-236b1.firebaseapp.com",
  projectId: "streamberry-236b1",
  storageBucket: "streamberry-236b1.appspot.com",
  messagingSenderId: "299811285327",
  appId: "1:299811285327:web:610f50cba679ecd7e53d3a",
  measurementId: "G-8MVK06005L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);