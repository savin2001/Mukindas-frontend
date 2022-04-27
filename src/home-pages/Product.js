import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
    Container,
    Typography,
    Grid,
    Box,
    Paper,
    // CardActions,
    CardMedia,
    // CardContent,
    Button,
    Rating,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomerSearchBar from "../components/CustomerSearchBar";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import { useParams } from "react-router-dom";
import api from "../components/api";
import useFetch from "../components/useFetch";
import Loading from "../components/Loading";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/cartSlice";

const Product = () => {
    const { id } = useParams();
    const {
        data: product,
        isPending,
        error,
    } = useFetch(`https://mukindas-test-server.herokuapp.com/products/` + id);
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        navigate("/cart")
    };

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
            <Container sx={{ flexGrow: 1, top: 1000, mb: 5 }}>
                {error && (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "30px",
                            background: "#c20f00",
                        }}
                    >
                        {error}
                    </div>
                )}
                {isPending && <Loading />}
                {product && (
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 8 }}
                        sx={{ mb: 5 }}
                    >
                        <Grid item xs={4} sm={4} md={4}>
                            <Box
                                sx={{
                                    textAlign: "left",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",

                                        mb: 3,
                                        mx: 3,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                        }}
                                    >
                                        <Box sx={{ pr: 2 }}>
                                            <AccountCircle
                                                color="secondary"
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography
                                                sx={{ color: "primary.dark" }}
                                                variant="h6"
                                            >
                                                Seller Name
                                            </Typography>
                                            <Rating
                                                name="half-rating-read"
                                                defaultValue={2.5}
                                                precision={0.5}
                                                readOnly
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{ pt: 2 }}>
                                        <CardMedia
                                            component="img"
                                            image={product.pic1}
                                            alt="stock image"
                                        />
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <Box
                                sx={{
                                    textAlign: "left",

                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        textAlign: "left",
                                        mb: 3,
                                        pt: 3,
                                        fontWeight: 600,
                                    }}
                                >
                                    {product.product}
                                </Typography>
                                <Typography
                                    variant="h4"
                                    color="secondary"
                                    sx={{
                                        textAlign: "left",
                                        my: 2,
                                        pt: 3,
                                        fontWeight: 200,
                                    }}
                                >
                                    {product.currency} &nbsp;{product.price}
                                </Typography>

                                <Typography
                                    variant="p"
                                    sx={{
                                        textAlign: "left",
                                        my: 3,
                                        pt: 3,
                                    }}
                                >
                                    {product.productDesc}
                                </Typography>

                                {/* <Typography
                                    variant="caption"
                                    sx={{
                                        textAlign: "left",
                                        my: 3,
                                        pt: 3,
                                        color: "primary.light",
                                    }}
                                >
                                    426 views in the last days!
                                </Typography> */}
                                <Box
                                    sx={{
                                        my: 3,
                                        pt: 3,
                                        color: "primary.light",
                                    }}
                                >
                                    {/* <Link
                                        to={`/cart`}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    > */}
                                    <Button
                                        size="large"
                                        variant="contained"
                                        color="secondary"
                                        bgcolor="secondary"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to cart
                                    </Button>
                                    {/* </Link> */}
                                </Box>
                                <Box
                                    sx={{
                                        my: 3,
                                        pt: 3,
                                        color: "primary.light",
                                    }}
                                >
                                    {/* <Link
                                            to={`/cart`}
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit",
                                            }}
                                        > */}
                                    <Button
                                        size="large"
                                        variant="contained"
                                        color="secondary"
                                        sx={{ bgcolor: "primary.dark" }}
                                    >
                                        Contact seller
                                    </Button>
                                    {/* </Link> */}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </>
    );
};

export default Product;
