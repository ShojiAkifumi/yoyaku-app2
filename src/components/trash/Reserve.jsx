import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Container from "@mui/material/Container";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReserveForm from "./ReserveForm";
import SendIcon from "@mui/icons-material/Send";

const steps = ["日付選択", "ログイン", "詳細情報"];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <ReserveForm />;
        case 1:
            return <ReserveForm />;
        case 2:
            return <ReserveForm />;
        default:
            throw new Error("Unknown step");
    }
}

export default function Reserve() {
    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: "100vh",
                overflow: "auto",
            }}
        >
            <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
                <Paper sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        {steps[activeStep]}
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography
                                    variant="h5"
                                    color="primary"
                                    align="center"
                                    gutterBottom
                                >
                                    送信完了しました
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            navigate("/");
                                        }}
                                        sx={{ mt: 3 }}
                                    >
                                        ホームへ戻る
                                    </Button>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    {activeStep !== 0 ? (
                                        <Button
                                            onClick={handleBack}
                                            sx={{ mt: 3, ml: 1 }}
                                        >
                                            戻る
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={() => navigate("/")}
                                            sx={{ mt: 3, ml: 1 }}
                                        >
                                            戻る
                                        </Button>
                                    )}

                                    {activeStep === 2 ? (
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 3, ml: 1 }}
                                            endIcon={<SendIcon />}
                                        >
                                            送信
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 3, ml: 1 }}
                                        >
                                            次へ
                                        </Button>
                                    )}
                                </Box>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </Container>
        </Box>
    );
}
