import React from "react";
import {
    Grid,
    Card,
    Typography,
    Box,
    Button,
    CardContent,
    // CardActions,
    CardMedia,
    // TextField,
} from "@mui/material";

const VendorShopProductTab = () => {
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
                                Men category
                            </Typography>
                        </Box>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 6, sm: 6, md: 4 }}
                            sx={{ mt: 15 }}
                        >
                            {Array.from(Array(4)).map((_, index) => (
                                <Grid item xs={3} sm={2} md={1} key={index}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            height="175"
                                            image="https://i.etsystatic.com/17434867/r/il/1d4e7f/1479707788/il_fullxfull.1479707788_bry2.jpg"
                                            alt="stock image"
                                        />
                                        <CardContent>
                                            <Typography
                                                sx={{
                                                    textAlign: "left",
                                                }}
                                                gutterBottom
                                                variant="h6"
                                                component="div"
                                            >
                                                Red okre Maasai Earrings |
                                                Maasai Mara Earrings
                                            </Typography>

                                            
                                            <Typography
                                                sx={{
                                                    textAlign: "left",
                                                    mb: 2,
                                                }}
                                                color="secondary"
                                            >
                                                $ 13.99
                                            </Typography>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="secondary"
                                                bgcolor="secondary"
                                            >
                                                Change price
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Card>
        </>
    );
};

export default VendorShopProductTab;
