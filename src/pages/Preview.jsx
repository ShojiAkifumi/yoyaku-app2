import React from "react";
import Layout from "../components/Layout";
import { Box, Paper } from "@mui/material";
import AddButton from "../components/AddButton";

function Preview() {
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
                <div className="form-field preview">
                    <dl>
                        <dt>お名前</dt>
                        <dd>佐藤 敏夫</dd>
                    </dl>
                    <dl>
                        <dt>日付</dt>
                        <dd>7月7日</dd>
                    </dl>
                    <dl>
                        <dt>時間</dt>
                        <dd>15:00～</dd>
                    </dl>
                </div>
                <Box sx={{ my: 3 }}>
                    <AddButton path="/success">予約する</AddButton>
                </Box>
            </Paper>
        </Layout>
    );
}

export default Preview;
