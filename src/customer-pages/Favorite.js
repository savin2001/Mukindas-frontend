import React from "react";
import {
    Container,
    Grid,
    Typography,
    Card,
    Box,
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
import CustomerMenu from "../components/CustomerMenu";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CustomerSearchBar from "../components/CustomerSearchBar";
const Favorite = () => {
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    return (
        <>
            {isLogInTrue &&
            isLogInTrue.userLogin &&
            isLogInTrue.user.role === "customer" ? (
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
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
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
                                        Setting up favorites page soon
                                    </Typography>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </>
            ) : (
                <>
                    <Container
                        sx={{
                            flexGrow: 1,
                            my: 3,
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h2"
                                sx={{
                                    color: "primary.light",
                                    mb: 5,
                                }}
                            >
                                Page not found
                            </Typography>
                            <Link
                                to={`/login`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <Typography variant="h6" color="secondary">
                                    <KeyboardBackspaceIcon fontSize="small" />
                                    {"  "}
                                    <span>Log into your account</span>
                                </Typography>
                            </Link>
                        </Box>
                    </Container>
                </>
            )}
        </>
    );
};

export default Favorite;
