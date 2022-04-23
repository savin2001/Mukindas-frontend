import React, { useEffect } from "react";
import {
    Grid,
    Typography,
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Button,
    Rating,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../components/cartSlice";

const ProductCards = ({ products }) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    return (
        <>
            {products.map((product) => (
                <Grid item xs={6} sm={3} md={1} key={product.id}>
                    <Card>
                        <Link
                            to={`/products/${product.id}`}
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="175"
                                image={product.pic1}
                                alt={product.product}
                            />
                        </Link>
                        <CardContent>
                            <Link
                                to={`/products/${product.id}`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <Typography
                                    sx={{
                                        textAlign: "left",
                                    }}
                                    gutterBottom
                                    variant="subtitle"
                                    component="div"
                                >
                                    {product.product}
                                </Typography>
                            </Link>
                            <Rating name="read-only" value={3} readOnly />
                            <Typography
                                sx={{
                                    textAlign: "left",
                                }}
                                color="secondary"
                            >
                                {product.currency} &nbsp;{product.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                variant="contained"
                                color="secondary"
                                bgcolor="secondary"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to cart
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </>
    );
};

export default ProductCards;
