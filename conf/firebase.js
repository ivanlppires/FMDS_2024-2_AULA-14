// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsXEPCjByzfAzi47IoyjbRwwlC85HQVsc",
  authDomain: "fmds-auth01.firebaseapp.com",
  projectId: "fmds-auth01",
  storageBucket: "fmds-auth01.appspot.com",
  messagingSenderId: "343514225064",
  appId: "1:343514225064:web:1fcb2c81dd305812eba59d"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;