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
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CalculateIcon from "@mui/icons-material/Calculate";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LabelIcon from "@mui/icons-material/Label";
import { Link } from "react-router-dom";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaymentsIcon from "@mui/icons-material/Payments";
import LogoutIcon from "@mui/icons-material/Logout";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const VendorMenu = () => {
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    const sellerToken = isLogInTrue.user.token;
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
                            alt="Seller Pic"
                            src="/static/images/avatar/1.jpg"
                        />
                        <CardContent sx={{ width: "100%" }}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{ m: 1 }}
                            >
                                Seller name
                            </Typography>

                            <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="div"
                            >
                                <Link
                                    to={`/vendor/${sellerToken}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    Seller account
                                </Link>
                            </Typography>
                            <Divider variant="middle" />
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                                color="secondary"
                                sx={{ m: 1 }}
                            >
                                <Link
                                    to={`/vendor/Shop`}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    Go to shop
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
                                Shipping Details
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
                                to={`/vendor/Wallet`}
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
                                            <AccountBalanceWalletIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Wallet" />
                                </ListItem>
                            </Link>
                            <Divider variant="middle" component="li" />
                            <Link
                                to={`/vendor/Calculator`}
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
                                            <CalculateIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Shipping calculator" />
                                </ListItem>
                            </Link>
                            <Divider variant="middle" component="li" />
                            <Link
                                to={`/vendor/Label`}
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
                                            <AddCircleOutlineIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="New label" />
                                </ListItem>
                            </Link>
                            <Divider variant="middle" component="li" />
                            <Link
                                to={`/vendor/Shipping`}
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
                                            <LabelIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Shipping labels" />
                                </ListItem>
                            </Link>
                        </List>
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
                                Other Details
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
                                to={`/vendor/Customs`}
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
                                            <SupportAgentIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Customs" />
                                </ListItem>
                            </Link>
                            <Divider variant="middle" component="li" />
                            <Link
                                to={`/vendor/Payment`}
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
                                            <PaymentsIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Payment details" />
                                </ListItem>
                            </Link>
                            <Divider variant="middle" component="li" />
                            <Link
                                to={`/vendor/upload/bulk`}
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
                                            <FileUploadIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Products upload" />
                                </ListItem>
                            </Link>
                            <Divider variant="middle" component="li" />
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

export default VendorMenu;
