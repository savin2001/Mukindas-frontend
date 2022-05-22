import React, { useEffect, useState } from "react";
import {
    AppBar,
    Container,
    Box,
    Button,
    Toolbar,
    IconButton,
    Typography,
    Badge,
    MenuItem,
    Menu,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Divider,
    Autocomplete,
    TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import LoginIcon from "@mui/icons-material/Login";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useSelector } from "react-redux";
import axios from "axios";
import api from "./api";
import useFetch from "./useFetch";

export default function PrimarySearchAppBar() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get(`${api}/products/categories`).then((response) => {
            setCategories(response.data.data);
        });
        return () => console.log(null);
    }, []);
    const { data: products } = useFetch(`${api}/products/`);
    localStorage.setItem("productsArray", JSON.stringify(products));
    const productsArray = JSON.parse(localStorage.getItem("productsArray"));
    const navigate = useNavigate();
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    const [searchInput, setSearchInput] = useState("");
    const [data, setData] = useState(null);
    const handleSearch = (e) => {
        e.preventDefault();
        if (productsArray.length > 0) {
            const isFound = productsArray.some((element) => {
                if (element.name === data) {
                    return true;
                }
                return false;
            });
            if (isFound) {
                productsArray.forEach((product) => {
                    if (product.name === data) {
                        const productID = product.id;
                        navigate(`/products/${productID}`);
                    }
                });
            }
        }
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
                to={`/login`}
                style={{
                    textDecoration: "none",
                    color: "inherit",
                }}
            >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "secondary.main" }}>
                            <LoginIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Log In" />
                </ListItem>
            </Link>
            <Divider variant="middle" component="li" />
            <Link
                to={`/customer-register`}
                style={{
                    textDecoration: "none",
                    color: "inherit",
                }}
            >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "secondary.main" }}>
                            <ShoppingBasketIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Become a customer" />
                </ListItem>
            </Link>
            <Divider variant="middle" component="li" />
            <Link
                to={`/vendor-register`}
                style={{
                    textDecoration: "none",
                    color: "inherit",
                }}
            >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "secondary.main" }}>
                            <StorefrontIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Become a vendor" />
                </ListItem>
            </Link>
            <Divider variant="middle" component="li" />
            <Link
                to={`/guest-register`}
                style={{
                    textDecoration: "none",
                    color: "inherit",
                }}
            >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "secondary.main" }}>
                            <AccessibilityNewIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Become a guest" />
                </ListItem>
            </Link>
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
                        <IconButton size="large" aria-label="" color="inherit">
                            <Badge
                                badgeContent={cartTotalQuantity}
                                color="secondary"
                            >
                                <AddShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <p>Cart</p>
                    </MenuItem>
                </Link>
                <Divider variant="middle" component="li" />
                <Link
                    to={`/login`}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
                                <LoginIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Log In" />
                    </ListItem>
                </Link>
                <Divider variant="middle" component="li" />
                <Link
                    to={`/customer-register`}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
                                <ShoppingBasketIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Become a customer" />
                    </ListItem>
                </Link>
                <Divider variant="middle" component="li" />
                <Link
                    to={`/vendor-register`}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
                                <StorefrontIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Become a vendor" />
                    </ListItem>
                </Link>
                <Divider variant="middle" component="li" />
                <Link
                    to={`/guest-register`}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: "secondary.main" }}>
                                <AccessibilityNewIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Become a guest" />
                    </ListItem>
                </Link>
            </List>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" id="navbar">
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ px: 3 }}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {" "}
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
                                    display: { xs: "block", md: "none" },
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
                                            <Typography
                                                textAlign="center"
                                                color="dark"
                                            >
                                                {category.name}
                                            </Typography>
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
                                display: { xs: "none", sm: "flex", md: "none" },
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
                                <Link
                                    to={`/products/${category.name}/${category.id}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                    key={category.id}
                                >
                                    <Button
                                        key={category.name}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            color: "black",
                                            display: "block",
                                        }}
                                    >
                                        {category.name}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            {products && (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-end",
                                    }}
                                >
                                    <Autocomplete
                                        value={data}
                                        disablePortal
                                        id="combo-box-demo"
                                        onChange={(event, newValue) => {
                                            setData(newValue);
                                        }}
                                        inputValue={searchInput}
                                        onInputChange={(
                                            event,
                                            newInputValue
                                        ) => {
                                            setSearchInput(newInputValue);
                                        }}
                                        options={productsArray.map(
                                            (product) => product.name
                                        )}
                                        fullWidth
                                        renderInput={(params) => (
                                            <Box sx={{ display: "flex" }}>
                                                <TextField
                                                    {...params}
                                                    variant="filled"
                                                    label="Search for products"
                                                    size="small"
                                                />
                                                <Button
                                                    size="small"
                                                    variant="outlined"
                                                    color="secondary"
                                                    bgcolor="secondary"
                                                    onClick={(e) => {
                                                        handleSearch(e);
                                                    }}
                                                >
                                                    <SearchIcon size="large" />
                                                </Button>
                                            </Box>
                                        )}
                                    />
                                </Box>
                            )}
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
                                    <Badge
                                        badgeContent={cartTotalQuantity}
                                        color="secondary"
                                    >
                                        <AddShoppingCartIcon />
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
}
