

import firebase from "firebase";
require("@firebase/firestore");

 var firebaseConfig = {
    apiKey: "AIzaSyA__K6ERrNyZ26tkBnk1qCV65CrruRe4l4",
    authDomain: "book-santa-95bcb.firebaseapp.com",   
    projectId: "book-santa-95bcb",
    storageBucket: "book-santa-95bcb.appspot.com",
    messagingSenderId: "948364712895",
    appId: "1:948364712895:web:77cf9a66ec71e2864edf0a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
