import React, { useEffect, useState, useContext } from "react";
import Layout from "../components/Layout";
import { db } from "../setting/fire";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Paper, Box } from "@mui/material";
import AddButton from "../components/AddButton";
import UserForm from "../components/forms/UserForm";

function User() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [bathday, setBathday] = useState("");
	const [gender, setGender] = useState("");
	const [tel, setTel] = useState("");

	useEffect(() => {
		const usersRef = collection(db, "userData");
		const q = query(usersRef, where("email", "==", "example@mail.com"));
		getDocs(q).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				const data = doc.data();
				setName(data.name);
				setEmail(data.email);
				setBathday(data.bathday);
				setGender(data.gender);
				setTel(data.tel);
			});
		});
	}, []);

	return (
		<Layout>
			<Paper
				sx={{
					py: 4,
					px: 3,
					display: "flex",
					flexDirection: "column",
				}}
			>
				<UserForm
					name={name}
					setName={setName}
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
					bathday={bathday}
					setBathday={setBathday}
					gender={gender}
					setGender={setGender}
					tel={tel}
					setTel={setTel}
				/>
				<Box sx={{ my: 5 }}>
					<AddButton path="/">更新</AddButton>
				</Box>
			</Paper>
		</Layout>
	);
}

export default User;
