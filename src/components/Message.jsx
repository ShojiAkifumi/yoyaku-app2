import React from "react";
import Alert from "@mui/material/Alert";

function Message({ message, setMessage }) {
	return (
		<div className="alert-wrapper">
			<Alert
				severity="success"
				onClose={() => {
					setMessage("");
				}}
			>
				{message}
			</Alert>
		</div>
	);
}

export default Message;
