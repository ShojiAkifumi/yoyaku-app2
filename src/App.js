import React from "react";
import "./setting/App.scss";
import theme from "./setting/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Preview from "./pages/Preview";
import User from "./pages/User";
import Success from "./pages/Success";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/preview" element={<Preview />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
export default App;
