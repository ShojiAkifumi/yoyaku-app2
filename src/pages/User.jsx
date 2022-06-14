import { useState } from "react";
import { Paper, Box } from "@mui/material";
import AddButton from "../components/AddButton";
import UserForm from "../components/forms/UserForm";

function User({ UserData }) {
	const [name, setName] = useState(UserData.name);
	const [email, setEmail] = useState(UserData.email);
	const [password, setPassword] = useState("");
	const [bathday, setBathday] = useState(UserData.bathday);
	const [gender, setGender] = useState(UserData.gender);
	const [tel, setTel] = useState(UserData.tel);

	return (
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
	);
}

export default User;
