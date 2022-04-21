import React from "react";
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


const ProductCards = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <Grid item xs={3} sm={2} md={1} key={product.id}>
                    <Link
                        to={`/products/${product.id}`}
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <Card>
                            <CardMedia
                                component="img"
                                height="175"
                                image={product.pic1}
                                alt={product.product}
                            />
                            <CardContent>
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
                                >
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </>
    );
};

export default ProductCards;
