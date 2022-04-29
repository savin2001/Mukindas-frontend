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
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link, useNavigate } from "react-router-dom";

// Array of pages to be displayed on the top menu
const guestPages = [
    "Shipment",
    "Transactions",
];

const GuestSearchBar = () => {
    const navigate = useNavigate();
    const [logoutUser, setLogoutUser] = useState(false);
    console.log(logoutUser);
    const logout = () => {
        localStorage.removeItem("login");
        setLogoutUser(true);
        console.log(logoutUser);
        navigate("/login");
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
                to={`/guest`}
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
                <Link
                    to={`/guest/Shipment`}
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
                        <ListItemText primary="New shipment" />
                    </ListItem>
                </Link>
                <Divider variant="middle" component="li" />
                <Link
                    to={`/guest/Transactions`}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
                                <LocalShippingIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Shipping transactions" />
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
                                to={`/guest`}
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
                            {guestPages.map((page) => (
                                <Button key={page}>
                                    <Link
                                        to={`/guest/${page}`}
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

export default GuestSearchBar;
