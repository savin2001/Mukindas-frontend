import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../components/api";
import useFetch from "../components/useFetch";
import {
    Container,
    Button,
    Dialog,
    DialogTitle,
    ListItem,
    TextField,
    Box,
    List,
    Typography,
    Slide,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import VendorSearchBar from "../components/VendorSearchBar";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProductUpdate = () => {
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    const { productId } = useParams();
    const {
        data: product,
        isPending,
        error,
    } = useFetch(`${api}/products/` + productId);
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const handleClose = () => {
        navigate("/vendor/Shop");
        setOpen(false);
    };

    const handleChangeProductDetails = () => {};
    return (
        <>
            {isLogInTrue &&
            isLogInTrue.userLogin &&
            isLogInTrue.user.role === "vendor" ? (
                <>
                    <VendorSearchBar />
                    <Container
                        sx={{ flexGrow: 1, width: "100%", height: 100 }}
                    ></Container>
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
                        <>
                            <Dialog
                                fullScreen
                                TransitionComponent={Transition}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                id={product.id}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        onClick={handleClose}
                                        aria-label="close"
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <DialogTitle id="alert-dialog-title">
                                        Change product details
                                    </DialogTitle>
                                    <Box sx={{maxWidth: "560px"}}>
                                        <List>
                                            <ListItem>
                                                <TextField
                                                    value={product.name}
                                                    label="product"
                                                    variant="filled"
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <TextField
                                                    value={product.description}
                                                    label="product description"
                                                    variant="filled"
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <TextField
                                                    value={product.category}
                                                    label="category"
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
                                                    value={product.image}
                                                    label="picture link"
                                                    variant="filled"
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <Button
                                                    fullWidth
                                                    size="small"
                                                    variant="contained"
                                                    color="secondary"
                                                    bgcolor="secondary"
                                                    onClick={
                                                        handleChangeProductDetails
                                                    }
                                                >
                                                    Update product
                                                </Button>
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Box>
                            </Dialog>
                        </>
                    )}
                </>
            ) : (
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
                                <span>Log into your account</span>
                            </Typography>
                        </Link>
                    </Box>
                </Container>
            )}
        </>
    );
};

export default ProductUpdate;
