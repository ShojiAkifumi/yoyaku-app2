import { useEffect, useState } from "react";
import { db, auth } from "../../setting/fire";
import { query, orderBy, where, collection, getDocs } from "firebase/firestore";

function useGetReserveData(user) {
	const [ReserveData, setReserveData] = useState([]);
	useEffect(() => {
		if (user) {
			const reserveRef = collection(db, "ReserveData");
			const q = query(
				reserveRef,
				where("email", "==", auth.currentUser.email),
				orderBy("reserveTime")
			);

			getDocs(q).then((snapshot) => {
				snapshot.docs.forEach((doc, index) => {
					const data = doc.data();
					let month = data.reserveTime.slice(5, 7);
					if (month.slice(0, 1) === "0") {
						month = month.slice(1);
					}
					setReserveData((ReserveData) => [
						...ReserveData,
						{
							reserveTime: month + data.reserveTime.slice(7),
							reserveOrder: index + 1,
						},
					]);
				});
			});
		}
	}, [user]);
	return ReserveData;
}

export default useGetReserveData;
