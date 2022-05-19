import React, { useState } from "react";
import {
    Grid,
    Card,
    Typography,
    Box,
    Button,
    Dialog,
    DialogTitle,
    ListItem,
    TextField,
    List,
} from "@mui/material";
import useFetch from "./useFetch";
import Loading from "./Loading";
import VendorProductCards from "./VendorProductCards";
import api from "./api";
import axios from "axios";

const VendorShopProductTab = () => {
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    const { data: categories } = useFetch(`${api}/products/categories`);
    const { data: products, isPending, error } = useFetch(`${api}/products/`);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddNewCategory = (e) => {
        e.preventDefault();
        axios
            .post(`${api}/products/categories`, {
                name,
            })
            .then((response) => {
                setName("");
                handleClose();
                window.location.reload();
            })
            .catch((error) => console.log(error.response.data.message));
    };
    return (
        <>
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
                <Box>
                    <Typography variant="h6" content="div" sx={{ mb: 1 }}>
                        Categories
                    </Typography>
                    <Grid
                        container
                        width="100%"
                        spacing={{ xs: 3, md: 3, sm: 3 }}
                        columns={{ xs: 4, sm: 8, md: 16 }}
                    >
                        {categories && (
                            <>
                                {categories.map((category) => (
                                    <Grid
                                        item
                                        xs={2}
                                        sm={4}
                                        md={4}
                                        key={category.id}
                                    >
                                        <Box
                                            sx={{
                                                p: 1,
                                                m: 3,
                                                columnGap: 3,
                                                rowGap: 1,
                                            }}
                                        >
                                            <Button
                                                size="large"
                                                variant="outlined"
                                                color="secondary"
                                                bgcolor="secondary"
                                            >
                                                {category.name}
                                            </Button>
                                        </Box>
                                    </Grid>
                                ))}
                                <Grid item xs={2} sm={4} md={4}>
                                    <Box
                                        sx={{
                                            p: 1,
                                            m: 3,
                                            columnGap: 3,
                                            rowGap: 1,
                                        }}
                                    >
                                        <Button
                                            size="large"
                                            variant="contained"
                                            color="secondary"
                                            bgcolor="secondary"
                                            onClick={handleClickOpen}
                                        >
                                            New
                                        </Button>
                                    </Box>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="h6" content="div" sx={{ my: 2 }}>
                        Change price of individual products
                    </Typography>
                    <Box
                        sx={{
                            textAlign: "left",
                            flexGrow: 1,
                            width: "100%",
                            height: "100%",
                            mb: 3,
                        }}
                    >
                        <Box
                            sx={{
                                textAlign: "left",
                                height: "100%",
                                backgroundColor: "primary.contrastText",
                                p: 2,
                                borderRadius: 2,
                            }}
                        >
                            <Typography
                                sx={{ color: "primary.main" }}
                                variant="h6"
                            >
                                My items
                            </Typography>
                        </Box>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 6, sm: 6, md: 4 }}
                            sx={{ mt: 15 }}
                        >
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
                            {isPending && <Loading />}
                            {products && (
                                <VendorProductCards products={products} />
                            )}
                        </Grid>
                    </Box>
                </Box>
            </Card>
            <Dialog
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
                    <DialogTitle id="alert-dialog-title">
                        Enter the new category
                    </DialogTitle>
                    <Box sx={{ maxWidth: "560px" }}>
                        <List>
                            <ListItem>
                                <TextField
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    label="Category"
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
                                    onClick={handleAddNewCategory}
                                >
                                    Add category
                                </Button>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Dialog>
        </>
    );
};

export default VendorShopProductTab;
