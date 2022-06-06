import MedicalCalendar from "../components/forms/MedicalCalendar";
import Grid from "@mui/material/Grid";
import ReserveCard from "../components/ReserveCard";
import MedicalCountPanel from "../components/MedicalCountPanel";
import SelectTime from "../components/forms/SelectTime";
import AuthForm from "../components/forms/AuthForm";
import { useEffect, useState, useContext } from "react";
import Layout from "../components/Layout";
import GridPanel from "../components/GridPanel";
import Buttons from "../components/Buttons";
import PreviewTable from "../components/PreviewTable";
import { Typography } from "@mui/material";
import { Auth } from "../App";

function Home() {
	const user = useContext(Auth);
	const ReserveData = [
		{
			reserveTime: "6月8日 15:00～",
			reserveOrder: 2,
		},
		{
			reserveTime: "6月14日 14:00～",
			reserveOrder: 8,
		},
		{
			reserveTime: "6月20日 16:00～",
			reserveOrder: 15,
		},
	];
	const [step, setStep] = useState(0);
	const [date, setDate] = useState("");
	const [selectTime, setselectTime] = useState("");
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		document.getElementById(step).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}, [step]);

	return (
		<Layout>
			<Grid container spacing={3}>
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
				<GridPanel>
					<Typography
						variant="h2"
						align="center"
						color="primary"
						sx={{ my: 5 }}
						id="1"
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
									setUserData([]);
									setStep(1);
								}}
								next={() => {
									setStep(0);
									console.log("予約完了しました(仮)");
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
									/>
									{step >= 3 && (
										<>
											{user[0] ? (
												setStep(4)
											) : (
												<AuthForm
													setStep={setStep}
													userData={userData}
													setUserData={setUserData}
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
