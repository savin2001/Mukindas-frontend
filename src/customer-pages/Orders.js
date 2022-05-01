import React, { useEffect, useState } from "react";
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
    CardContent,
    // List,
    // ListItemButton,
    // ListItemIcon,
    // ListItemText,
    // Collapse,
} from "@mui/material";
import CustomerMenu from "../components/CustomerMenu";
import { Link } from "react-router-dom";
import CustomerSearchBar from "../components/CustomerSearchBar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Orders = () => {
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    const [error, setError] = useState("");
    const OrderArray = JSON.parse(localStorage.getItem("orderArray"));
    useEffect(() => {
        const orderArray = JSON.parse(localStorage.getItem("orderArray"));
        if (orderArray) {
            if (orderArray[0].orderMade) {
                const order = orderArray[0].order;
                console.log(order.orderID);
            } else {
                setError("Orders not found");
            }
        } else {
            setError("Order Error");
        }
    }, []);
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
                    {OrderArray.length === 0 ? (
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
                                    No orders found
                                </Typography>
                                <Link
                                    to={`/customer`}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <Typography variant="h6" color="secondary">
                                        <KeyboardBackspaceIcon fontSize="small" />
                                        <span>Go back to my account</span>
                                    </Typography>
                                </Link>
                            </Box>
                        </Container>
                    ) : (
                        <>
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
                                            <Grid
                                                container
                                                spacing={{ xs: 2, md: 3 }}
                                                columns={{
                                                    xs: 4,
                                                    sm: 8,
                                                    md: 8,
                                                }}
                                                sx={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                }}
                                            >
                                                <Grid item xs={3} sm={6} md={5}>
                                                    <Typography
                                                        variant="h5"
                                                        sx={{
                                                            textAlign: "left",
                                                            mb: 3,
                                                        }}
                                                    >
                                                        Orders
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <TableContainer component={Paper}>
                                                <Table
                                                    aria-label="spanning table"
                                                    sx={{ width: "100%" }}
                                                >
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
                                                                    Description
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell>
                                                                <Typography
                                                                    variant="h6"
                                                                    color="white"
                                                                    sx={{
                                                                        textAlign:
                                                                            "left",
                                                                    }}
                                                                >
                                                                    Total
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell>
                                                                <Typography
                                                                    variant="h6"
                                                                    color="white"
                                                                    sx={{
                                                                        textAlign:
                                                                            "left",
                                                                    }}
                                                                >
                                                                    Order no.
                                                                </Typography>
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {OrderArray.map(
                                                            (order) => (
                                                                <TableRow
                                                                    key={
                                                                        order.order.orderID
                                                                    }
                                                                >
                                                                    <TableCell>
                                                                        <CardContent>
                                                                            <Typography>
                                                                                {
                                                                                    order.order.user
                                                                                }
                                                                            </Typography>
                                                                            <Typography>
                                                                                {
                                                                                    order.order.userEmail
                                                                                }
                                                                            </Typography>
                                                                            <Typography>
                                                                                {
                                                                                    order.order.userPhone
                                                                                }
                                                                            </Typography>
                                                                        </CardContent>
                                                                        <Box
                                                                            sx={{
                                                                                mt: 2,
                                                                            }}
                                                                        >
                                                                            <Link
                                                                                to={`/customer/Order/${order.order.orderID}`}
                                                                                style={{
                                                                                    textDecoration:
                                                                                        "none",
                                                                                    color: "inherit",
                                                                                }}
                                                                            >
                                                                                <Button
                                                                                    variant="text"
                                                                                    size="large"
                                                                                >
                                                                                    <Typography
                                                                                        color="secondary"
                                                                                        variant="caption"
                                                                                    >
                                                                                        Check
                                                                                        on
                                                                                        order
                                                                                    </Typography>
                                                                                </Button>
                                                                            </Link>
                                                                        </Box>
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        {
                                                                            order.order.totalPrice
                                                                        }
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        {
                                                                            order.order.orderID
                                                                        }
                                                                    </TableCell>
                                                                </TableRow>
                                                            )
                                                        )}
                                                    </TableBody>
                                                </Table>
                                                {error && (
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "center",
                                                            width: "100%",
                                                            alignItems:
                                                                "center",
                                                            fontSize: "30px",
                                                            background:
                                                                "#c20f00",
                                                        }}
                                                    >
                                                        {error}
                                                    </div>
                                                )}
                                            </TableContainer>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Container>
                        </>
                    )}
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

export default Orders;
