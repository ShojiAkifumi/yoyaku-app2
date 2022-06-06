import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import TopAppBar from "../components/TopAppBar";

function Layout({ children }) {
	return (
		<>
			<TopAppBar>ホーム</TopAppBar>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === "light"
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: "100vh",
						overflow: "auto",
					}}
					id="0"
				>
					<Toolbar />
					<Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
						{children}
					</Container>
				</Box>
			</Box>
		</>
	);
}

export default Layout;
