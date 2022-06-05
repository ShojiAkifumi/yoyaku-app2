import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function preventDefault(event) {
    event.preventDefault();
}

export default function ReserveCard({ reserveTime, reserveOrder, number }) {
    return (
        <Grid item xs={12} md={6}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography
                    component="h2"
                    variant="h6"
                    color="primary"
                    gutterBottom
                >
                    No.{number}
                </Typography>
                <Typography component="p" variant="h4">
                    {reserveTime}
                </Typography>
                <Typography color="text.secondary" sx={{ flex: 1, mb: 2 }}>
                    順番：{reserveOrder}人目
                </Typography>
                <div>
                    <Link color="primary" href="#" onClick={preventDefault}>
                        詳細
                    </Link>
                </div>
            </Paper>
        </Grid>
    );
}
