import React from "react";
import Layout from "../components/Layout";
import { green } from "@mui/material/colors";
import { Paper, Typography } from "@mui/material";
import AddButton from "../components/AddButton";

function Success() {
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
                    variant="h4"
                    component="h1"
                    align="center"
                    color={green[600]}
                    sx={{ my: 5 }}
                >
                    完了しました
                </Typography>
                <AddButton path="/">トップへ戻る</AddButton>
            </Paper>
        </Layout>
    );
}

export default Success;
