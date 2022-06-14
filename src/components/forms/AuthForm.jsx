import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import Typography from "@mui/material/Typography";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { db, auth } from "../../setting/fire";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Loginform from "./Loginform";
import UserForm from "./UserForm";
import Buttons from "../Buttons";

function AuthForm({ setStep, UserData, userData, setUserData }) {
	const [login, setLogin] = useState(false);
	const [name, setName] = useState(UserData.name);
	const [email, setEmail] = useState(UserData.email);
	const [password, setPassword] = useState("");
	const [bathday, setBathday] = useState(UserData.bathday);
	const [gender, setGender] = useState(UserData.gender);
	const [tel, setTel] = useState(UserData.tel);

	const SetUser = () => {
		userData["お名前"] = name;
		return userData.concat([
			{
				key: "メールアドレス",
				value: email,
			},
			{ key: "生年月日", value: bathday },
			{ key: "性別", value: gender },
			{ key: "連絡先", value: tel },
		]);
	};

	const signInClick = async () => {
		await signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				setUserData(SetUser);
				// setMessage("ログイン成功しました。");
				setStep(4);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const signUpClick = async () => {
		await createUserWithEmailAndPassword(auth, email, password)
			.then(async () => {
				const ob = {
					name: name,
					email: email,
					bathday: bathday,
					gender: gender,
					tel: tel,
				};
				await addDoc(collection(db, "userData"), ob)
					.then(() => {
						setUserData(SetUser);
						// setMessage("サインアップ成功しました。");
						setStep(4);
					})
					.catch((err) => {
						console.log(err.message);
						// setMessage(
						// 	"予期せぬエラーが発生しました。もう一度やり直してください。"
						// );
					});
			})
			.catch((err) => {
				console.log(err.message);
				// setMessage(
				// 	"予期せぬエラーが発生しました。もう一度やり直してください。"
				// );
			});
	};

	return (
		<Box sx={{ my: 5 }}>
			<Typography variant="h4" align="center" id="3">
				3.受診者情報入力
			</Typography>
			<Typography
				variant="h6"
				className="auth-form-h6"
				sx={{ my: 5, mx: "auto" }}
			>
				再診、2回目以降の方はこちら
			</Typography>
			<Typography align="center">
				再診の方、アカウントをお持ちの方は、以下からログインください。
			</Typography>
			<Typography align="center" sx={{ mb: 3 }}>
				ログインいただくと、受診者情報が自動的に入力されます。
			</Typography>
			{login ? (
				<div>
					<Loginform
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
					/>
					<Buttons
						back={() => {
							setLogin(!login);
						}}
						next={() => {
							setUserData(signInClick);
						}}
					>
						確認する
					</Buttons>
				</div>
			) : (
				<div>
					<Box sx={{ my: 5 }}>
						<Box sx={{ mb: 2, textAlign: "center" }} className="addBtn">
							<Button
								variant="contained"
								size="large"
								onClick={() => {
									setLogin(!login);
								}}
							>
								ログインする
							</Button>
						</Box>
					</Box>
					<Typography variant="h6" className="auth-form-h6" sx={{ mx: "auto" }}>
						初診の方はこちら
					</Typography>
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
					<Box
						sx={{
							my: 5,
							display: "flex",
							justifyContent: "center",
						}}
						className="addBtn"
					>
						<Button variant="contained" size="large" onClick={signUpClick}>
							確認する
						</Button>
					</Box>
				</div>
			)}
		</Box>
	);
}

export default AuthForm;
