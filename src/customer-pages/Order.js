import React from "react";

import {
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    Box,
    Paper,
    LinearProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    // List,
    // ListItemButton,
    // ListItemIcon,
    // ListItemText,
    // Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import CustomerMenu from "../components/CustomerMenu";
import CustomerSearchBar from "../components/CustomerSearchBar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Order = () => {
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    const OrderArray = JSON.parse(localStorage.getItem("orderArray"));

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
                                        <Container sx={{ flexGrow: 1, my: 3 }}>
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
                                                        }}
                                                    >
                                                        Order #
                                                        {
                                                            OrderArray[0].order
                                                                .orderID
                                                        }
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Container>
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
                                                        variant="h6"
                                                        sx={{
                                                            textAlign: "left",
                                                            mb: 3,
                                                        }}
                                                    >
                                                        Order Items
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
                                                                    Product
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                <Typography
                                                                    variant="h6"
                                                                    color="white"
                                                                >
                                                                    Price
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                <Typography
                                                                    variant="h6"
                                                                    color="white"
                                                                >
                                                                    Qty
                                                                </Typography>
                                                            </TableCell>

                                                            <TableCell align="right">
                                                                <Typography
                                                                    variant="h6"
                                                                    color="white"
                                                                >
                                                                    Total
                                                                </Typography>
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {OrderArray[0].order.products.map(
                                                            (product) => (
                                                                <TableRow
                                                                    key={
                                                                        product.id
                                                                    }
                                                                >
                                                                    <TableCell>
                                                                        <Grid
                                                                            container
                                                                            columns={{
                                                                                xs: 4,
                                                                                sm: 8,
                                                                                md: 15,
                                                                            }}
                                                                        >
                                                                            <Grid
                                                                                item
                                                                                md={
                                                                                    3
                                                                                }
                                                                            >
                                                                                <Card
                                                                                    sx={{
                                                                                        maxWidth: 150,
                                                                                        mb: 3,
                                                                                    }}
                                                                                >
                                                                                    <CardMedia
                                                                                        component="img"
                                                                                        image={
                                                                                            product.pic1
                                                                                        }
                                                                                        alt={
                                                                                            product.product
                                                                                        }
                                                                                    />
                                                                                </Card>
                                                                            </Grid>
                                                                            <Grid
                                                                                item
                                                                                xs={
                                                                                    4
                                                                                }
                                                                                sm={
                                                                                    8
                                                                                }
                                                                                md={
                                                                                    12
                                                                                }
                                                                            >
                                                                                <Box
                                                                                    sx={{
                                                                                        display:
                                                                                            "flex",
                                                                                        flexDirection:
                                                                                            "column",
                                                                                        justifyContent:
                                                                                            "space-between",
                                                                                    }}
                                                                                >
                                                                                    <Typography
                                                                                        variant="body1"
                                                                                        sx={{
                                                                                            mb: 1,
                                                                                        }}
                                                                                    >
                                                                                        {
                                                                                            product.product
                                                                                        }
                                                                                    </Typography>
                                                                                    <Typography
                                                                                        variant="body2"
                                                                                        sx={{
                                                                                            color: "primary.light",
                                                                                            display:
                                                                                                {
                                                                                                    xs: "none",
                                                                                                    sm: "none",
                                                                                                    md: "block",
                                                                                                },
                                                                                        }}
                                                                                    >
                                                                                        {product.productDesc.slice(
                                                                                            0,
                                                                                            400
                                                                                        )}
                                                                                    </Typography>
                                                                                    <Box
                                                                                        sx={{
                                                                                            mt: 1,
                                                                                        }}
                                                                                    ></Box>
                                                                                </Box>
                                                                            </Grid>
                                                                        </Grid>
                                                                    </TableCell>
                                                                    <TableCell align="right">
                                                                        $
                                                                        {
                                                                            product.price
                                                                        }
                                                                    </TableCell>
                                                                    <TableCell align="right">
                                                                        <Typography variant="body1">
                                                                            {
                                                                                product.cartQuantity
                                                                            }
                                                                        </Typography>
                                                                    </TableCell>

                                                                    <TableCell align="right">
                                                                        $
                                                                        {product.price *
                                                                            product.cartQuantity}
                                                                    </TableCell>
                                                                </TableRow>
                                                            )
                                                        )}
                                                        <TableRow>
                                                            <TableCell
                                                                rowSpan={2}
                                                            />
                                                            <TableCell
                                                                colSpan={2}
                                                            >
                                                                <Typography variant="body1">
                                                                    Grand Total
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                <Typography variant="body1">
                                                                    $
                                                                    {
                                                                        OrderArray[0]
                                                                            .order
                                                                            .totalPrice
                                                                    }
                                                                </Typography>
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                            <Box sx={{ width: "100%", mb: 3 }}>
                                                <Box
                                                    sx={{
                                                        m: 5,
                                                    }}
                                                ></Box>

                                                <LinearProgress
                                                    variant="determinate"
                                                    color="secondary"
                                                    value={"25"}
                                                />
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "space-around",
                                                    }}
                                                >
                                                    <Typography variant="caption">
                                                        {
                                                            OrderArray[0]
                                                                .orderShippingStatus
                                                        }
                                                    </Typography>
                                                    <Typography variant="caption">
                                                        Shipping
                                                    </Typography>
                                                    <Typography variant="caption">
                                                        Arrival
                                                    </Typography>
                                                    <Typography variant="caption">
                                                        Delivered
                                                    </Typography>
                                                </Box>
                                            </Box>
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

export default Order;
