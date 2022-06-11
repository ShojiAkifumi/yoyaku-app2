import { auth, db } from "../setting/fire";
import { collection, query, where, getDocs } from "firebase/firestore";

export function getUserData(user) {
	let UserData = {
		name: "",
		email: "",
		password: "",
		bathday: "",
		gender: "",
		tel: "",
	};

	if (user) {
		const usersRef = collection(db, "userData");
		const q = query(usersRef, where("email", "==", auth.currentUser.email));
		getDocs(q).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				const data = doc.data();
				UserData.name = data.name;
				UserData.email = data.email;
				UserData.bathday = data.bathday;
				UserData.gender = data.gender;
				UserData.tel = data.tel;
			});
		});
	} else {
		UserData.name = "";
		UserData.email = "";
		UserData.bathday = "";
		UserData.gender = "";
		UserData.tel = "";
	}
	console.log(UserData);
	return UserData;
}
