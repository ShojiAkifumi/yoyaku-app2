import { useCallback } from "react";
import Typography from "@mui/material/Typography";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import jaLocale from "@fullcalendar/core/locales/ja";
import dayGridPlugin from "@fullcalendar/daygrid";

function MedicalCalendar({ setStep, setDate, setselectTime }) {
	const handleDateClick = useCallback((arg) => {
		setStep(2);
		const date = arg.dateStr.replace(/(.+)-(.+)-(.+)/g, "$1年$2月$3日");
		setDate(date);
		setselectTime("");
	}, []);
	return (
		<div>
			<Typography variant="h4" align="center">
				1.日付を選択
			</Typography>
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin]}
				initialView="dayGridMonth"
				locales={[jaLocale]}
				locale="ja"
				events={[
					{
						title: "×",
						start: "2022-06-14",
						classNames: ["disable-day"],
					},
					{
						title: "×",
						start: "2022-06-15",
						classNames: ["disable-day"],
					},
				]}
				dateClick={handleDateClick}
			/>
		</div>
	);
}

export default MedicalCalendar;
