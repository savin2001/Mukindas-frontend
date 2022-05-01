import React, { useEffect, useState } from "react";
import {
    Container,
    Typography,
    Box,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    Button,
    TableRow,
    Paper,
    Card,
    CardMedia,
    TextField,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import CustomerSearchBar from "../components/CustomerSearchBar";
import { useSelector } from "react-redux";
import CustomerMenu from "../components/CustomerMenu";

const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

const Checkout = () => {
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem("login"));
        if (userDetails) {
            if (userDetails.user.role === "customer") {
                const user = userDetails.user;
                setFirstName(user.first_name);
                setSecondName(user.second_name);
                setEmail(user.email);
                setPhone(user.phone_number);
                setCountry(user.country);
                setCity(user.city);
                setStreetName(user.street_name);
                setAddress(user.address);
            } else {
                setError("User not found");
            }
        }
    }, []);
    const [first_name, setFirstName] = useState("");
    const [second_name, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [street_name, setStreetName] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");
    const cart = useSelector((state) => state.cart);
    const shippingCost = 25;
    const invoiceSubtotal = cart.cartTotalAmount;
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal + shippingCost;

    const handleOrder = () => {
        localStorage.setItem(
            "order",
            JSON.stringify({
                orderID: Math.floor(Math.random() * 100000),
                totalPrice: ccyFormat(invoiceTotal),
                products: cart.cartItems,
                user: first_name + " " + second_name,
                userEmail: email,
                userPhone: phone_number,
                userCountry: country,
                userCity: city,
                userStreet: street_name,
                userAddress: address,
            })
        );
    };

    return (
        <>
            {error && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        alignItems: "center",
                        fontSize: "30px",
                        background: "#c20f00",
                    }}
                >
                    {error}
                </div>
            )}

            {isLogInTrue &&
            isLogInTrue.userLogin &&
            isLogInTrue.user.role === "customer" ? (
                <>
                    <CustomerSearchBar />
                    <Container
                        sx={{ flexGrow: 1, width: "100%", height: 100 }}
                    ></Container>
                    {cart.cartItems.length === 0 ? (
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
                                    Checkout Error!
                                </Typography>
                                <Link
                                    to={`/products`}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <Typography variant="h6" color="secondary">
                                        <KeyboardBackspaceIcon fontSize="small" />
                                        {"  "}
                                        <span>Continue shopping</span>
                                    </Typography>
                                </Link>
                            </Box>
                        </Container>
                    ) : (
                        <>
                            <Container sx={{ flexGrow: 1, my: 3 }}>
                                <Grid
                                    container
                                    spacing={{ xs: 2, md: 3 }}
                                    columns={{ xs: 4, sm: 8, md: 12 }}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Grid
                                        item
                                        xs={4}
                                        sm={8}
                                        md={12}
                                        sx={{ mb: 3 }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{ textAlign: "left" }}
                                        >
                                            Check-out
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    spacing={{ xs: 2, md: 3 }}
                                    columns={{ xs: 4, sm: 8, md: 12 }}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Grid item xs={4} sm={8} md={4}>
                                        <CustomerMenu />
                                    </Grid>
                                    <Grid item xs={4} sm={8} md={8}>
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
                                            <Box sx={{ width: "100%" }}>
                                                <TableContainer
                                                    component={Paper}
                                                >
                                                    <Table aria-label="spanning table">
                                                        <TableHead>
                                                            <TableRow
                                                                sx={{
                                                                    borderColor:
                                                                        "secondary.main",
                                                                }}
                                                            >
                                                                <TableCell>
                                                                    <Typography
                                                                        variant="body1"
                                                                        color="secondary"
                                                                        width="100%"
                                                                        sx={{
                                                                            textAlign:
                                                                                "left",
                                                                        }}
                                                                    >
                                                                        My
                                                                        products
                                                                    </Typography>
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {cart.cartItems?.map(
                                                                (cartItem) => (
                                                                    <TableRow
                                                                        key={
                                                                            cartItem.id
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
                                                                                    xs={
                                                                                        1
                                                                                    }
                                                                                    sm={
                                                                                        2
                                                                                    }
                                                                                    md={
                                                                                        3
                                                                                    }
                                                                                >
                                                                                    <Card>
                                                                                        <CardMedia
                                                                                            component="img"
                                                                                            image={
                                                                                                cartItem.pic1
                                                                                            }
                                                                                            alt={
                                                                                                cartItem.product
                                                                                            }
                                                                                            // sx={{pr: 1}}
                                                                                        />
                                                                                    </Card>
                                                                                </Grid>
                                                                                <Grid
                                                                                    item
                                                                                    xs={
                                                                                        3
                                                                                    }
                                                                                    sm={
                                                                                        6
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
                                                                                        }}
                                                                                    >
                                                                                        <Typography
                                                                                            variant="body1"
                                                                                            sx={{
                                                                                                mb: 1,
                                                                                            }}
                                                                                        >
                                                                                            {
                                                                                                cartItem.product
                                                                                            }
                                                                                        </Typography>
                                                                                    </Box>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </TableCell>
                                                                        <TableCell align="right">
                                                                            $
                                                                            {
                                                                                cartItem.price
                                                                            }
                                                                        </TableCell>
                                                                    </TableRow>
                                                                )
                                                            )}
                                                            <TableRow>
                                                                <TableCell>
                                                                    <Typography variant="body1">
                                                                        Subtotal
                                                                    </Typography>
                                                                </TableCell>
                                                                <TableCell align="right">
                                                                    <Typography variant="body1">
                                                                        $
                                                                        {ccyFormat(
                                                                            invoiceSubtotal
                                                                        )}
                                                                    </Typography>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>
                                                                    <Typography variant="body1">
                                                                        Tax
                                                                    </Typography>
                                                                </TableCell>

                                                                <TableCell align="right">
                                                                    <Typography variant="body1">
                                                                        $
                                                                        {ccyFormat(
                                                                            invoiceTaxes
                                                                        )}
                                                                    </Typography>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>
                                                                    <Typography variant="body1">
                                                                        Shipping
                                                                        fee
                                                                    </Typography>
                                                                </TableCell>
                                                                <TableCell align="right">
                                                                    <Typography variant="body1">
                                                                        $
                                                                        {ccyFormat(
                                                                            shippingCost
                                                                        )}
                                                                    </Typography>
                                                                </TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>
                                                                    <Typography variant="body1">
                                                                        Total
                                                                    </Typography>
                                                                </TableCell>
                                                                <TableCell align="right">
                                                                    <Typography variant="body1">
                                                                        $
                                                                        {ccyFormat(
                                                                            invoiceTotal
                                                                        )}
                                                                    </Typography>
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Box>
                                            <Box sx={{ width: "100%" }}>
                                                <TableContainer
                                                    component={Paper}
                                                >
                                                    <Table aria-label="spanning table">
                                                        <TableHead>
                                                            <TableRow
                                                                sx={{
                                                                    borderColor:
                                                                        "secondary.main",
                                                                }}
                                                            >
                                                                <TableCell>
                                                                    <Typography
                                                                        variant="h6"
                                                                        color="secondary"
                                                                        sx={{
                                                                            textAlign:
                                                                                "left",
                                                                        }}
                                                                    >
                                                                        Delivery
                                                                        address
                                                                    </Typography>
                                                                </TableCell>
                                                                <TableCell align="right">
                                                                    <Link
                                                                        to={`/customer/${isLogInTrue.user.token}`}
                                                                        style={{
                                                                            textDecoration:
                                                                                "none",
                                                                            color: "inherit",
                                                                        }}
                                                                    >
                                                                        <Button
                                                                            size="large"
                                                                            variant="outlined"
                                                                            color="secondary"
                                                                            bgcolor="secondary"
                                                                        >
                                                                            Change
                                                                        </Button>
                                                                    </Link>
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell
                                                                    colSpan={2}
                                                                >
                                                                    <Grid
                                                                        container
                                                                        spacing={{
                                                                            xs: 1,
                                                                            md: 1,
                                                                        }}
                                                                        columns={{
                                                                            xs: 4,
                                                                            sm: 8,
                                                                            md: 12,
                                                                        }}
                                                                    >
                                                                        <Grid
                                                                            item
                                                                            xs={
                                                                                4
                                                                            }
                                                                            sm={
                                                                                8
                                                                            }
                                                                            md={
                                                                                6
                                                                            }
                                                                            sx={{
                                                                                mb: 1,
                                                                            }}
                                                                        >
                                                                            <Box
                                                                                sx={{
                                                                                    p: 1,
                                                                                    m: 1,
                                                                                    display:
                                                                                        "flex",
                                                                                    alignItems:
                                                                                        "center",
                                                                                    columnGap: 1,
                                                                                    rowGap: 1,
                                                                                }}
                                                                            >
                                                                                <Typography
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                >
                                                                                    First
                                                                                    name
                                                                                </Typography>
                                                                                <TextField
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                    value={
                                                                                        first_name
                                                                                    }
                                                                                    label="First name"
                                                                                    variant="filled"
                                                                                    fullWidth
                                                                                    // onChange={handleChange}
                                                                                    // disabled
                                                                                />
                                                                            </Box>
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
                                                                                6
                                                                            }
                                                                            sx={{
                                                                                mb: 1,
                                                                            }}
                                                                        >
                                                                            <Box
                                                                                sx={{
                                                                                    p: 1,
                                                                                    m: 1,
                                                                                    display:
                                                                                        "flex",
                                                                                    alignItems:
                                                                                        "center",
                                                                                    columnGap: 1,
                                                                                    rowGap: 1,
                                                                                }}
                                                                            >
                                                                                <Typography
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                >
                                                                                    Second
                                                                                    name
                                                                                </Typography>
                                                                                <TextField
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                    value={
                                                                                        second_name
                                                                                    }
                                                                                    label="Second name"
                                                                                    variant="filled"
                                                                                    fullWidth
                                                                                    // onChange={handleChange}
                                                                                    // disabled
                                                                                />
                                                                            </Box>
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
                                                                                6
                                                                            }
                                                                            sx={{
                                                                                mb: 1,
                                                                            }}
                                                                        >
                                                                            <Box
                                                                                sx={{
                                                                                    p: 1,
                                                                                    m: 1,
                                                                                    display:
                                                                                        "flex",
                                                                                    alignItems:
                                                                                        "center",
                                                                                    columnGap: 1,
                                                                                    rowGap: 1,
                                                                                }}
                                                                            >
                                                                                <Typography
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                >
                                                                                    Email
                                                                                </Typography>
                                                                                <TextField
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                    value={
                                                                                        email
                                                                                    }
                                                                                    label="Email address"
                                                                                    variant="filled"
                                                                                    fullWidth
                                                                                    // onChange={handleChange}
                                                                                    // disabled
                                                                                />
                                                                            </Box>
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
                                                                                6
                                                                            }
                                                                            sx={{
                                                                                mb: 1,
                                                                            }}
                                                                        >
                                                                            <Box
                                                                                sx={{
                                                                                    p: 1,
                                                                                    m: 1,
                                                                                    display:
                                                                                        "flex",
                                                                                    alignItems:
                                                                                        "center",
                                                                                    columnGap: 1,
                                                                                    rowGap: 1,
                                                                                }}
                                                                            >
                                                                                <Typography
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                >
                                                                                    Phone
                                                                                    number
                                                                                </Typography>
                                                                                <TextField
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                    value={
                                                                                        phone_number
                                                                                    }
                                                                                    label="Phone number"
                                                                                    variant="filled"
                                                                                    fullWidth
                                                                                    // onChange={handleChange}
                                                                                    // disabled
                                                                                />
                                                                            </Box>
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
                                                                                6
                                                                            }
                                                                            sx={{
                                                                                mb: 1,
                                                                            }}
                                                                        >
                                                                            <Box
                                                                                sx={{
                                                                                    p: 1,
                                                                                    m: 1,
                                                                                    display:
                                                                                        "flex",
                                                                                    alignItems:
                                                                                        "center",
                                                                                    columnGap: 1,
                                                                                    rowGap: 1,
                                                                                }}
                                                                            >
                                                                                <Typography
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                >
                                                                                    Street
                                                                                    name
                                                                                </Typography>
                                                                                <TextField
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                    value={
                                                                                        street_name
                                                                                    }
                                                                                    label="Street name"
                                                                                    variant="filled"
                                                                                    fullWidth
                                                                                    // onChange={handleChange}
                                                                                    // disabled
                                                                                />
                                                                            </Box>
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
                                                                                6
                                                                            }
                                                                            sx={{
                                                                                mb: 1,
                                                                            }}
                                                                        >
                                                                            <Box
                                                                                sx={{
                                                                                    p: 1,
                                                                                    m: 1,
                                                                                    display:
                                                                                        "flex",
                                                                                    alignItems:
                                                                                        "center",
                                                                                    columnGap: 1,
                                                                                    rowGap: 1,
                                                                                }}
                                                                            >
                                                                                <Typography
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                >
                                                                                    City
                                                                                </Typography>
                                                                                <TextField
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                    value={
                                                                                        city
                                                                                    }
                                                                                    label="City"
                                                                                    variant="filled"
                                                                                    fullWidth
                                                                                    // onChange={handleChange}
                                                                                    // disabled
                                                                                />
                                                                            </Box>
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
                                                                                6
                                                                            }
                                                                            sx={{
                                                                                mb: 1,
                                                                            }}
                                                                        >
                                                                            <Box
                                                                                sx={{
                                                                                    p: 1,
                                                                                    m: 1,
                                                                                    display:
                                                                                        "flex",
                                                                                    alignItems:
                                                                                        "center",
                                                                                    columnGap: 1,
                                                                                    rowGap: 1,
                                                                                }}
                                                                            >
                                                                                <Typography
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                >
                                                                                    Country
                                                                                </Typography>
                                                                                <TextField
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                    value={
                                                                                        country
                                                                                    }
                                                                                    label="Country"
                                                                                    variant="filled"
                                                                                    fullWidth
                                                                                    // onChange={handleChange}
                                                                                    // disabled
                                                                                />
                                                                            </Box>
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
                                                                                6
                                                                            }
                                                                            sx={{
                                                                                mb: 1,
                                                                            }}
                                                                        >
                                                                            <Box
                                                                                sx={{
                                                                                    p: 1,
                                                                                    m: 1,
                                                                                    display:
                                                                                        "flex",
                                                                                    alignItems:
                                                                                        "center",
                                                                                    columnGap: 1,
                                                                                    rowGap: 1,
                                                                                }}
                                                                            >
                                                                                <Typography
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                >
                                                                                    Address
                                                                                    details
                                                                                </Typography>
                                                                                <TextField
                                                                                    sx={{
                                                                                        flexGrow: 1,
                                                                                    }}
                                                                                    value={
                                                                                        address
                                                                                    }
                                                                                    label="Address"
                                                                                    variant="filled"
                                                                                    fullWidth
                                                                                    // onChange={handleChange}
                                                                                    // disabled
                                                                                />
                                                                            </Box>
                                                                        </Grid>
                                                                    </Grid>
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Box>

                                            <Box
                                                sx={{
                                                    p: 1,
                                                    m: 1,
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    columnGap: 3,
                                                    rowGap: 1,
                                                }}
                                            >
                                                <Link
                                                    to={`/customer/Payment`}
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                    }}
                                                >
                                                    <Button
                                                        fullWidth
                                                        size="large"
                                                        variant="contained"
                                                        color="secondary"
                                                        bgcolor="secondary"
                                                        onClick={handleOrder}
                                                    >
                                                        Proceed with payment
                                                    </Button>
                                                </Link>
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

export default Checkout;
