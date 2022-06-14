import "./setting/App.scss";
import theme from "./setting/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./setting/fire";
import { useUserData } from "./components/hooks/useUserData";

function App() {
	const [user] = useAuthState(auth);

	const { UserData, getUserData } = useUserData();
	user && getUserData();

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Layout user={user} name={UserData.name}>
					{/* {message !== "" && <Message message={message} setMessage={setMessage} />} */}
					<Routes>
						<Route
							path="/"
							element={<Home user={user} UserData={UserData} />}
						/>
						<Route
							path="/login"
							element={<Login user={user} UserData={UserData} />}
						/>
						<Route
							path="/user"
							element={
								user ? (
									<User user={user} UserData={UserData} />
								) : (
									<Home UserData={UserData} />
								)
							}
						/>
					</Routes>
				</Layout>
			</BrowserRouter>
		</ThemeProvider>
	);
}
export default App;
