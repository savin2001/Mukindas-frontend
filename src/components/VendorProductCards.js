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
                <>
                    <Grid item xs={6} sm={3} md={1} key={product.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="175"
                                image={product.image}
                                alt={product.name}
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
                                    {product.name}
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
                                <Link
                                    to={`/vendor/Shop/product/${product.id}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        color="secondary"
                                        bgcolor="secondary"
                                    >
                                        View
                                    </Button>
                                </Link>
                                <Link
                                    to={`/vendor/Shop/${product.id}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="secondary"
                                        bgcolor="secondary"
                                    >
                                        Update
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                </>
            ))}
        </>
    );
};

export default ProductCards;
