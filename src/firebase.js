// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCJmwaCMVJtkBH44dRY02ctTFCSSHPEUKQ",
    authDomain: "a-1bf14.firebaseapp.com",
    projectId: "a-1bf14",
    storageBucket: "a-1bf14.appspot.com",
    messagingSenderId: "433115915409",
    appId: "1:433115915409:web:5bfd4e8d1e8f3c0c4c8b30",
    measurementId: "G-KTNRCH647V"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};