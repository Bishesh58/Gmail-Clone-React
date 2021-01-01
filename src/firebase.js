import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgvZHMcS5kN8GmkosABEMWNIlQ-cNErAk",
    authDomain: "clone-9a3c7.firebaseapp.com",
    projectId: "clone-9a3c7",
    storageBucket: "clone-9a3c7.appspot.com",
    messagingSenderId: "658235071047",
    appId: "1:658235071047:web:3e8d3505a7f03e91386f62",
    measurementId: "G-PTERGKK7G7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };