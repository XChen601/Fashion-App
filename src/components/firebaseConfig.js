import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB3D3Yj3qXfiA_4F3dX84mFA4-E7LBxPng",
    authDomain: "perfect-fit-51e0a.firebaseapp.com",
    projectId: "perfect-fit-51e0a",
    storageBucket: "perfect-fit-51e0a.appspot.com",
    messagingSenderId: "1067698837842",
    appId: "1:1067698837842:web:76f6ef27f5097800be428b",
    measurementId: "G-2RFMYBGRHL"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;