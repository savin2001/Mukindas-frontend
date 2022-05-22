import React from "react";
import {
    Container,
    Grid,
    Typography,
    Card,
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import VendorSearchBar from "../components/VendorSearchBar";
import VendorMenu from "../components/VendorMenu";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function createRow(trans, date, tot) {
    return { trans, date, tot };
}

const rows = [
    createRow("Transaction 1", "14/02/2021", "5"),
    createRow("Transaction 2", "14/02/2021", "4"),
    createRow("Transaction 3", "14/02/2021", "6"),
    createRow("Transaction 4", "14/02/2021", "3"),
    createRow("Transaction 5", "14/02/2021", "7"),
    createRow("Transaction 6", "14/02/2021", "5"),
    createRow("Transaction 7", "14/02/2021", "9"),
    createRow("Transaction 8", "14/02/2021", "5"),
    createRow("Transaction 9", "14/02/2021", "5"),
    createRow("Transaction 10", "14/02/2021", "5"),
    createRow("Transaction 11", "14/02/2021", "5"),
    createRow("Transaction 12", "14/02/2021", "5"),
];

const ShippingLabels = () => {
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    return (
        <>
            {isLogInTrue &&
            isLogInTrue.userLogin &&
            isLogInTrue.user.role === "vendor" ? (
                <>
                    <VendorSearchBar />
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
                                <VendorMenu />
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
                                    <Box
                                        sx={{
                                            textAlign: "left",
                                            width: "95%",
                                            height: "10%",
                                            backgroundColor:
                                                "primary.contrastText",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            p: 2,
                                            mb: 2,
                                            borderRadius: 2,
                                        }}
                                    >
                                        <Typography
                                            sx={{ color: "primary.main" }}
                                            variant="h6"
                                        >
                                            Shipping profiles
                                        </Typography>
                                        <Typography
                                            sx={{ color: "primary.main" }}
                                            variant="h6"
                                        >
                                            + New profile
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            textAlign: "left",
                                            width: "98%",
                                            height: "10%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            p: 2,
                                            mb: 2,
                                            borderRadius: 2,
                                        }}
                                    >
                                        <TableContainer component={Paper}>
                                            <Table aria-label="spanning table">
                                                <TableHead>
                                                    <TableRow
                                                        sx={{
                                                            backgroundColor:
                                                                "secondary.main",
                                                        }}
                                                    >
                                                        <TableCell>
                                                            <Typography
                                                                variant="h6"
                                                                color="white"
                                                                sx={{
                                                                    textAlign:
                                                                        "left",
                                                                }}
                                                            >
                                                                Transaction
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            <Typography
                                                                variant="h6"
                                                                color="white"
                                                            >
                                                                Date
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            <Typography
                                                                variant="h6"
                                                                color="white"
                                                            >
                                                                Total products
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row) => (
                                                        <TableRow
                                                            key={row.trans}
                                                        >
                                                            <TableCell>
                                                                <Typography
                                                                    variant="body1"
                                                                    sx={{
                                                                        mb: 1,
                                                                    }}
                                                                >
                                                                    {row.trans}
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                {row.date}
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                {row.tot}
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Box>
                                    <Box
                                        sx={{
                                            textAlign: "left",
                                            width: "98%",
                                            height: "10%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            p: 2,
                                            mb: 2,
                                            borderRadius: 2,
                                        }}
                                    >
                                        <Button
                                            size="large"
                                            variant="contained"
                                            color="secondary"
                                            bgcolor="secondary"
                                        >
                                            + Create shipping profile
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </>
            ) : (
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
            )}
        </>
    );
};

export default ShippingLabels;
