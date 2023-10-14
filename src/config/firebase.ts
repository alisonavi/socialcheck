// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9n3FrZ7mWLxSamXXPX8nloA7lkawH5uU",
  authDomain: "socialm-f040c.firebaseapp.com",
  projectId: "socialm-f040c",
  storageBucket: "socialm-f040c.appspot.com",
  messagingSenderId: "116343965261",
  appId: "1:116343965261:web:f4ae391eeb0808c3383e04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);