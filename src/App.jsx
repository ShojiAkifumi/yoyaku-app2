import React, { useState } from "react";
import "./setting/App.scss";
import theme from "./setting/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./setting/fire";
import { getUserData } from "./components/getUserData";

function App() {
	const [user] = useAuthState(auth);
	const UserData = getUserData(user);
	const [message, setMessage] = useState("");

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Home
								user={user}
								UserData={UserData}
								message={message}
								setMessage={setMessage}
							/>
						}
					/>
					<Route
						path="/login"
						element={
							<Login
								user={user}
								UserData={UserData}
								message={message}
								setMessage={setMessage}
							/>
						}
					/>
					<Route
						path="/user"
						element={
							user ? (
								<User
									user={user}
									UserData={UserData}
									message={message}
									setMessage={setMessage}
								/>
							) : (
								<Home
									UserData={UserData}
									message={message}
									setMessage={setMessage}
								/>
							)
						}
					/>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}
export default App;
