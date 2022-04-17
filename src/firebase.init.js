// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFoQ_qUjUb-nChm8jlQY3rNsoBSQj0P10",
    authDomain: "fhrc-production.firebaseapp.com",
    projectId: "fhrc-production",
    storageBucket: "fhrc-production.appspot.com",
    messagingSenderId: "865248852121",
    appId: "1:865248852121:web:c1d6881aaf6bf3e481a008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;