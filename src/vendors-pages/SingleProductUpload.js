import React, { useState } from "react";
import api from "../components/api";
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
import { Link, useNavigate } from "react-router-dom";
import VendorSearchBar from "../components/VendorSearchBar";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const SingleProductUpload = () => {
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    const vendorName = `${isLogInTrue.user.first_name} ${isLogInTrue.user.second_name}`;
    const vendorEmail = isLogInTrue.user.email;
    console.log(vendorEmail);
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const handleClose = () => {
        navigate("/vendor/upload/bulk");
        setOpen(false);
    };

    const [error, setError] = useState("");
    const [isPending, setIsPending] = useState(false);
    const [category, setCategory] = useState("");
    const [currency, setCurrency] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [vendor, setVendorName] = useState(vendorName);
    const [vendor_email, setVendorEmail] = useState(vendorEmail);

    const handleAddNewProduct = (e) => {
        e.preventDefault();
        axios
            .post(`${api}/products/product`, {
                vendor,
                vendor_email,
                category,
                name,
                image,
                description,
                quantity,
                currency,
                price,
            })
            .then((response) => {
                // console.log(response);
                setIsPending(true);
                setError("");
                setCategory("");
                setCurrency("");
                setDescription("");
                setImage("");
                setName("");
                setPrice("");
                setQuantity("");
                setVendorName("");
                setVendorEmail("");
                navigate("/vendor/Shop");
            })
            .catch((error) => setError(error.response.data.message));
    };
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

                    <>
                        <Dialog
                            fullScreen
                            TransitionComponent={Transition}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
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
                                    Input product details
                                </DialogTitle>
                                <Box sx={{ maxWidth: "560px" }}>
                                    <List>
                                        <ListItem>
                                            <TextField
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                label="product"
                                                variant="filled"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                value={description}
                                                onChange={(e) =>
                                                    setDescription(e.target.value)
                                                }
                                                label="product description"
                                                variant="filled"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                value={category}
                                                onChange={(e) =>
                                                    setCategory(e.target.value)
                                                }
                                                label="category"
                                                variant="filled"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                value={currency}
                                                onChange={(e) =>
                                                    setCurrency(e.target.value)
                                                }
                                                label="currency"
                                                variant="filled"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                value={price}
                                                type="number"
                                                onChange={(e) =>
                                                    setPrice(e.target.value)
                                                }
                                                label="price"
                                                variant="filled"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                value={quantity}
                                                type="number"
                                                onChange={(e) =>
                                                    setQuantity(e.target.value)
                                                }
                                                label="quantity"
                                                variant="filled"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                value={image}
                                                onChange={(e) =>
                                                    setImage(e.target.value)
                                                }
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
                                                onClick={handleAddNewProduct}
                                            >
                                                Add product
                                            </Button>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </Dialog>
                    </>
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

export default SingleProductUpload;
