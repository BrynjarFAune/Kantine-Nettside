export const reading = () => {
	// Add new document
	try {
		await setDoc(
			doc(db, "standardMenu", "ice-tea"), {
			category: "drinks",
			name: "is-te lime",
			price: 32,
		})
	} catch (error) {
		console.error("Error adding prod:", error);
	}

	// Read document
	try {
		const docSnap = await getDoc(
			doc(db, "standardMenu", "ice-tea")
		);
		console.log("Document data:", docSnap.data());
		console.log("name:", docSnap.name);
	} catch (error) {
		console.error("Error reading document:", error);
	}

	// Get all documents from a collection
	try {
		const snapshot = await getDocs(
			collection(db, "standardMenu")
		);
		snapshot.forEach((docSnap) => {
			console.log(docSnap.data().name, docSnap.data().price);
		});
	} catch (error) {
		console.error("Error reading from db:", error);
	}

	// Get all products sorted by category
	try {
		query(
			collection(db, "standardMenu"),
			orderBy("category")
		);
	} catch (error) {
		console.error("Error getting sorted documents:", error);
	}

	// Get only drinks
	try {
		const drinkSnapshot = await getDocs(
			query(
				collection(db, "standardMenu"),
				where("category", "==", "drinks")
			)
		);
		drinkSnapshot.forEach((drinkSnap) => {
			console.log(
				drinkSnap.data().name,
				drinkSnap.data().price,
			);
		});
	} catch (error) {
		console.error("Error getting drinks from db:", error);
	}
}
