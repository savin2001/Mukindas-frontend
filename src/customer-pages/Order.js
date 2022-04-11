import React from "react";

import {
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    Box,
    Paper,
    Rating,
    Button,
    LinearProgress,
    // Table,
    // TableBody,
    // TableCell,
    // TableContainer,
    // TableHead,
    // TableRow,
    // Paper,
    // List,
    // ListItemButton,
    // ListItemIcon,
    // ListItemText,
    // Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";
import CustomerSearchBar from "../components/CustomerSearchBar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CustomerMenu from "../components/CustomerMenu";

const Order = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <>
            <CustomerSearchBar />
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 100 }}
            ></Container>
            <Container>
                <Grid
                    container
                    spacing={{ xs: 2, md: 1 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid
                        item
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                        md={3}
                    >
                        <CustomerMenu />
                    </Grid>
                    <Grid item xs={4} sm={8} md={9} sx={{ mb: 2 }}>
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
                                            African beige Red Pendant Scarf Drop
                                            Beaded Multicolored Necklace |
                                            Maasai Necklace | Stylish | Gift for
                                            Her | Masai Mara
                                        </Typography>

                                        <Typography
                                            variant="h5"
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
                                                    Cancel order
                                                </Button>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
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
                                <Box sx={{ mb: 3 }}>
                                    <Typography
                                        sx={{
                                            color: "primary.dark",
                                        }}
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
                            <Box sx={{ width: "100%", mb: 3 }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Typography
                                        color="secondary"
                                        variant="h6"
                                        sx={{ m: 2 }}
                                    >
                                        Order number
                                    </Typography>
                                    <Typography variant="h6" sx={{ m: 2 }}>
                                        12345678
                                    </Typography>
                                </Box>

                                <LinearProgress
                                    variant="determinate"
                                    color="secondary"
                                    value={progress}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Typography variant="caption">
                                        Order confirmed
                                    </Typography>
                                    <Typography variant="caption">
                                        Shipping
                                    </Typography>
                                    <Typography variant="caption">
                                        Arrival
                                    </Typography>
                                    <Typography variant="caption">
                                        Delivered
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Order;
