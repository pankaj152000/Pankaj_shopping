import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config={
    apiKey: "AIzaSyA-3GJVsIL9lwPy5-1lZ_p-dgC6YfUODj8",
    authDomain: "clothing-db-b6010.firebaseapp.com",
    projectId: "clothing-db-b6010",
    storageBucket: "clothing-db-b6010.appspot.com",
    messagingSenderId: "245412320413",
    appId: "1:245412320413:web:16b6a9e4d46c00778a3074",
    measurementId: "G-LYV7MWWCS8"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

 const provider =new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle =()=>auth.signInWithPopup(provider);

 export default firebase;
 
