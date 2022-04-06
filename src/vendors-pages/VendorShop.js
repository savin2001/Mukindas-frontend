import React from "react";
import { Container, Typography } from "@mui/material";

const VendorShop = () => {
    return (
        <>
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 100 }}
            ></Container>
            <Container>
                <Typography variant="h3">Setting up shop soon</Typography>
            </Container>
        </>
    );
};

export default VendorShop;