import React from "react";
import { Container, Typography } from "@mui/material";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";

const Checkout = () => {
    return (
        <>
            <PrimarySearchAppBar />
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 100 }}
            ></Container>
            <Container>
                <Typography variant="h3">Setting up Checkout soon</Typography>
            </Container>
        </>
    );
};

export default Checkout;
