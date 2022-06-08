import React from "react";
import Layout from "../components/Layout";
import { Paper, Box } from "@mui/material";
import AddButton from "../components/AddButton";
import UserForm from "../components/forms/UserForm";

function User({UserData}) {
	const [name, setName] = UserData.name
	const [email, setEmail] = UserData.email
	const [password, setPassword] = UserData.password
	const [bathday, setBathday] = UserData.bathday
	const [gender, setGender] = UserData.gender
	const [tel, setTel] = UserData.tel

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
