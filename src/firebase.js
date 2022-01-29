import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRhRi4qKuExDf28mTsR3JkP7tXVzDTqU0",
  authDomain: "e-clone-f3139.firebaseapp.com",
  projectId: "e-clone-f3139",
  storageBucket: "e-clone-f3139.appspot.com",
  messagingSenderId: "752877167667",
  appId: "1:752877167667:web:8a4f7db03f941246afaf46",
  measurementId: "G-D016CRDHP0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db };
