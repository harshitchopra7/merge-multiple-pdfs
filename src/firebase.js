import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2xxe29nTYzgbjAXKAFT0mfcbGV-ytCDc",
    authDomain: "phone-auth-9.firebaseapp.com",
    projectId: "phone-auth-9",
    storageBucket: "phone-auth-9.appspot.com",
    messagingSenderId: "553320494806",
    appId: "1:553320494806:web:54a4fdaa717b15d78c3b77",
    measurementId: "G-MB026K717H"
  };
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};