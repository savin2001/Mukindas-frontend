import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    ButtonGroup,
} from "@mui/material";
import { Link } from "react-router-dom";
import CustomerSearchBar from "../components/CustomerSearchBar";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from "@mui/icons-material/Delete";
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart,
} from "../components/cartSlice";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    };
    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    };
    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));

    return (
        <>
            {isLogInTrue && isLogInTrue.userLogin ? (
                <CustomerSearchBar />
            ) : (
                <PrimarySearchAppBar />
            )}
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
                            Your cart is currently empty
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
                            columns={{ xs: 4, sm: 8, md: 8 }}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Grid item xs={3} sm={6} md={5}>
                                <Typography
                                    variant="h5"
                                    sx={{ textAlign: "left" }}
                                >
                                    Cart({cart.cartTotalQuantity} Items)
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container sx={{ flexGrow: 1, my: 3 }}>
                        <TableContainer
                            component={Paper}
                            sx={{ display: "flex" }}
                        >
                            <Table aria-label="spanning table">
                                <TableHead>
                                    <TableRow
                                        sx={{
                                            backgroundColor: "secondary.main",
                                        }}
                                    >
                                        <TableCell>
                                            <Typography
                                                variant="h6"
                                                color="white"
                                                sx={{ textAlign: "left" }}
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
                                    {cart.cartItems?.map((cartItem) => (
                                        <TableRow key={cartItem.id}>
                                            <TableCell>
                                                <Grid
                                                    container
                                                    columns={{
                                                        xs: 4,
                                                        sm: 8,
                                                        md: 15,
                                                    }}
                                                >
                                                    <Grid item md={3}>
                                                        <Card
                                                            sx={{
                                                                maxWidth: 150,
                                                                mb: 3,
                                                            }}
                                                        >
                                                            <CardMedia
                                                                component="img"
                                                                image={
                                                                    cartItem.pic1
                                                                }
                                                                alt={
                                                                    cartItem.product
                                                                }
                                                            />
                                                        </Card>
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={4}
                                                        sm={8}
                                                        md={12}
                                                    >
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                flexDirection:
                                                                    "column",
                                                                justifyContent:
                                                                    "space-between",
                                                            }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ mb: 1 }}
                                                            >
                                                                {
                                                                    cartItem.product
                                                                }
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                sx={{
                                                                    color: "primary.light",
                                                                    display: {
                                                                        xs: "none",
                                                                        sm: "none",
                                                                        md: "block",
                                                                    },
                                                                }}
                                                            >
                                                                {cartItem.productDesc.slice(
                                                                    0,
                                                                    400
                                                                )}
                                                            </Typography>
                                                            <Box sx={{ mt: 1 }}>
                                                                <Button
                                                                    variant="text"
                                                                    size="small"
                                                                    color="secondary"
                                                                >
                                                                    <Typography
                                                                        color="secondary"
                                                                        variant="caption"
                                                                        onClick={() =>
                                                                            handleRemoveFromCart(
                                                                                cartItem
                                                                            )
                                                                        }
                                                                    >
                                                                        Remove
                                                                    </Typography>
                                                                </Button>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </TableCell>
                                            <TableCell align="right">
                                                ${cartItem.price}
                                            </TableCell>
                                            <TableCell align="right">
                                                <ButtonGroup
                                                    variant="text"
                                                    color="secondary"
                                                    size="small"
                                                    orientation="vertical"
                                                    aria-label="outlined button group"
                                                >
                                                    <Button
                                                        onClick={() =>
                                                            handleIncreaseCart(
                                                                cartItem
                                                            )
                                                        }
                                                    >
                                                       <KeyboardArrowUpIcon/>
                                                    </Button>
                                                    <Button>
                                                        <Typography variant="body1">
                                                            {
                                                                cartItem.cartQuantity
                                                            }
                                                        </Typography>
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            handleDecreaseCart(
                                                                cartItem
                                                            )
                                                        }
                                                    >
                                                        <KeyboardArrowDownIcon/>
                                                    </Button>
                                                </ButtonGroup>
                                            </TableCell>

                                            <TableCell align="right">
                                                $
                                                {cartItem.price *
                                                    cartItem.cartQuantity}
                                            </TableCell>
                                        </TableRow>
                                    ))}

                                    <TableRow>
                                        <TableCell rowSpan={2} />
                                        <TableCell colSpan={2}>
                                            <Typography variant="body1">
                                                Subtotal
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Typography variant="body1">
                                                ${cart.cartTotalAmount}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell colSpan={3}>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: "primary.light",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                Taxes and shipping calculated at
                                                checkout
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Box>
                                                <Button
                                                    color="secondary"
                                                    variant="contained"
                                                    startIcon={<DeleteIcon />}
                                                    onClick={() =>
                                                        handleClearCart()
                                                    }
                                                >
                                                    Clear
                                                </Button>
                                            </Box>
                                        </TableCell>
                                        {isLogInTrue &&
                                        isLogInTrue.userLogin ? (
                                            <Link
                                                to={`/customer/Checkout`}
                                                style={{
                                                    textDecoration: "none",
                                                    color: "inherit",
                                                }}
                                            >
                                                <TableCell>
                                                    <Box>
                                                        <Button
                                                            color="secondary"
                                                            variant="outlined"
                                                            startIcon={
                                                                <ShoppingCartCheckoutIcon />
                                                            }
                                                        >
                                                            checkout
                                                        </Button>
                                                    </Box>
                                                </TableCell>
                                            </Link>
                                        ) : (
                                            <Link
                                                to={`/login`}
                                                style={{
                                                    textDecoration: "none",
                                                    color: "inherit",
                                                }}
                                            >
                                                <TableCell>
                                                    <Box>
                                                        <Button
                                                            variant="outlined"
                                                            color="secondary"
                                                            borderColor="secondary"
                                                            startIcon={
                                                                <ShoppingCartCheckoutIcon />
                                                            }
                                                        >
                                                            checkout
                                                        </Button>
                                                    </Box>
                                                </TableCell>
                                            </Link>
                                        )}
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box sx={{ m: 5 }}>
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
                </>
            )}
        </>
    );
};

export default Cart;
