import MedicalCalendar from "../components/forms/MedicalCalendar";
import Grid from "@mui/material/Grid";

import ReserveCard from "../components/ReserveCard";
import MedicalCountPanel from "../components/MedicalCountPanel";
import SelectTime from "../components/forms/SelectTime";
import AuthForm from "../components/forms/AuthForm";
import { useEffect, useState } from "react";
import GridPanel from "../components/GridPanel";
import Buttons from "../components/Buttons";
import PreviewTable from "../components/PreviewTable";
import { Typography } from "@mui/material";
import useGetReserveData from "../components/hooks/useGetReserveData";
import { submitReserveData } from "../components/hooks/submitReserveData";

function Home({ user, UserData }) {
	const [step, setStep] = useState(1);
	const [date, setDate] = useState("");
	const [selectTime, setselectTime] = useState("");
	const [userData, setUserData] = useState([]);
	useEffect(() => {
		document.getElementById(step).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}, [step]);

	const ReserveData = useGetReserveData(user);

	return (
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
				<Typography variant="h2" align="center" color="primary" sx={{ my: 5 }}>
					新規予約
				</Typography>
				{step >= 4 ? (
					<>
						<Typography variant="h4" align="center" sx={{ pt: 3 }} id="4">
							4.予約情報確認
						</Typography>
						<PreviewTable Data={userData} />
						<Buttons
							back={() => setStep(1)}
							next={() => {
								setStep(1);
								submitReserveData(date, selectTime);
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
										{user ? (
											setStep(4)
										) : (
											<AuthForm
												user={user}
												setStep={setStep}
												userData={userData}
												UserData={UserData}
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
	);
}

export default Home;
