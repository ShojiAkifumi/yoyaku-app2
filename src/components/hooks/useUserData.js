import { useState } from "react";
import { auth, db } from "../../setting/fire";
import { collection, query, where, getDocs } from "firebase/firestore";

export function useUserData() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [bathday, setBathday] = useState("");
	const [gender, setGender] = useState("");
	const [tel, setTel] = useState("");
	const UserData = {
		name,
		email,
		bathday,
		gender,
		tel,
	};
	const getUserData = async () => {
		const usersRef = collection(db, "userData");
		const q = query(usersRef, where("email", "==", auth.currentUser.email));
		await getDocs(q).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				const data = doc.data();
				setName(data.name);
				setEmail(data.email);
				setGender(data.bathday);
				setBathday(data.gender);
				setTel(data.tel);
			});
		});
	};
	return { UserData, getUserData };
}
