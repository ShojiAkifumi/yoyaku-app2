import React from "react";
import { Box, Button } from "@mui/material";

function Buttons({ back, next, children }) {
	return (
		<Box
			sx={{
				my: 4,
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				alignItems: "center",
			}}
			className="addBtn"
		>
			<Button variant="outlined" onClick={back} sx={{ m: 2 }}>
				戻る
			</Button>
			<Button variant="contained" size="large" onClick={next} sx={{ m: 2 }}>
				{children}
			</Button>
		</Box>
	);
}

export default Buttons;
