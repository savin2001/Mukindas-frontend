import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Paper,
    List,
    ListItem,
    Divider,
} from "@mui/material";
import CustomerSearchBar from "../components/CustomerSearchBar";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import useFetch from "../components/useFetch";
import ProductCards from "../components/ProductCards";
import Loading from "../components/Loading";
import api from "../components/api";
import { Link, useParams } from "react-router-dom";

const Products = () => {
    const { category_id } = useParams();
    const {
        data: products,
        isPending,
        error,
    } = useFetch(`${api}/products/categories/` + category_id);
    const { data: categories } = useFetch(`${api}/products/categories`);

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
                        {categories && (
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
                                <List
                                    sx={{
                                        width: "100%",
                                    }}
                                >
                                    {categories.map((category) => (
                                        <Box
                                            sx={{ textAlign: "left" }}
                                            key={category.id}
                                        >
                                            <Link
                                                to={`/products/${category.name}/${category.id}`}
                                                style={{
                                                    textDecoration: "none",
                                                    color: "inherit",
                                                }}
                                            >
                                                <ListItem>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            textTransform:
                                                                "capitalize",
                                                        }}
                                                    >
                                                        {category.name}
                                                    </Typography>
                                                </ListItem>
                                            </Link>
                                            <Divider
                                                variant="middle"
                                                component="li"
                                            />
                                        </Box>
                                    ))}
                                </List>
                            </Paper>
                        )}
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
                                        <>
                                            {products.length > 0 ? (
                                                <ProductCards
                                                    products={products}
                                                />
                                            ) : (
                                                <>
                                                    <Container
                                                        sx={{
                                                            flexGrow: 1,
                                                            my: 3,
                                                            height: "100vh",
                                                            display: "flex",
                                                            justifyContent:
                                                                "center",
                                                            alignItems:
                                                                "center",
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
                                                                No products in
                                                                this category
                                                            </Typography>
                                                        </Box>
                                                    </Container>
                                                </>
                                            )}
                                        </>
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
