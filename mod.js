
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// TODO delegate some of these imports to the apropriate files
import { getFirestore, addDoc, updateDoc, deleteField, doc, collection, setDoc, getDoc, getDocs, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBQWgKwrnoyuXkW0Kx3UHxyxLgjvvjv_as",
	authDomain: "canteendb-dec79.firebaseapp.com",
	projectId: "canteendb-dec79",
	storageBucket: "canteendb-dec79.appspot.com",
	messagingSenderId: "518850651484",
	appId: "1:518850651484:web:9d09b54935dd15e29bcd99",
	measurementId: "G-ED1W6F5BWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import { editing } from './dbEdit';
import { reading } from "./dbRead";
