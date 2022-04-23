import React from "react";
import {
    Container,
    Typography,
    Grid,
    Box,
    Card,
    CardActions,
    CardMedia,
    CardContent,
    Button,
    Rating,
} from "@mui/material";

import { Link } from "react-router-dom";
import model from "../media/model.png";
import customer from "../media/customer-service.png";
import simpsec from "../media/simple-secure.png";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import CustomerSearchBar from "../components/CustomerSearchBar";
// import api from "../components/api";
// import useFetch from "../components/useFetch";
// import Loading from "../components/Loading";
// import ProductCards from "../components/ProductCards";

const Home = () => {
    // const { data: products,isPending, error } = useFetch(`${api}/products`);
    // const latest = products.slice(0, 7);
    // console.log(latest);
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    return (
        <>
            {isLogInTrue && isLogInTrue.userLogin ? (
                <CustomerSearchBar />
            ) : (
                <PrimarySearchAppBar />
            )}
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 100 }}
            ></Container>
            {/* Landing page */}
            <Container>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 8 }}
                >
                    <Grid item xs={4} sm={8} md={4}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                alignSelf: "center",
                                p: 1,
                                m: 1,
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{ textAlign: "left", m: 2 }}
                            >
                                African Collection 2022
                            </Typography>
                            <Typography
                                variant="h3"
                                color="secondary"
                                sx={{ textAlign: "left", m: 2 }}
                            >
                                NEW ARRIVALS
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{ textAlign: "left", m: 2 }}
                            >
                                starting from $ 5.00
                            </Typography>
                            <Box sx={{ flexGrow: 1, my: 4, m: 2 }}>
                                <Link
                                    to={`/products`}
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
                                        SHOP NOW
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sm={8}
                        md={4}
                        sx={{ width: "100%", display: "flex" }}
                    >
                        <CardMedia
                            component="img"
                            image={model}
                            alt="stock image"
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Products */}
            <Container sx={{ flexGrow: 1, my: 3 }}>
                <Typography
                    variant="h4"
                    sx={{ p: 3, m: 3 }}
                    gutterBottom
                    component="div"
                >
                    Popular Products
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 16 }}
                >
                    {Array.from(Array(4)).map((_, index) => (
                        <Grid item xs={4} sm={8} md={4} key={index}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://i.etsystatic.com/17434867/r/il/9fff97/1532353867/il_fullxfull.1532353867_bg3w.jpg"
                                    alt="bracelet"
                                />
                                <CardContent>
                                    <Typography
                                        sx={{ textAlign: "left" }}
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                    >
                                        Kenyan Flag bracelet | Beaded Bracelet
                                    </Typography>

                                    <Typography
                                        sx={{ textAlign: "left" }}
                                        color="text.secondary"
                                    >
                                        Show your love for Kenya by getting this
                                        beautiful Piece. We can also custom make
                                        any for your Country. Go on and get
                                        yours!
                                    </Typography>
                                    <Rating
                                        name="read-only"
                                        value={3}
                                        readOnly
                                    />
                                    <Typography
                                        sx={{ textAlign: "left" }}
                                        color="secondary"
                                    >
                                        $ 29.95
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link
                                        to={`/product`}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="secondary"
                                            bgcolor="secondary"
                                        >
                                            View product
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Latest product */}
            <Container sx={{ flexGrow: 1, my: 3 }}>
                <Typography
                    variant="h4"
                    sx={{ p: 3, m: 3 }}
                    gutterBottom
                    component="div"
                >
                    Latest Products
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 6, sm: 6, md: 8 }}
                    sx={{ mt: 15 }}
                >
                    
                    
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={6} sm={3} md={2} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image="https://i.etsystatic.com/17434867/r/il/d4c634/2490833996/il_fullxfull.2490833996_g1w9.jpg"
                                    alt="Maasai shuka"
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
                                        Blue Red Maasai Shuka |Camping Shawl
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
                                        $ 49.95
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link
                                        to={`/product`}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="secondary"
                                            bgcolor="secondary"
                                        >
                                            View product
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ flexGrow: 1, my: 4 }}>
                    <Link
                        to={`/products`}
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
                            SHOP BY CATEGORY
                        </Button>
                    </Link>
                </Box>
            </Container>

            {/* Focus */}
            <Container sx={{ flexGrow: 1, my: 3 }}>
                <Typography
                    variant="h4"
                    sx={{ p: 3, m: 3 }}
                    gutterBottom
                    component="div"
                >
                    Our Focus
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 8 }}
                >
                    <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{ maxWidth: 500 }}>
                            <CardMedia
                                component="img"
                                height="375"
                                image={customer}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Customer Service
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus.t
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Card sx={{ maxWidth: 500 }}>
                            <CardMedia
                                component="img"
                                height="375"
                                image={simpsec}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Simple and Secure
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus.t
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            {/* Partners */}
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    paddingY: 3,
                    backgroundColor: "secondary.main",
                }}
            >
                <Container sx={{ flexGrow: 1, my: 3 }}>
                    <Typography
                        variant="h4"
                        sx={{ p: 3, m: 3 }}
                        gutterBottom
                        component="div"
                    >
                        Our Partners
                    </Typography>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 16 }}
                    >
                        {Array.from(Array(4)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Card
                                    sx={{
                                        maxWidth: 345,
                                        backgroundColor: "secondary.main",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="logos"
                                    />
                                    <CardContent>
                                        <Typography
                                            sx={{ textAlign: "left" }}
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            Partners
                                        </Typography>
                                        <Typography sx={{ textAlign: "left" }}>
                                            Product description Lorem ipsum
                                            dolor sit amet consectetur
                                            adipisicing elit. Accusantium?
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Home;
