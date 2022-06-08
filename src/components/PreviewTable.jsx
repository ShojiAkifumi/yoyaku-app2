import React from "react";
import { Box } from "@mui/material";

function PreviewTable({ Data }) {
	return (
		<Box sx={{ my: 3 }}>
			<div className="form-field preview">
				{Data.map(({ key, value }, index) => (
					<dl key={index}>
						<dt>{key}</dt>
						<dd>{value}</dd>
					</dl>
				))}
			</div>
		</Box>
	);
}

export default PreviewTable;
