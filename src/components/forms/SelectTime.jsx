import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const times = [
	"9:00～",
	"10:00～",
	"11:00～",
	"12:00～",
	"13:00～",
	"14:00～",
	"15:00～",
	"16:00～",
	"17:00～",
];

function SelectTime({ setStep, date, selectTime, setselectTime, setUserData }) {
	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setselectTime(value);
		setUserData([
			{ key: "お名前", value: "test" },
			{ key: "日付", value: date },
			{ key: "時間", value: value },
		]);
		setStep(3);
	};

	return (
		<Box sx={{ my: 5 }}>
			<Typography variant="h4" align="center" id="2">
				2.時間を選択
			</Typography>
			<div className="form-field">
				<dl>
					<dt>時間選択</dt>
					<dd>
						<FormControl sx={{ m: 1 }} fullWidth>
							<InputLabel id="selectTime">{date}</InputLabel>
							<Select
								labelId="selectTime"
								id="selectTime"
								value={selectTime}
								onChange={handleChange}
								input={<OutlinedInput label={date} />}
								defaultValue=""
							>
								{times.map((time, index) => (
									<MenuItem key={index} value={time}>
										{time}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</dd>
				</dl>
			</div>
		</Box>
	);
}

export default SelectTime;
