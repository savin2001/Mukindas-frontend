import React, { useState, useEffect } from "react";

import {
    AppBar,
    Container,
    Box,
    Button,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Badge,
    MenuItem,
    Menu,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Divider,
    // Card,
    // CardContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreIcon from "@mui/icons-material/MoreVert";
import { styled, alpha } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import api from "./api";

// Array of pages to be displayed on the top menu

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderColor: "primary.main",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const CustomerSearchBar = () => {
    const [categories, setCategories] = useState([]);
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    const customerID = isLogInTrue.user.id;
    useEffect(() => {
        axios.get(`${api}/products/categories`).then((response) => {
            setCategories(response.data.data);
        });
        return () => console.log("");
    }, []);
    const {cartTotalQuantity} = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const [logoutUser, setLogoutUser] = useState(false);    
    const logout = () => {
        localStorage.removeItem("login");
        setLogoutUser(true);
        console.log(logoutUser);
        navigate("/login");
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    // Function to open the page navigation menu
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    // Function to close the page navigation menu
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

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
                to={`/customer/${customerID}`}
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
                    to={`/cart`}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <MenuItem>
                        <IconButton
                            size="large"
                            aria-label=""
                            color="inherit"
                        >
                            <Badge badgeContent={cartTotalQuantity} color="secondary">
                                <AddShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <p>Cart</p>
                    </MenuItem>
                </Link>
                <Divider variant="middle" component="li" />
                <Link
                    to={`/customer/Favorites`}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <MenuItem>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="secondary">
                                <FavoriteIcon />
                            </Badge>
                        </IconButton>
                        <p>Wish list</p>
                    </MenuItem>
                </Link>
                <Divider variant="middle" component="li" />
                <Link
                    to={`/customer/${customerID}`}
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
                    to={`/customer/Orders`}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
                                <ShoppingCartCheckoutIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Orders" />
                    </ListItem>
                </Link>
                <Divider variant="middle" component="li" />
                <Link
                    to={`/customer/Reviews`}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
                                <StarHalfIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Pending reviews" />
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
                                to={`/`}
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
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {
                                        xs: "block",
                                        md: "none",
                                    },
                                    width: "150px",
                                }}
                            >
                                {categories.map((category) => (
                                    <MenuItem
                                        key={category.id}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Link
                                            to={`/products/${category.name}/${category.id}`}
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit",
                                            }}
                                        >
                                            {category.name}
                                            <Typography textAlign="center"></Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
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
                                to={`/`}
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
                            {categories.map((category) => (
                                <Button key={category.id} onClick={handleCloseNavMenu}>
                                    <Link
                                        to={`/products/${category.name}/${category.id}`}
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                        }}
                                    >
                                        {category.name}
                                        <Typography textAlign="center"></Typography>
                                    </Link>
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ "aria-label": "search" }}
                                />
                            </Search>
                        </Box>
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <Link
                                to={`/cart`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <IconButton
                                    size="large"
                                    aria-label=""
                                    color="inherit"
                                >
                                    <Badge badgeContent={cartTotalQuantity} color="secondary">
                                        <AddShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                            </Link>
                            <Link
                                to={`/customer/Favorites`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="secondary">
                                        <FavoriteIcon />
                                    </Badge>
                                </IconButton>
                            </Link>

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
                                <MoreIcon />
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

export default CustomerSearchBar;
