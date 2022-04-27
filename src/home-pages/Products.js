import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import CustomerSearchBar from "../components/CustomerSearchBar";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import api from "../components/api";
import useFetch from "../components/useFetch";
import ProductCards from "../components/ProductCards";
import Loading from "../components/Loading";

const Products = () => {
    const { data: products, isPending, error } = useFetch(`https://mukindas-test-server.herokuapp.com/products`);
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    return (
        <>
            {isLogInTrue && isLogInTrue.userLogin ? (
                <CustomerSearchBar />
            ) : (
                <PrimarySearchAppBar />
            )}
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 80 }}
            ></Container>
            <Container sx={{ flexGrow: 1, top: 1000, my: 3 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 15 }}
                    sx={{ bordercolor: "primary.light" }}
                >
                    {/* Category section */}
                    <Grid
                        item
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                        md={3}
                    >
                        <Paper
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 1,
                                    width: "100%",
                                    height: "100%",
                                },
                            }}
                        >
                            <Box sx={{ textAlign: "left", p: 1 }}>
                                <Typography variant="h6">Category</Typography>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ textAlign: "left", p: 1 }}>
                                <Typography variant="h6">Category</Typography>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ textAlign: "left", p: 1 }}>
                                <Typography variant="h6">Category</Typography>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ textAlign: "left", p: 1 }}>
                                <Typography variant="h6">Category</Typography>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ textAlign: "left", p: 1 }}>
                                <Typography variant="h6">Category</Typography>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                        <Box sx={{ width: "100%", height: "30px" }} />
                        <Paper
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    mt: 1,
                                    width: "100%",
                                    height: "100%",
                                },
                            }}
                        >
                            <Typography
                                sx={{ textAlign: "center", p: 1 }}
                                variant="h5"
                            >
                                Sort by
                            </Typography>
                            <Box sx={{ textAlign: "left", p: 1 }}>
                                <Typography variant="h6">Size</Typography>
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ textAlign: "left", p: 1 }}>
                                <Typography variant="h6">Age</Typography>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ textAlign: "left", p: 1 }}>
                                <Typography variant="h6">Rating</Typography>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ textAlign: "left", p: 1 }}>
                                <Typography variant="h6">
                                    Shipped from
                                </Typography>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ textAlign: "left", p: 1 }}>
                                <Typography variant="h6">Discount</Typography>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: "center", p: 1 }}>
                                    <Typography variant="p">
                                        Sub-category
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    {/* Main products section */}
                    <Grid item xs={4} sm={8} md={12}>
                        <Paper
                            elevation={2}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    width: "100%",
                                    height: "100%",
                                },
                                m: 3,
                            }}
                        >
                            {/* Top deals */}
                            <Box
                                sx={{
                                    textAlign: "left",

                                    width: "100%",
                                    height: "100%",
                                    mb: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        textAlign: "left",
                                        height: "10%",
                                        backgroundColor: "primary.contrastText",
                                        p: 2,
                                        borderRadius: 2,
                                    }}
                                >
                                    <Typography
                                        sx={{ color: "primary.main" }}
                                        variant="h6"
                                    >
                                        Top deals and discounts
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
                                        <ProductCards products={products} />
                                    )}
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Products;
