// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMKypDklqCtpeaBRv5NEqbeNS-XI4F_OY",
  authDomain: "agrifincaster.firebaseapp.com",
  projectId: "agrifincaster",
  storageBucket: "agrifincaster.appspot.com",
  messagingSenderId: "209562331382",
  appId: "1:209562331382:web:7008fd03567e1448ffe4d7",
  measurementId: "G-CBLK8TF2EP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };