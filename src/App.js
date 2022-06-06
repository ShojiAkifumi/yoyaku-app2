import React from "react";
import "./setting/App.scss";
import theme from "./setting/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./setting/fire";

export const Auth = React.createContext();

function App() {
	const [user] = useAuthState(auth);
	return (
		<ThemeProvider theme={theme}>
			<Auth.Provider value={user}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/user" element={user ? <User /> : <Home />} />
					</Routes>
				</BrowserRouter>
			</Auth.Provider>
		</ThemeProvider>
	);
}
export default App;
