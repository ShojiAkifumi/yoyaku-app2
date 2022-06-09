import MedicalCalendar from "../components/forms/MedicalCalendar";
import Grid from "@mui/material/Grid";

import ReserveCard from "../components/ReserveCard";
import MedicalCountPanel from "../components/MedicalCountPanel";
import SelectTime from "../components/forms/SelectTime";
import AuthForm from "../components/forms/AuthForm";
import { useEffect, useState, useContext } from "react";
import Message from "../components/Message";
import Layout from "../components/Layout";
import GridPanel from "../components/GridPanel";
import Buttons from "../components/Buttons";
import PreviewTable from "../components/PreviewTable";
import { Typography } from "@mui/material";
import { Auth } from "../App";
import { db, auth } from "../setting/fire";
import { query, orderBy, collection, getDocs } from "firebase/firestore";

function Home({ UserData, message, setMessage }) {
	const user = useContext(Auth);
	const [name] = UserData.name;
	const [step, setStep] = useState(1);
	const [date, setDate] = useState("");
	const [selectTime, setselectTime] = useState("");
	const [userData, setUserData] = useState([]);
	const [ReserveData, setReserveData] = useState([]);
	useEffect(() => {
		document.getElementById(step).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}, [step]);

	useEffect(() => {
		if (user) {
			const usersRef = collection(db, "ReserveData");
			const q = query(usersRef, orderBy("reserveTime"));
			getDocs(q).then((querySnapshot) => {
				querySnapshot.docs.forEach((doc, index) => {
					const data = doc.data();
					if (data.email === auth.currentUser.email) {
						let month = data.reserveTime.slice(4, 6);
						if (month.slice(0, 1) === "0") {
							month = month.slice(1);
						}
						setReserveData((ReserveData) => [
							...ReserveData,
							{
								reserveTime:
									month +
									"月" +
									data.reserveTime.slice(6, 8) +
									"日 " +
									data.reserveTime.slice(8, 10) +
									":" +
									data.reserveTime.slice(10, 12) +
									"～",
								reserveOrder: index + 1,
							},
						]);
					}
				});
			});
		}
	}, [user]);

	return (
		<Layout
			name={name}
			setStep={setStep}
			message={message}
			setMessage={setMessage}
		>
			{message !== "" && <Message message={message} setMessage={setMessage} />}
			<Grid container spacing={3}>
				{user && (
					<>
						<GridPanel>
							<MedicalCountPanel />
						</GridPanel>
						{ReserveData.map(({ reserveTime, reserveOrder }, index) => (
							<ReserveCard
								reserveTime={reserveTime}
								reserveOrder={reserveOrder}
								number={index + 1}
								key={index}
							/>
						))}
					</>
				)}

				<GridPanel>
					<Typography
						variant="h2"
						align="center"
						color="primary"
						sx={{ my: 5 }}
					>
						新規予約
					</Typography>
					{step >= 4 ? (
						<>
							<Typography variant="h4" align="center" sx={{ pt: 3 }} id="4">
								4.予約情報確認
							</Typography>
							<PreviewTable Data={userData} />
							<Buttons
								back={() => {
									setStep(1);
								}}
								next={() => {
									setStep(1);
									setMessage("予約完了しました。");
								}}
							>
								予約する
							</Buttons>
						</>
					) : (
						<>
							<MedicalCalendar
								setStep={setStep}
								setDate={setDate}
								setselectTime={setselectTime}
							/>
							{step >= 2 && (
								<>
									<SelectTime
										setStep={setStep}
										date={date}
										selectTime={selectTime}
										setselectTime={setselectTime}
										setUserData={setUserData}
										name={name}
									/>
									{step >= 3 && (
										<>
											{user ? (
												setStep(4)
											) : (
												<AuthForm
													user={user}
													setStep={setStep}
													userData={userData}
													setUserData={setUserData}
													UserData={UserData}
													setMessage={setMessage}
												/>
											)}
										</>
									)}
								</>
							)}
						</>
					)}
				</GridPanel>
			</Grid>
		</Layout>
	);
}

export default Home;
