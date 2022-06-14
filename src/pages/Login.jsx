import { auth } from "../setting/fire";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Paper, Typography } from "@mui/material";
import Loginform from "../components/forms/Loginform";
import { useNavigate } from "react-router-dom";
import Buttons from "../components/Buttons";
import { useState } from "react";

function Login({ UserData }) {
	const navigate = useNavigate();
	const [email, setEmail] = useState(UserData.email);
	const [password, setPassword] = useState("");
	const signInClick = async () => {
		await signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				navigate("/");
			})
			.catch((err) => {
				console.log(err.message);
				navigate("/");
			});
	};

	return (
		<Paper
			sx={{
				py: 4,
				px: 3,
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Typography variant="h3" align="center" color="primary" sx={{ mb: 2 }}>
				ログイン
			</Typography>
			<Loginform
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
			/>
			<Buttons
				back={() => {
					navigate(-1);
				}}
				next={signInClick}
			>
				確認する
			</Buttons>
		</Paper>
	);
}

export default Login;
