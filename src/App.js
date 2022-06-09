import React, { useState, useEffect } from "react";
import "./setting/App.scss";
import theme from "./setting/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./setting/fire";
import { collection, query, where, getDocs } from "firebase/firestore";

export const Auth = React.createContext();

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [bathday, setBathday] = useState("");
	const [gender, setGender] = useState("");
	const [tel, setTel] = useState("");

	const [message, setMessage] = useState("");

	const [user] = useAuthState(auth);

	const UserData = {
		name: [name, setName],
		email: [email, setEmail],
		password: [password, setPassword],
		bathday: [bathday, setBathday],
		gender: [gender, setGender],
		tel: [tel, setTel],
	};

	useEffect(() => {
		if (user) {
			const usersRef = collection(db, "userData");
			const q = query(usersRef, where("email", "==", auth.currentUser.email));
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
		}
	}, [user]);

	return (
		<ThemeProvider theme={theme}>
			<Auth.Provider value={user}>
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={
								<Home
									UserData={UserData}
									message={message}
									setMessage={setMessage}
								/>
							}
						/>
						<Route
							path="/login"
							element={<Login UserData={UserData} setMessage={setMessage} />}
						/>
						<Route
							path="/user"
							element={
								user ? (
									<User UserData={UserData} setMessage={setMessage} />
								) : (
									<Home />
								)
							}
						/>
					</Routes>
				</BrowserRouter>
			</Auth.Provider>
		</ThemeProvider>
	);
}
export default App;
