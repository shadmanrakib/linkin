import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

//TEMP CONFIG
//TODO: make environment variables
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAEO0t1VfdMdeXIh3zLpWpl_inQdtSUb8k",
    authDomain: "linkin-96fdf.firebaseapp.com",
    projectId: "linkin-96fdf",
    storageBucket: "linkin-96fdf.appspot.com",
    messagingSenderId: "347340785562",
    appId: "1:347340785562:web:077daef4e9e516d78adc23",
    measurementId: "G-3XP4BCMV7L"
};

//Checks if firebase is already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
}

console.log("Firebase initialized");

const app = firebase.app();
const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db, app };