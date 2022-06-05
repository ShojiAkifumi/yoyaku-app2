import React from "react";
import Layout from "../components/Layout";
import { Paper, Typography } from "@mui/material";
import Loginform from "../components/forms/Loginform";
import AddButton from "../components/AddButton";
import Box from "@mui/material/Box";

function Login() {
    return (
        <Layout>
            <Paper
                sx={{
                    py: 4,
                    px: 3,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography
                    variant="h3"
                    align="center"
                    color="primary"
                    sx={{ mb: 2 }}
                >
                    ログイン
                </Typography>
                <Loginform />
                <Box sx={{ my: 5 }}>
                    <AddButton path="/">ログイン</AddButton>
                </Box>
            </Paper>
        </Layout>
    );
}

export default Login;
