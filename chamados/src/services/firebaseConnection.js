// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBKV0otT8_g4QJ3_fft53ALRpTmo9QnD2U",
    authDomain: "tickets-7af12.firebaseapp.com",
    projectId: "tickets-7af12",
    storageBucket: "tickets-7af12.appspot.com",
    messagingSenderId: "592947251865",
    appId: "1:592947251865:web:0f109277ab942e319d4608",
    measurementId: "G-0ENR3VT1PW"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export {auth, db, storage};