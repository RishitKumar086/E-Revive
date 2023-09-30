import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDLX5gAfD-ZqJjS-Fq8zGE7RBl3jGxG9Nw",
  authDomain: "magnetic-racer-382205.firebaseapp.com",
  projectId: "magnetic-racer-382205",
  storageBucket: "magnetic-racer-382205.appspot.com",
  messagingSenderId: "650904046389",
  appId: "1:650904046389:web:d683674d7197dc7f6a9a7c",
  measurementId: "G-23XQ4F72JT"
};

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export