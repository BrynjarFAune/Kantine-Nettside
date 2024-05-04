
console.log("entering script");
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
// https://firebase.google.com/docs/web/setup#available-libraries
console.log("configuring database");
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

console.log("initializing firebase");
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("initializing database");
const db = getFirestore(app);
console.log("database initialized");

console.log("adding document");

try {
	console.log("trying...");
	await addDoc(
		collection(db, "standardMenu"), {
		name: "Baguette",
		category: "food",
		price: "42"
	});
	console.log("Document added succsessfuly");
} catch (error) {
	console.error("Error adding doc:", error)
}
console.log("exiting script");
