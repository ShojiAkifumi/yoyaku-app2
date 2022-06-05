import React from "react";
import { Grid, Paper } from "@mui/material";

function GridPanel({ children }) {
    return (
        <Grid item xs={12}>
            <Paper
                sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {children}
            </Paper>
        </Grid>
    );
}

export default GridPanel;
