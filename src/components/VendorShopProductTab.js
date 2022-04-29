import React from "react";
import {
    Grid,
    Card,
    Typography,
    Box,
    Button,
    // CardContent,
    // CardActions,
    // CardMedia,
    // TextField,
} from "@mui/material";
import useFetch from "./useFetch";
import Loading from "./Loading";
import VendorProductCards from "./VendorProductCards";

const VendorShopProductTab = () => {
    const {
        data: products,
        isPending,
        error,
    } = useFetch(`https://mukindas-test-server.herokuapp.com/products`);
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
                        spacing={{ xs: 1, md: 1 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        <Grid item xs={2} sm={4} md={3}>
                            <Box
                                sx={{
                                    p: 1,
                                    m: 1,
                                    columnGap: 3,
                                    rowGap: 1,
                                }}
                            >
                                <Button
                                    size="large"
                                    variant="contained"
                                    color="secondary"
                                    bgcolor="secondary"
                                >
                                    Men
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={4} md={3}>
                            <Box
                                sx={{
                                    p: 1,
                                    m: 1,
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
                                    Women
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={4} md={3}>
                            <Box
                                sx={{
                                    p: 1,
                                    m: 1,
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
                                    Trousers
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={4} md={3}>
                            <Box
                                sx={{
                                    p: 1,
                                    m: 1,
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
                                    Tops
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={4} md={3}>
                            <Box
                                sx={{
                                    p: 1,
                                    m: 1,
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
                                    Earrings
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={4} md={3}>
                            <Box
                                sx={{
                                    p: 1,
                                    m: 1,
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
                                    Necklaces
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={4} md={3}>
                            <Box
                                sx={{
                                    p: 1,
                                    m: 1,
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
                                    Shoes
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={4} md={3}>
                            <Box
                                sx={{
                                    p: 1,
                                    m: 1,
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
                                    Headgear
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Typography variant="h6" content="div" sx={{ my: 2 }}>
                        Change price of individual products
                    </Typography>
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
        </>
    );
};

export default VendorShopProductTab;
