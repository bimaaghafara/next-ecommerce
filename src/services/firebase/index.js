// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

// google sign in
const provider = new GoogleAuthProvider();
const auth = getAuth();
export const signInWithGoogle = ({ onSuccess, onError= () => {}}) => {
    signInWithPopup(auth, provider).then((result) => {
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        onSuccess(result);
    }).catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // console.error(error);
        onError(error);
    })
}