import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CallIcon from "@mui/icons-material/Call";
import Paper from "@mui/material/Paper";

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99 }}
            elevation={3}
        >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="ホーム" icon={<HomeIcon />} />
                <BottomNavigationAction
                    label="新規予約"
                    icon={<AddCircleOutlineIcon />}
                />
                <BottomNavigationAction
                    label="お問い合わせ"
                    icon={<CallIcon />}
                />
            </BottomNavigation>
        </Paper>
    );
}
