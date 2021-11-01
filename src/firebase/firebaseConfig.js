
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { FacebookAuthProvider } from "@firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCMm0bh4tAxCfAFPvMD7inH3uEOOf0xNzA",
    authDomain: "paciente-46c5e.firebaseapp.com",
    projectId: "paciente-46c5e",
    storageBucket: "paciente-46c5e.appspot.com",
    messagingSenderId: "30476928449",
    appId: "1:30476928449:web:c62b94936229f32c8bdb40",
    measurementId: "G-RG9N33WKRC"
  };

  const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export{
    app, 
    google,
    facebook,
    db
}

