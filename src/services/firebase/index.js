// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG0nCUSmDpWFKxI7bNbilYxKA66ldIYLE",
  authDomain: "next-ecommerce-ed9ee.firebaseapp.com",
  projectId: "next-ecommerce-ed9ee",
  storageBucket: "next-ecommerce-ed9ee.appspot.com",
  messagingSenderId: "301102275669",
  appId: "1:301102275669:web:84e5c85e670d4a9535c8dc",
  measurementId: "G-RN2K6MYM84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// social sign in
export const socialSignin = ({ type, onSuccess, onError= () => {}}) => {
    let provider;
    if (type == 'google') {
        provider = new GoogleAuthProvider();
    } else if (type == 'facebook') {
        provider = new FacebookAuthProvider();
    } else {
        return;
    }

    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
        // // For Access Token. You can use it to access the 3rd Social API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        onSuccess(result);
    }).catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        onError(error);
    })
}