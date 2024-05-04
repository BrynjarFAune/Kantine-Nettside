export const editing = () => {
	// Add doc
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

	// Edit doc
	try {
		await updateDoc(
			doc(db, "standardMenu", " xz2fFRoAgvoHJJFiiLSw"), {
			pris: 21
		});
		console.log("Document edited successfully");
	} catch (error) {
		console.error("Error editing doc:", error);
	}

	// Delete field
	try {
		await updateDoc(
			doc(db, "standardMenu", " xz2fFRoAgvoHJJFiiLSw"), {
			category: deleteField()
		});
		console.log("Deleted field successfully");
	} catch (error) {
		console.error("Error deleting field:", error);
	}

	// Delete document
	try {
		await deleteDoc(
			doc(db, "standardMenu", " xz2fFRoAgvoHJJFiiLSw")
		);
		console.log("Deleted document successfully");
	} catch (error) {
		console.error("Error deleting document:", error);
	}
}
