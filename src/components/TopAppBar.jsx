import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";

export default function TopAppBar(props) {
    const [auth, setAuth] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute">
                <Container maxWidth="md">
                    <Toolbar>
                        <Typography
                            variant="h5"
                            component="h1"
                            sx={{ flexGrow: 1 }}
                        >
                            <Link to="/" className="topLogo">
                                {props.children}
                            </Link>
                        </Typography>
                        {auth ? (
                            <div>
                                <IconButton
                                    size="large"
                                    className="auth-btn"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                    <span>ゲスト様</span>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>
                                        アカウント設定
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        ログアウト
                                    </MenuItem>
                                </Menu>
                            </div>
                        ) : (
                            <div>
                                <IconButton
                                    size="large"
                                    className="auth-btn"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={() => {
                                        navigate("/login");
                                    }}
                                    color="inherit"
                                >
                                    <LoginIcon />
                                    <span>ログイン</span>
                                </IconButton>
                            </div>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
