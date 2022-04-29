import React, { useState } from "react";
import {
    Grid,
    Typography,
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Button,
    Rating,
    Dialog,
    DialogTitle,
    Box,
    List,
    ListItem,
    TextField,
} from "@mui/material";
import { useParams } from "react-router";
import useFetch from "./useFetch";
import Loading from "./Loading";

const ProductCards = ({ products }) => {
    const { id } = useParams();
    const {
        data: product,
        isPending,
        error,
    } = useFetch(`https://mukindas-test-server.herokuapp.com/products/` + id);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    // const handleChangePrice = () => {};

    return (
        <>
            {products.map((product) => (
                <>
                    <Grid item xs={6} sm={3} md={1} key={product.id}>
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
                                    onClick={handleClickOpen}
                                >
                                    Update product
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </>
            ))}
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
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Change product details
                    </DialogTitle>
                    <Box sx={{ width: "100%", maxWidth: 560 }}>
                        <List>
                            <ListItem>
                                <TextField
                                    value={product.product}
                                    label="product"
                                    variant="filled"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    value={product.productDesc}
                                    label="product description"
                                    variant="filled"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    value={product.currency}
                                    label="currency"
                                    variant="filled"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    value={product.price}
                                    label="price"
                                    variant="filled"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    value={product.quantity}
                                    label="quantity"
                                    variant="filled"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    value={product.pic1}
                                    label="picture link"
                                    variant="filled"
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Dialog>
            )}
        </>
    );
};

export default ProductCards;
