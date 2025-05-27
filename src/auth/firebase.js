// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1fu62JZXgUNAWLsJJOaFO9ZDE7Rv9-ko",
    authDomain: "tannatco-abdaf.firebaseapp.com",
    projectId: "tannatco-abdaf",
    storageBucket: "tannatco-abdaf.firebasestorage.app",
    messagingSenderId: "835410631080",
    appId: "1:835410631080:web:4968c09bd513c641ce259d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export function crearUsuario(){

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        console.log("Credenciales", userCredential)
        const user = userCredential.user;
        console.log(user)
        // ...
    })
    .catch((error) => {
        console.log(error.code, errorMessage)
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}