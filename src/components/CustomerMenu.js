import React from "react";
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Divider,
    // FormControl,
    // InputLabel,
    // FilledInput,
    // IconButton,
    // FormGroup,
    // FormControlLabel,
    // Checkbox,
    // Button,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
// import StarHalfIcon from "@mui/icons-material/StarHalf";
import LogoutIcon from "@mui/icons-material/Logout";

const CustomerMenu = () => {
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    const customerName = `${isLogInTrue.user.first_name} ${isLogInTrue.user.second_name}`;
    const customerID = isLogInTrue.user.id;
    return (
        <>
            <Container>
                <Box sx={{ mb: 2, borderColor: "secondary.main" }}>
                    <Card
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 56,
                                height: 56,
                                m: 1,
                                bgcolor: "secondary.main",
                            }}
                            alt="Customer Pic"
                            src="/static/images/avatar/1.jpg"
                        />
                        <CardContent sx={{ width: "100%" }}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{ m: 1 }}
                            >
                                {customerName}
                            </Typography>

                            <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="div"
                                color="secondary"
                            >
                                <Link
                                    to={`/customer/${customerID}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    Customer account
                                </Link>
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ mb: 3 }}>
                    <Card>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Order Details
                            </Typography>
                        </CardContent>
                        <Divider variant="middle" />

                        <List
                            sx={{
                                width: "100%",
                                bgcolor: "background.paper",
                            }}
                        >
                            <Link
                                to={`/customer/Orders`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                            sx={{ bgcolor: "secondary.main" }}
                                        >
                                            <ShoppingCartCheckoutIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Orders" />
                                </ListItem>
                            </Link>
                            <Divider variant="middle" component="li" />
                            <Link
                                to={`/customer/Favorites`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                            sx={{ bgcolor: "secondary.main" }}
                                        >
                                            <FavoriteIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Favorites" />
                                </ListItem>
                            </Link>
                            <Divider variant="middle" component="li" />
                            {/* <Link
                                to={`/customer/Reviews`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                            sx={{ bgcolor: "secondary.main" }}
                                        >
                                            <StarHalfIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Pending reviews" />
                                </ListItem>
                            </Link> */}
                            <Link
                                to={`/`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                            sx={{ bgcolor: "secondary.main" }}
                                        >
                                            <LogoutIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Log Out" />
                                </ListItem>
                            </Link>
                        </List>
                    </Card>
                </Box>
            </Container>
        </>
    );
};

export default CustomerMenu;
