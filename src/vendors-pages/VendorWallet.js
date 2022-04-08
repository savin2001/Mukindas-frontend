import React from "react";
import VendorSearchBar from "../components/VendorSearchBar";
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
import VendorMenu from "../components/VendorMenu";

function createRow(trans, date, amt, bal) {
    return { trans, date, amt, bal };
}

const rows = [
    createRow("Transaction 1", "14/02/2021", "$ 690.00", "$ 140.00"),
    createRow("Transaction 2", "14/02/2021", "$ 690.00", "$ 140.00"),
    createRow("Transaction 3", "14/02/2021", "$ 690.00", "$ 140.00"),
    createRow("Transaction 4", "14/02/2021", "$ 690.00", "$ 140.00"),
    createRow("Transaction 5", "14/02/2021", "$ 690.00", "$ 140.00"),
    createRow("Transaction 6", "14/02/2021", "$ 690.00", "$ 140.00"),
    createRow("Transaction 7", "14/02/2021", "$ 690.00", "$ 140.00"),
    createRow("Transaction 8", "14/02/2021", "$ 690.00", "$ 140.00"),
    createRow("Transaction 9", "14/02/2021", "$ 690.00", "$ 140.00"),
    createRow("Transaction 10", "14/02/2021", "$ 690.00", "$ 140.00"),
    createRow("Transaction 11", "14/02/2021", "$ 690.00", "$ 140.00"),
    createRow("Transaction 12", "14/02/2021", "$ 690.00", "$ 140.00"),
];

const Wallet = () => {
    return (
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
                    <Grid item sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }} md={3}>
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
                                    backgroundColor: "primary.contrastText",
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
                                    Wallet balance
                                </Typography>
                                <Typography
                                    sx={{ color: "primary.main" }}
                                    variant="h6"
                                >
                                    $ 140.00
                                </Typography>
                            </Box>
                            <Box sx={{ width: "100%" }}>
                                <Grid
                                    container
                                    width="100%"
                                    spacing={{ xs: 1, md: 1 }}
                                    columns={{ xs: 6, sm: 9, md: 12 }}
                                >
                                    <Grid item xs={2} sm={3} md={4}>
                                        <Box
                                            sx={{
                                                p: 1,
                                                m: 1,
                                                columnGap: 3,
                                                rowGap: 1,
                                                width: "100%",
                                            }}
                                        >
                                            <Button
                                                size="large"
                                                variant="contained"
                                                color="secondary"
                                                bgcolor="secondary"
                                            >
                                                History
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={2} sm={3} md={4}>
                                        <Box
                                            sx={{
                                                p: 1,
                                                m: 1,
                                                columnGap: 3,
                                                rowGap: 1,
                                            }}
                                        >
                                            <Button
                                                size="large"
                                                variant="outlined"
                                                color="secondary"
                                                bgcolor="secondary"
                                            >
                                                Withdrawal
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={2} sm={3} md={4}>
                                        <Box
                                            sx={{
                                                p: 1,
                                                m: 1,
                                                columnGap: 3,
                                                rowGap: 1,
                                            }}
                                        >
                                            <Button
                                                size="large"
                                                variant="outlined"
                                                color="secondary"
                                                bgcolor="secondary"
                                            >
                                                Deposit
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
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
                                                            textAlign: "left",
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
                                                        Amount
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Typography
                                                        variant="h6"
                                                        color="white"
                                                    >
                                                        Balance
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.trans}>
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
                                                        {row.amt}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.bal}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Wallet;
