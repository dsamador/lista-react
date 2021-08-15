import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration

var firebaseConfig = {

    apiKey: "AIzaSyB_V3nlPvH7bygYOvzyPC98jb3QAckuvZI",

    authDomain: "fb-crud-212fb.firebaseapp.com",

    projectId: "fb-crud-212fb",

    storageBucket: "fb-crud-212fb.appspot.com",

    messagingSenderId: "1058731910682",

    appId: "1:1058731910682:web:5aea97036a6389234093a3"

  };

  // Initialize Firebase

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore()
