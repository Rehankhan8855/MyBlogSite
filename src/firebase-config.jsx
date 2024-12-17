
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwPXDdPsKXfhEfGXWP25JUB_q0Yp2EyIo",
  authDomain: "myblogsite-af659.firebaseapp.com",
  projectId: "myblogsite-af659",
  storageBucket: "myblogsite-af659.firebasestorage.app",
  messagingSenderId: "380751426516",
  appId: "1:380751426516:web:004e43d0d7aeea68949c41",
  measurementId: "G-G44G6TB7LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();