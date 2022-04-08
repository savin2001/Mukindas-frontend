import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
    Container,
    Typography,
    Grid,
    Box,
    Paper,
    // CardActions,
    CardMedia,
    // CardContent,
    Button,
    Rating,
} from "@mui/material";
import { Link } from "react-router-dom";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";

const Product = () => {
    return (
        <>
            <PrimarySearchAppBar />
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 100 }}
            ></Container>
            <Container sx={{ flexGrow: 1, top: 1000, mb: 5 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 8 }}
                    sx={{ mb: 5 }}
                >
                    <Grid item xs={4} sm={4} md={4}>
                        <Box
                            sx={{
                                textAlign: "left",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",

                                    mb: 3,
                                    mx: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    <Box sx={{ pr: 2 }}>
                                        <AccountCircle
                                            color="secondary"
                                            sx={{
                                                width: 60,
                                                height: 60,
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography
                                            sx={{ color: "primary.dark" }}
                                            variant="h6"
                                        >
                                            Seller Name
                                        </Typography>
                                        <Rating
                                            name="half-rating-read"
                                            defaultValue={2.5}
                                            precision={0.5}
                                            readOnly
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ pt: 2 }}>
                                    <CardMedia
                                        component="img"
                                        image="https://i.etsystatic.com/17434867/r/il/6bd9d6/3521007698/il_fullxfull.3521007698_5nyn.jpg"
                                        alt="stock image"
                                    />
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Box
                            sx={{
                                textAlign: "left",

                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    textAlign: "left",
                                    mb: 3,
                                    pt: 3,
                                    fontWeight: 600,
                                }}
                            >
                                African beige Red Pendant Scarf Drop Beaded
                                Multicolored Necklace | Maasai Necklace |
                                Stylish | Gift for Her | Masai Mara
                            </Typography>
                            <Typography
                                variant="p"
                                sx={{
                                    textAlign: "left",
                                    my: 3,
                                    pt: 3,
                                }}
                            >
                                Maasai pendant necklace with intricate colors
                                and patterns. <br /> It is made and worn by
                                Kenyan Maasai Women on Special Occasions. One
                                size fits all. Will complement your formal or
                                casual outfit beautifully. <br />
                                Expedited Shipping to the U.S takes !! <br />
                                FREE SHIPPING !!! Go on and get this awesome
                                Piece!
                            </Typography>
                            <Typography
                                variant="h4"
                                color="secondary"
                                sx={{
                                    textAlign: "left",
                                    my: 2,
                                    pt: 3,
                                    fontWeight: 200,
                                }}
                            >
                                $ 34.99
                            </Typography>

                            <Typography
                                variant="caption"
                                sx={{
                                    textAlign: "left",
                                    my: 3,
                                    pt: 3,
                                    color: "primary.light",
                                }}
                            >
                                426 views in the last days!
                            </Typography>
                            <Box
                                sx={{
                                    my: 3,
                                    pt: 3,
                                    color: "primary.light",
                                }}
                            >
                                <Link
                                    to={`/cart`}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <Button
                                        size="large"
                                        variant="contained"
                                        color="secondary"
                                        bgcolor="secondary"
                                    >
                                        Add to cart
                                    </Button>
                                </Link>
                            </Box>
                            <Typography
                                variant="p"
                                sx={{
                                    textAlign: "left",
                                    my: 3,
                                    pt: 3,
                                }}
                            >
                                Replies in 1 days, 1 hours in average
                            </Typography>
                            <Box
                                sx={{
                                    my: 3,
                                    pt: 3,
                                    color: "primary.light",
                                }}
                            >
                                <Link
                                    to={`/cart`}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <Button
                                        size="large"
                                        variant="contained"
                                        color="secondary"
                                        sx={{ bgcolor: "primary.dark" }}
                                    >
                                        Contact seller
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Product;
