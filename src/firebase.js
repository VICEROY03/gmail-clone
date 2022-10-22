import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMzHBcfGWb4n2qRkAD610D-yRnTT58A-o",
    authDomain: "clone-51047.firebaseapp.com",
    projectId: "clone-51047",
    storageBucket: "clone-51047.appspot.com",
    messagingSenderId: "663134592642",
    appId: "1:663134592642:web:774e32d9e190977c5b9e9b",
    measurementId: "G-K60PGMT3X0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };