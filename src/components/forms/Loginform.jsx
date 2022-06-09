import React from "react";
import { TextField } from "@mui/material";

function Loginform({ email, setEmail, password, setPassword }) {
	return (
		<form
			className="form-field"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
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
		</form>
	);
}

export default Loginform;
