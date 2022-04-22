import React, { useState } from "react";

import {
    AppBar,
    Container,
    Box,
    Button,
    Toolbar,
    IconButton,
    Typography,
    // MenuItem,
    Menu,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LabelIcon from "@mui/icons-material/Label";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CalculateIcon from "@mui/icons-material/Calculate";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Link, useNavigate } from "react-router-dom";

// Array of pages to be displayed on the top menu
const vendorPages = [
    "Shop",
    "Wallet",
    "Calculator",
    "Label",
    "Shipping",
    "Customs",
    "Payment",
    "Upload",
];

const VendorSearchBar = () => {
    const navigate = useNavigate();
    const [logoutUser, setLogoutUser] = useState(false);
    console.log(logoutUser);
    const logout = () => {
        localStorage.removeItem("vendorLogin");
        setLogoutUser(true);
        console.log(logoutUser);
        navigate("/");
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

        // Checking if menu is open
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // Function to show the open profile menu
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Function to close the mobile profile menu
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    // Function to close the profile  menu
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    // Function to show the open profile menu
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";

    // Menu component
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Link
                to={`/vendor`}
                style={{
                    textDecoration: "none",
                    color: "inherit",
                }}
            >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "secondary.main" }}>
                            <AccountCircle />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="My account" />
                </ListItem>
            </Link>
            <Divider variant="middle" component="li" />
            <ListItem
                onClick={logout}
                style={{
                    cursor: "pointer",
                }}
            >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "secondary.main" }}>
                        <LogoutIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Log Out" />
            </ListItem>
        </Menu>
    );

    // Mobile menu component
    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <List
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                }}
            >
                <Divider variant="middle" component="li" />
                <Link
                    to={`/vendor`}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
                                <AccountCircle />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="My account" />
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
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
                                <LabelIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Shipping labels" />
                    </ListItem>
                </Link>
                <Divider variant="middle" component="li" />
                <Link
                    to={`/vendor/Wallet`}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
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
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
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
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
                                <AddCircleOutlineIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="New label" />
                    </ListItem>
                </Link>
                <Divider variant="middle" component="li" />
                <Link
                    to={`/vendor/Customs`}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
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
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
                                <PaymentsIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Payment details" />
                    </ListItem>
                </Link>
                <Divider variant="middle" component="li" />
                <Link
                    to={`/vendor/Upload`}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
                                <FileUploadIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Products upload" />
                    </ListItem>
                </Link>
                <Divider variant="middle" component="li" />
                <ListItem
                    onClick={logout}
                    style={{
                        cursor: "pointer",
                    }}
                >
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "secondary.main" }}>
                            <LogoutIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Log Out" />
                </ListItem>
            </List>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                        >
                            <Link
                                to={`/vendor`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                Mukinda's
                            </Link>
                        </Typography>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        ></Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <Link
                                to={`/vendor`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                Mukindas
                            </Link>
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {vendorPages.map((page) => (
                                <Button key={page}>
                                    <Link
                                        to={`/${page}`}
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                        }}
                                    >
                                        {page}
                                        <Typography textAlign="center"></Typography>
                                    </Link>
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
};

export default VendorSearchBar;
