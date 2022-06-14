import { TextField } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function UserForm({
	name,
	setName,
	email,
	setEmail,
	password,
	setPassword,
	bathday,
	setBathday,
	gender,
	setGender,
	tel,
	setTel,
}) {
	return (
		<form
			className="form-field"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<dl>
				<dt>お名前</dt>
				<dd>
					<TextField
						// required
						id="name"
						name="name"
						label="お名前"
						fullWidth
						autoComplete="name"
						variant="outlined"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</dd>
			</dl>
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
			<dl>
				<dt>新規パスワード</dt>
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
			<dl>
				<dt>生年月日</dt>
				<dd>
					<TextField
						// required
						id="bathday"
						name="生年月日"
						label="生年月日"
						fullWidth
						variant="outlined"
						value={bathday}
						onChange={(e) => {
							setBathday(e.target.value);
						}}
					/>
				</dd>
			</dl>
			<dl>
				<dt>性別</dt>
				<dd>
					<FormControl sx={{ m: 1 }} fullWidth>
						<InputLabel id="selectTime">性別</InputLabel>
						<Select
							// required
							labelId="demo-multiple-name-label"
							id="demo-multiple-name"
							value={gender}
							defaultValue=""
							onChange={(e) => {
								setGender(e.target.value);
							}}
							sx={{ minWidth: 150 }}
							input={<OutlinedInput label="性別" />}
						>
							<MenuItem key="男性" value="男性">
								男性
							</MenuItem>
							<MenuItem key="女性" value="女性">
								女性
							</MenuItem>
						</Select>
					</FormControl>
				</dd>
			</dl>
			<dl>
				<dt>電話番号</dt>
				<dd>
					<TextField
						// required
						label="電話番号"
						type="tel"
						id="phone"
						name="phone"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						fullWidth
						autoComplete="tel"
						variant="outlined"
						value={tel}
						onChange={(e) => {
							setTel(e.target.value);
						}}
					/>
				</dd>
			</dl>
		</form>
	);
}

export default UserForm;
