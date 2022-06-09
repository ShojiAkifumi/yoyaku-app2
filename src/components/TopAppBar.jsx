import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../App";
import { signOut } from "firebase/auth";
import { auth } from "../setting/fire";

export default function TopAppBar({
	children,
	name,
	setStep,
	message,
	setMessage,
}) {
	const user = useContext(Auth);
	const [anchorEl, setAnchorEl] = useState(null);
	const navigate = useNavigate();

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleUserEdit = () => {
		setAnchorEl(null);
		navigate("/user");
	};
	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				setAnchorEl(null);
				setStep(1);
				setMessage("ログアウトしました。");
				navigate("/");
			})
			.catch((error) => {
				setStep(1);
				console.log(error);
				setAnchorEl(null);
			});
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="absolute">
				<Container maxWidth="md">
					<Toolbar>
						<Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
							<Link to="/" className="topLogo">
								{children}
							</Link>
						</Typography>
						{user ? (
							<div>
								<IconButton
									size="large"
									className="auth-btn"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleMenu}
									color="inherit"
								>
									<AccountCircle />
									<span>{name}様</span>
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={Boolean(anchorEl)}
									onClose={handleClose}
								>
									<MenuItem onClick={handleUserEdit}>アカウント設定</MenuItem>
									<MenuItem onClick={handleLogout}>ログアウト</MenuItem>
								</Menu>
							</div>
						) : (
							<div>
								<IconButton
									size="large"
									className="auth-btn"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={() => {
										navigate("/login");
									}}
									color="inherit"
								>
									<LoginIcon />
									<span>ログイン</span>
								</IconButton>
							</div>
						)}
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}
