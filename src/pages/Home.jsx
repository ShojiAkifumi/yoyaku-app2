import MedicalCalendar from "../components/forms/MedicalCalendar";
import Grid from "@mui/material/Grid";
import ReserveCard from "../components/ReserveCard";
import MedicalCountPanel from "../components/MedicalCountPanel";
import SelectTime from "../components/forms/SelectTime";
import AuthForm from "../components/forms/AuthForm";
import { useState } from "react";
import Layout from "../components/Layout";
import GridPanel from "../components/GridPanel";
import AddButton from "../components/AddButton";
import Box from "@mui/material/Box";

function Home() {
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
    const [user, setUser] = useState(false);

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
                    <MedicalCalendar
                        setStep={setStep}
                        setDate={setDate}
                        setselectTime={setselectTime}
                    />
                    {step >= 1 && (
                        <>
                            <SelectTime
                                setStep={setStep}
                                date={date}
                                selectTime={selectTime}
                                setselectTime={setselectTime}
                            />
                            {step >= 2 && (
                                <>
                                    {user ? (
                                        <Box sx={{ mb: 5 }}>
                                            <AddButton
                                                path="/preview"
                                                date={date}
                                                selectTime={selectTime}
                                            >
                                                次へ
                                            </AddButton>
                                        </Box>
                                    ) : (
                                        <AuthForm />
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
