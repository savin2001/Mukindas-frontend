import React from "react";
import {
    Container,
    Grid,
    Typography,
    Card,
    // Box,
    // Button,
    // Table,
    // TableBody,
    // TableCell,
    // TableContainer,
    // TableHead,
    // TableRow,
    // Paper,
    // List,
    // ListItemButton,
    // ListItemIcon,
    // ListItemText,
    // Collapse,
} from "@mui/material";
import CustomerSearchBar from "../components/CustomerSearchBar";

import CustomerMenu from "../components/CustomerMenu";
const Orders = () => {
    return (
        <>
            <CustomerSearchBar />
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 100 }}
            ></Container>
            <Container>
                <Grid
                    container
                    spacing={{ xs: 2, md: 1 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid
                        item
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                        md={3}
                    >
                        <CustomerMenu />
                    </Grid>
                    <Grid item xs={4} sm={8} md={9}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                p: 4,
                                textAlign: "left",
                            }}
                        >
                            <Typography variant="h3">
                                Setting up Orders soon
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Orders;
