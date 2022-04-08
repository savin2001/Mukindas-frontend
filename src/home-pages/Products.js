import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Paper,
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Button,
    Rating,
} from "@mui/material";
import { Link } from "react-router-dom";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";

const Products = () => {
    return (
        <>
            <PrimarySearchAppBar />
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
                                    height: "180px",
                                },
                                mb: 3,
                                mx: 3,
                            }}
                        >
                            <Card>
                                <CardMedia
                                    component="img"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="stock image"
                                />
                            </Card>
                        </Paper>
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
                                    {Array.from(Array(4)).map((_, index) => (
                                        <Grid
                                            item
                                            xs={3}
                                            sm={2}
                                            md={1}
                                            key={index}
                                        >
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
                                                        Red okre Maasai Earrings
                                                        | Maasai Mara Earrings
                                                    </Typography>

                                                    <Rating
                                                        name="read-only"
                                                        value={3}
                                                        readOnly
                                                    />
                                                    <Typography
                                                        sx={{
                                                            textAlign: "left",
                                                        }}
                                                        color="secondary"
                                                    >
                                                        $ 13.99
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Link
                                                        to={`/product`}
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                            color: "inherit",
                                                        }}
                                                    >
                                                        <Button
                                                            size="small"
                                                            variant="contained"
                                                            color="secondary"
                                                            bgcolor="secondary"
                                                        >
                                                            Add to Cart
                                                        </Button>
                                                    </Link>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            {/* Men's Fashion */}
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
                                        Men's Fashion
                                    </Typography>
                                </Box>
                                <Grid
                                    container
                                    spacing={{ xs: 2, md: 3 }}
                                    columns={{ xs: 6, sm: 6, md: 4 }}
                                    sx={{ mt: 15 }}
                                >
                                    {Array.from(Array(4)).map((_, index) => (
                                        <Grid
                                            item
                                            xs={3}
                                            sm={2}
                                            md={1}
                                            key={index}
                                        >
                                            <Card>
                                                <CardMedia
                                                    component="img"
                                                    height="175"
                                                    image="https://i.etsystatic.com/17434867/r/il/ad0808/1532319595/il_fullxfull.1532319595_iqvv.jpg"
                                                    alt="stock image"
                                                />
                                                <CardContent>
                                                    <Typography
                                                        sx={{
                                                            textAlign: "left",
                                                        }}
                                                        gutterBottom
                                                        variant="p"
                                                        component="div"
                                                    >
                                                        Dashiki Snoodie | Ankara
                                                        Snoodie Jumper | Africa
                                                        Inspired Patterns |
                                                        Unisex | Black
                                                    </Typography>

                                                    <Rating
                                                        name="read-only"
                                                        value={3}
                                                        readOnly
                                                    />
                                                    <Typography
                                                        sx={{
                                                            textAlign: "left",
                                                        }}
                                                        color="secondary"
                                                    >
                                                        $ 69.95
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Link
                                                        to={`/product`}
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                            color: "inherit",
                                                        }}
                                                    >
                                                        <Button
                                                            size="small"
                                                            variant="contained"
                                                            color="secondary"
                                                            bgcolor="secondary"
                                                        >
                                                            Add to Cart
                                                        </Button>
                                                    </Link>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            {/* Women's Fashion */}
                            <Box
                                sx={{
                                    textAlign: "left",

                                    width: "100%",
                                    height: "100%",
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
                                        Women's Fashion
                                    </Typography>
                                </Box>
                                <Grid
                                    container
                                    spacing={{ xs: 2, md: 3 }}
                                    columns={{ xs: 6, sm: 6, md: 4 }}
                                    sx={{ mt: 15 }}
                                >
                                    {Array.from(Array(4)).map((_, index) => (
                                        <Grid
                                            item
                                            xs={3}
                                            sm={2}
                                            md={1}
                                            key={index}
                                        >
                                            <Card>
                                                <CardMedia
                                                    component="img"
                                                    height="172"
                                                    image="https://i.etsystatic.com/17434867/r/il/3a0a9d/3568424169/il_fullxfull.3568424169_stlr.jpg"
                                                    alt="stock image"
                                                />
                                                <CardContent>
                                                    <Typography
                                                        sx={{
                                                            textAlign: "left",
                                                        }}
                                                        gutterBottom
                                                        variant="p"
                                                        component="div"
                                                    >
                                                        On SALE African Red
                                                        Pendant Scarf Drop
                                                        Beaded Multicolored
                                                        Necklace | Maasai
                                                        Necklace | Stylish |
                                                        Gift for Her | Masai
                                                        Mara
                                                    </Typography>

                                                    <Rating
                                                        name="read-only"
                                                        value={3}
                                                        readOnly
                                                    />
                                                    <Typography
                                                        sx={{
                                                            textAlign: "left",
                                                        }}
                                                        color="secondary"
                                                    >
                                                        $ 34.99
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Link
                                                        to={`/product`}
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                            color: "inherit",
                                                        }}
                                                    >
                                                        <Button
                                                            size="small"
                                                            variant="contained"
                                                            color="secondary"
                                                            bgcolor="secondary"
                                                        >
                                                            Add to Cart
                                                        </Button>
                                                    </Link>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))}
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
