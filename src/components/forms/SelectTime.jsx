import React, { useState } from "react";
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

function SelectTime({ setStep, date, selectTime, setselectTime }) {
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setselectTime(value);
        setStep(2);
    };

    return (
        <Box sx={{ my: 5 }}>
            <Typography variant="h4" align="center">
                2.時間を選択
            </Typography>
            <dl className="form-field">
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
        </Box>
    );
}

export default SelectTime;