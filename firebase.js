import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIs-cZmEMFgcP0XSOaI-2rHsQn3egQ7AE",
  authDomain: "al-mustafa-react.firebaseapp.com",
  projectId: "al-mustafa-react",
  storageBucket: "al-mustafa-react.firebasestorage.app",
  messagingSenderId: "528873263467",
  appId: "1:528873263467:web:8aebb9f45901d5a1227c2e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
}