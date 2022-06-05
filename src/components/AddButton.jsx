import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddButton(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.path);
    };

    return (
        <Box sx={{ m: 2, textAlign: "center" }} className="addBtn">
            <Button variant="contained" size="large" onClick={handleClick}>
                {props.children}
            </Button>
        </Box>
    );
}
