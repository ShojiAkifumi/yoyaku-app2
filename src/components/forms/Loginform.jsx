import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

function Loginform() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <div className="form-field">
            <dl>
                <dt>メールアドレス</dt>
                <dd>
                    <TextField
                        // required
                        id="email"
                        name="email"
                        label="メールアドレス"
                        type="email"
                        fullWidth
                        autoComplete="email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </dd>
            </dl>
            <dl className="form-field">
                <dt>パスワード</dt>
                <dd>
                    <TextField
                        // required
                        id="password"
                        name="password"
                        label="パスワード"
                        type="password"
                        fullWidth
                        autoComplete="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </dd>
            </dl>
        </div>
    );
}

export default Loginform;