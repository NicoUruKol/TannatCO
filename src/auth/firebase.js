import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
const auth = getAuth();

export  async function CrearUsuario(email, password){

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Usuario creado:", userCredential.user);
        return userCredential.user;
    } catch (error) {
        console.error("Error al crear usuario:", error.code, error.message);
        throw error;
    }
}


export { app, auth };