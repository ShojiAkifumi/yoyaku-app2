import { db, auth } from "../../setting/fire";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const submitReserveData = async (date, selectTime) => {
	const ob = {
		email: auth.currentUser.email,
		reserveTime: date + " " + selectTime,
		timeStamp: serverTimestamp(),
	};
	await addDoc(collection(db, "ReserveData"), ob)
		.then(() => {
			// setMessage()
		})
		.catch((err) => {
			console.log(err.message);
		});
};
