import React, { useState } from "react";
import Layout from "../components/Layout";
import { Paper, Box } from "@mui/material";
import AddButton from "../components/AddButton";
import UserForm from "../components/forms/UserForm";

function User() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bathday, setBathday] = useState("");
    const [gender, setGender] = useState("");
    const [tel, setTel] = useState("");
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
                <UserForm
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    bathday={bathday}
                    setBathday={setBathday}
                    gender={gender}
                    setGender={setGender}
                    tel={tel}
                    setTel={setTel}
                />
                <Box sx={{ my: 5 }}>
                    <AddButton path="/success">更新</AddButton>
                </Box>
            </Paper>
        </Layout>
    );
}

export default User;
