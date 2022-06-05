import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import AddButton from "../AddButton";
import Loginform from "./Loginform";
import UserForm from "./UserForm";

function AuthForm() {
    const [login, setLogin] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bathday, setBathday] = useState("");
    const [gender, setGender] = useState("");
    const [tel, setTel] = useState("");

    return (
        <Box sx={{ my: 5 }}>
            <Typography variant="h4" align="center">
                3.受診者情報入力
            </Typography>
            <Typography
                variant="h6"
                className="auth-form-h6"
                sx={{ my: 5, mx: "auto" }}
            >
                再診、2回目以降の方はこちら
            </Typography>
            <Typography align="center">
                再診の方、アカウントをお持ちの方は、以下からログインください。
            </Typography>
            <Typography align="center" sx={{ mb: 3 }}>
                ログインいただくと、受診者情報が自動的に入力されます。
            </Typography>
            {login ? (
                <div>
                    <Loginform />
                    <Box
                        sx={{
                            my: 4,
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        className="addBtn"
                    >
                        <Button
                            variant="outlined"
                            onClick={() => {
                                setLogin(!login);
                            }}
                        >
                            戻る
                        </Button>
                        <AddButton path="/preview">次へ</AddButton>
                    </Box>
                </div>
            ) : (
                <div>
                    <Box sx={{ my: 5 }}>
                        <Box
                            sx={{ mb: 2, textAlign: "center" }}
                            className="addBtn"
                        >
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => {
                                    setLogin(!login);
                                }}
                            >
                                ログインする
                            </Button>
                        </Box>
                    </Box>
                    <Typography
                        variant="h6"
                        className="auth-form-h6"
                        sx={{ mx: "auto" }}
                    >
                        初診の方はこちら
                    </Typography>
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
                        <AddButton path="/preview">次へ</AddButton>
                    </Box>
                </div>
            )}
        </Box>
    );
}

export default AuthForm;
