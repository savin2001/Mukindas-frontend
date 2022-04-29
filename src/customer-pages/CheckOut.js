import React, { useState } from "react";
import {
    Container,
    Typography,
    Box,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    Button,
    TableRow,
    Paper,
    Card,
    CardMedia,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import CustomerSearchBar from "../components/CustomerSearchBar";
import { useSelector } from "react-redux";

const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

const Checkout = () => {
    const [open, setOpen] = useState(true);
    const cart = useSelector((state) => state.cart);
    const shippingCost = 25;
    const invoiceSubtotal = cart.cartTotalAmount;
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal + shippingCost;

    const handleOption1Click = () => {
        setOpen(!open);
    };

    return (
        <>
            <CustomerSearchBar />
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 100 }}
            ></Container>
            {cart.cartItems.length === 0 ? (
                <Container
                    sx={{
                        flexGrow: 1,
                        my: 3,
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{
                                color: "primary.light",
                                mb: 5,
                            }}
                        >
                            Checkout Error!
                        </Typography>
                        <Link
                            to={`/products`}
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            <Typography variant="h6" color="secondary">
                                <KeyboardBackspaceIcon fontSize="small" />
                                {"  "}
                                <span>Continue shopping</span>
                            </Typography>
                        </Link>
                    </Box>
                </Container>
            ) : (
                <>
                    <Container sx={{ flexGrow: 1, my: 3 }}>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Grid item xs={4} sm={8} md={12} sx={{ mb: 3 }}>
                                <Typography
                                    variant="h5"
                                    sx={{ textAlign: "left" }}
                                >
                                    Check-out
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Grid item xs={4} sm={8} md={4}>
                                <Box sx={{ width: "100%" }}>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="spanning table">
                                            <TableHead>
                                                <TableRow
                                                    sx={{
                                                        borderColor:
                                                            "secondary.main",
                                                    }}
                                                >
                                                    <TableCell>
                                                        <Typography
                                                            variant="body1"
                                                            color="secondary"
                                                            width="100%"
                                                            sx={{
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                        >
                                                            Your order
                                                        </Typography>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {cart.cartItems?.map(
                                                    (cartItem) => (
                                                        <TableRow
                                                            key={cartItem.id}
                                                        >
                                                            <TableCell>
                                                                <Grid
                                                                    container
                                                                    columns={{
                                                                        xs: 4,
                                                                        sm: 8,
                                                                        md: 15,
                                                                    }}
                                                                >
                                                                    <Grid
                                                                        item
                                                                        xs={1}
                                                                        sm={2}
                                                                        md={3}
                                                                    >
                                                                        <Card>
                                                                            <CardMedia
                                                                                component="img"
                                                                                image={
                                                                                    cartItem.pic1
                                                                                }
                                                                                alt={
                                                                                    cartItem.product
                                                                                }
                                                                                // sx={{pr: 1}}
                                                                            />
                                                                        </Card>
                                                                    </Grid>
                                                                    <Grid
                                                                        item
                                                                        xs={3}
                                                                        sm={6}
                                                                        md={12}
                                                                    >
                                                                        <Box
                                                                            sx={{
                                                                                display:
                                                                                    "flex",
                                                                                flexDirection:
                                                                                    "column",
                                                                            }}
                                                                        >
                                                                            <Typography
                                                                                variant="body1"
                                                                                sx={{
                                                                                    mb: 1,
                                                                                }}
                                                                            >
                                                                                {
                                                                                    cartItem.product
                                                                                }
                                                                            </Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                </Grid>
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                $
                                                                {cartItem.price}
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                )}
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography variant="body1">
                                                            Subtotal
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Typography variant="body1">
                                                            $
                                                            {ccyFormat(
                                                                invoiceSubtotal
                                                            )}
                                                        </Typography>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography variant="body1">
                                                            Tax
                                                        </Typography>
                                                    </TableCell>

                                                    <TableCell align="right">
                                                        <Typography variant="body1">
                                                            $
                                                            {ccyFormat(
                                                                invoiceTaxes
                                                            )}
                                                        </Typography>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography variant="body1">
                                                            Shipping fee
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Typography variant="body1">
                                                            $
                                                            {ccyFormat(
                                                                shippingCost
                                                            )}
                                                        </Typography>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography variant="body1">
                                                            Total
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Typography variant="body1">
                                                            $
                                                            {ccyFormat(
                                                                invoiceTotal
                                                            )}
                                                        </Typography>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Grid>
                            <Grid item xs={4} sm={8} md={8}>
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
                                    <Box sx={{ width: "100%" }}>
                                        <TableContainer component={Paper}>
                                            <Table aria-label="spanning table">
                                                <TableHead>
                                                    <TableRow
                                                        sx={{
                                                            borderColor:
                                                                "secondary.main",
                                                        }}
                                                    >
                                                        <TableCell>
                                                            <Typography
                                                                variant="h6"
                                                                color="secondary"
                                                                sx={{
                                                                    textAlign:
                                                                        "left",
                                                                }}
                                                            >
                                                                Delivery details
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>
                                                            <List
                                                                sx={{
                                                                    width: "100%",
                                                                    maxWidth: 500,
                                                                    bgcolor:
                                                                        "background.paper",
                                                                }}
                                                                component="nav"
                                                                aria-labelledby="nested-list-subheader"
                                                            >
                                                                <ListItemButton
                                                                    onClick={
                                                                        handleOption1Click
                                                                    }
                                                                >
                                                                    <ListItemIcon>
                                                                        <LocalShippingIcon color="secondary" />
                                                                    </ListItemIcon>
                                                                    <ListItemText
                                                                        primary="How do you want the
                                                order delivered?"
                                                                    />
                                                                    {open ? (
                                                                        <ExpandLess />
                                                                    ) : (
                                                                        <ExpandMore />
                                                                    )}
                                                                </ListItemButton>
                                                                <Collapse
                                                                    in={open}
                                                                    timeout="auto"
                                                                    unmountOnExit
                                                                >
                                                                    <List
                                                                        component="div"
                                                                        disablePadding
                                                                    >
                                                                        <RadioGroup
                                                                            aria-labelledby="demo-radio-buttons-group-label"
                                                                            defaultValue="female"
                                                                            name="radio-buttons-group"
                                                                            sx={{
                                                                                pl:2,
                                                                            }}
                                                                        >
                                                                            <ListItemButton
                                                                                sx={{
                                                                                    pl: 10,
                                                                                }}
                                                                            >
                                                                                <FormControlLabel
                                                                                    value="Delivery"
                                                                                    control={
                                                                                        <Radio color="secondary" />
                                                                                    }
                                                                                    label="Delivery to your home or office"
                                                                                />
                                                                            </ListItemButton>
                                                                        </RadioGroup>
                                                                    </List>
                                                                </Collapse>
                                                            </List>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Box>

                                    <Box sx={{ width: "100%" }}>
                                        <TableContainer component={Paper}>
                                            <Table aria-label="spanning table">
                                                <TableHead>
                                                    <TableRow
                                                        sx={{
                                                            borderColor:
                                                                "secondary.main",
                                                        }}
                                                    >
                                                        <TableCell>
                                                            <Typography
                                                                variant="h6"
                                                                color="secondary"
                                                                sx={{
                                                                    textAlign:
                                                                        "left",
                                                                }}
                                                            >
                                                                Delivery address
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            <Link
                                                                to={`/customer`}
                                                                style={{
                                                                    textDecoration:
                                                                        "none",
                                                                    color: "inherit",
                                                                }}
                                                            >
                                                                <Button
                                                                    size="large"
                                                                    variant="outlined"
                                                                    color="secondary"
                                                                    bgcolor="secondary"
                                                                >
                                                                    Change
                                                                </Button>
                                                            </Link>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell colSpan={2}>
                                                            <Grid
                                                                container
                                                                spacing={{
                                                                    xs: 1,
                                                                    md: 1,
                                                                }}
                                                                columns={{
                                                                    xs: 4,
                                                                    sm: 8,
                                                                    md: 12,
                                                                }}
                                                            >
                                                                <Grid
                                                                    item
                                                                    xs={4}
                                                                    sm={8}
                                                                    md={6}
                                                                    sx={{
                                                                        mb: 1,
                                                                    }}
                                                                >
                                                                    <Box
                                                                        sx={{
                                                                            p: 1,
                                                                            m: 1,
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                            columnGap: 1,
                                                                            rowGap: 1,
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                        >
                                                                            Customer
                                                                            name
                                                                        </Typography>
                                                                        <TextField
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                            placeholder="John"
                                                                            label="Customer"
                                                                            variant="filled"
                                                                            // onChange={handleChange}
                                                                            // disabled
                                                                        />
                                                                    </Box>
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={4}
                                                                    sm={8}
                                                                    md={6}
                                                                    sx={{
                                                                        mb: 1,
                                                                    }}
                                                                >
                                                                    <Box
                                                                        sx={{
                                                                            p: 1,
                                                                            m: 1,
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                            columnGap: 1,
                                                                            rowGap: 1,
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                        >
                                                                            Phone
                                                                            number
                                                                        </Typography>
                                                                        <TextField
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                            label="Phone"
                                                                            variant="filled"
                                                                            // onChange={handleChange}
                                                                            // disabled
                                                                        />
                                                                    </Box>
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={4}
                                                                    sm={8}
                                                                    md={6}
                                                                    sx={{
                                                                        mb: 1,
                                                                        flexGrow: 1,
                                                                    }}
                                                                >
                                                                    <Box
                                                                        sx={{
                                                                            p: 1,
                                                                            m: 1,
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",

                                                                            columnGap: 1,
                                                                            rowGap: 1,
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                        >
                                                                            House
                                                                            number
                                                                        </Typography>
                                                                        <TextField
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                            label="House number"
                                                                            variant="filled"
                                                                            placeholder="G3"
                                                                            // onChange={handleChange}
                                                                            // disabled
                                                                        />
                                                                    </Box>
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={4}
                                                                    sm={8}
                                                                    md={6}
                                                                    sx={{
                                                                        mb: 1,
                                                                    }}
                                                                >
                                                                    <Box
                                                                        sx={{
                                                                            p: 1,
                                                                            m: 1,
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                            columnGap: 1,
                                                                            rowGap: 1,
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                        >
                                                                            Building
                                                                            name
                                                                        </Typography>
                                                                        <TextField
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                            placeholder="Imenti House"
                                                                            label="Building name"
                                                                            variant="filled"
                                                                            // onChange={handleChange}
                                                                            // disabled
                                                                        />
                                                                    </Box>
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={4}
                                                                    sm={8}
                                                                    md={6}
                                                                    sx={{
                                                                        mb: 1,
                                                                    }}
                                                                >
                                                                    <Box
                                                                        sx={{
                                                                            p: 1,
                                                                            m: 1,
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                            columnGap: 1,
                                                                            rowGap: 1,
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                        >
                                                                            Estate
                                                                            name
                                                                        </Typography>
                                                                        <TextField
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                            placeholder="Nyayo Estate"
                                                                            label="Estate name"
                                                                            variant="filled"
                                                                            // onChange={handleChange}
                                                                            // disabled
                                                                        />
                                                                    </Box>
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={4}
                                                                    sm={8}
                                                                    md={6}
                                                                    sx={{
                                                                        mb: 1,
                                                                    }}
                                                                >
                                                                    <Box
                                                                        sx={{
                                                                            p: 1,
                                                                            m: 1,
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                            columnGap: 1,
                                                                            rowGap: 1,
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                        >
                                                                            City
                                                                        </Typography>
                                                                        <TextField
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                            placeholder="Nairobi"
                                                                            label="City name"
                                                                            variant="filled"
                                                                            // onChange={handleChange}
                                                                            // disabled
                                                                        />
                                                                    </Box>
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={4}
                                                                    sm={8}
                                                                    md={6}
                                                                    sx={{
                                                                        mb: 1,
                                                                    }}
                                                                >
                                                                    <Box
                                                                        sx={{
                                                                            p: 1,
                                                                            m: 1,
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                            columnGap: 1,
                                                                            rowGap: 1,
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                        >
                                                                            Country
                                                                        </Typography>
                                                                        <FormControl
                                                                            variant="filled"
                                                                            fullWidth
                                                                        >
                                                                            <InputLabel id="demo-simple-select-label">
                                                                                Country
                                                                            </InputLabel>
                                                                            <Select
                                                                                label="Country"
                                                                                defaultValue={"Select country"}
                                                                                sx={{
                                                                                    textAlign:
                                                                                        "left",
                                                                                }}
                                                                            >
                                                                                <MenuItem value="Afghanistan">
                                                                                    Afghanistan
                                                                                </MenuItem>
                                                                                <MenuItem value="Albania">
                                                                                    Albania
                                                                                </MenuItem>
                                                                                <MenuItem value="Algeria">
                                                                                    Algeria
                                                                                </MenuItem>
                                                                                <MenuItem value="American Samoa">
                                                                                    American
                                                                                    Samoa
                                                                                </MenuItem>
                                                                                <MenuItem value="Andorra">
                                                                                    Andorra
                                                                                </MenuItem>
                                                                                <MenuItem value="Angola">
                                                                                    Angola
                                                                                </MenuItem>
                                                                                <MenuItem value="Anguilla">
                                                                                    Anguilla
                                                                                </MenuItem>
                                                                                <MenuItem value="Antarctica">
                                                                                    Antarctica
                                                                                </MenuItem>
                                                                                <MenuItem value="Antigua and Barbuda">
                                                                                    Antigua
                                                                                    and
                                                                                    Barbuda
                                                                                </MenuItem>
                                                                                <MenuItem value="Argentina">
                                                                                    Argentina
                                                                                </MenuItem>
                                                                                <MenuItem value="Armenia">
                                                                                    Armenia
                                                                                </MenuItem>
                                                                                <MenuItem value="Aruba">
                                                                                    Aruba
                                                                                </MenuItem>
                                                                                <MenuItem value="Australia">
                                                                                    Australia
                                                                                </MenuItem>
                                                                                <MenuItem value="Austria">
                                                                                    Austria
                                                                                </MenuItem>
                                                                                <MenuItem value="Azerbaijan">
                                                                                    Azerbaijan
                                                                                </MenuItem>
                                                                                <MenuItem value="Bahamas">
                                                                                    Bahamas
                                                                                </MenuItem>
                                                                                <MenuItem value="Bahrain">
                                                                                    Bahrain
                                                                                </MenuItem>
                                                                                <MenuItem value="Bangladesh">
                                                                                    Bangladesh
                                                                                </MenuItem>
                                                                                <MenuItem value="Barbados">
                                                                                    Barbados
                                                                                </MenuItem>
                                                                                <MenuItem value="Belarus">
                                                                                    Belarus
                                                                                </MenuItem>
                                                                                <MenuItem value="Belgium">
                                                                                    Belgium
                                                                                </MenuItem>
                                                                                <MenuItem value="Belize">
                                                                                    Belize
                                                                                </MenuItem>
                                                                                <MenuItem value="Benin">
                                                                                    Benin
                                                                                </MenuItem>
                                                                                <MenuItem value="Bermuda">
                                                                                    Bermuda
                                                                                </MenuItem>
                                                                                <MenuItem value="Bhutan">
                                                                                    Bhutan
                                                                                </MenuItem>
                                                                                <MenuItem value="Bolivia">
                                                                                    Bolivia
                                                                                </MenuItem>
                                                                                <MenuItem value="Bosnia and Herzegovina">
                                                                                    Bosnia
                                                                                    and
                                                                                    Herzegovina
                                                                                </MenuItem>
                                                                                <MenuItem value="Botswana">
                                                                                    Botswana
                                                                                </MenuItem>
                                                                                <MenuItem value="Bouvet Island">
                                                                                    Bouvet
                                                                                    Island
                                                                                </MenuItem>
                                                                                <MenuItem value="Brazil">
                                                                                    Brazil
                                                                                </MenuItem>
                                                                                <MenuItem value="British Indian Ocean Territory">
                                                                                    British
                                                                                    Indian
                                                                                    Ocean
                                                                                    Territory
                                                                                </MenuItem>
                                                                                <MenuItem value="Brunei Darussalam">
                                                                                    Brunei
                                                                                    Darussalam
                                                                                </MenuItem>
                                                                                <MenuItem value="Bulgaria">
                                                                                    Bulgaria
                                                                                </MenuItem>
                                                                                <MenuItem value="Burkina Faso">
                                                                                    Burkina
                                                                                    Faso
                                                                                </MenuItem>
                                                                                <MenuItem value="Burundi">
                                                                                    Burundi
                                                                                </MenuItem>
                                                                                <MenuItem value="Cambodia">
                                                                                    Cambodia
                                                                                </MenuItem>
                                                                                <MenuItem value="Cameroon">
                                                                                    Cameroon
                                                                                </MenuItem>
                                                                                <MenuItem value="Canada">
                                                                                    Canada
                                                                                </MenuItem>
                                                                                <MenuItem value="Cape Verde">
                                                                                    Cape
                                                                                    Verde
                                                                                </MenuItem>
                                                                                <MenuItem value="Cayman Islands">
                                                                                    Cayman
                                                                                    Islands
                                                                                </MenuItem>
                                                                                <MenuItem value="Central African Republic">
                                                                                    Central
                                                                                    African
                                                                                    Republic
                                                                                </MenuItem>
                                                                                <MenuItem value="Chad">
                                                                                    Chad
                                                                                </MenuItem>
                                                                                <MenuItem value="Chile">
                                                                                    Chile
                                                                                </MenuItem>
                                                                                <MenuItem value="China">
                                                                                    China
                                                                                </MenuItem>
                                                                                <MenuItem value="Christmas Island">
                                                                                    Christmas
                                                                                    Island
                                                                                </MenuItem>
                                                                                <MenuItem value="Cocos (Keeling) Islands">
                                                                                    Cocos
                                                                                    (Keeling)
                                                                                    Islands
                                                                                </MenuItem>
                                                                                <MenuItem value="Colombia">
                                                                                    Colombia
                                                                                </MenuItem>
                                                                                <MenuItem value="Comoros">
                                                                                    Comoros
                                                                                </MenuItem>
                                                                                <MenuItem value="Congo">
                                                                                    Congo
                                                                                </MenuItem>
                                                                                <MenuItem value="Congo, The Democratic Republic of The">
                                                                                    Congo,
                                                                                    The
                                                                                    Democratic
                                                                                    Republic
                                                                                    of
                                                                                    The
                                                                                </MenuItem>
                                                                                <MenuItem value="Cook Islands">
                                                                                    Cook
                                                                                    Islands
                                                                                </MenuItem>
                                                                                <MenuItem value="Costa Rica">
                                                                                    Costa
                                                                                    Rica
                                                                                </MenuItem>
                                                                                <MenuItem value="Cote D'ivoire">
                                                                                    Cote
                                                                                    D'ivoire
                                                                                </MenuItem>
                                                                                <MenuItem value="Croatia">
                                                                                    Croatia
                                                                                </MenuItem>
                                                                                <MenuItem value="Cuba">
                                                                                    Cuba
                                                                                </MenuItem>
                                                                                <MenuItem value="Cyprus">
                                                                                    Cyprus
                                                                                </MenuItem>
                                                                                <MenuItem value="Czech Republic">
                                                                                    Czech
                                                                                    Republic
                                                                                </MenuItem>
                                                                                <MenuItem value="Denmark">
                                                                                    Denmark
                                                                                </MenuItem>
                                                                                <MenuItem value="Djibouti">
                                                                                    Djibouti
                                                                                </MenuItem>
                                                                                <MenuItem value="Dominica">
                                                                                    Dominica
                                                                                </MenuItem>
                                                                                <MenuItem value="Dominican Republic">
                                                                                    Dominican
                                                                                    Republic
                                                                                </MenuItem>
                                                                                <MenuItem value="Ecuador">
                                                                                    Ecuador
                                                                                </MenuItem>
                                                                                <MenuItem value="Egypt">
                                                                                    Egypt
                                                                                </MenuItem>
                                                                                <MenuItem value="El Salvador">
                                                                                    El
                                                                                    Salvador
                                                                                </MenuItem>
                                                                                <MenuItem value="Equatorial Guinea">
                                                                                    Equatorial
                                                                                    Guinea
                                                                                </MenuItem>
                                                                                <MenuItem value="Eritrea">
                                                                                    Eritrea
                                                                                </MenuItem>
                                                                                <MenuItem value="Estonia">
                                                                                    Estonia
                                                                                </MenuItem>
                                                                                <MenuItem value="Ethiopia">
                                                                                    Ethiopia
                                                                                </MenuItem>
                                                                                <MenuItem value="Falkland Islands (Malvinas)">
                                                                                    Falkland
                                                                                    Islands
                                                                                    (Malvinas)
                                                                                </MenuItem>
                                                                                <MenuItem value="Faroe Islands">
                                                                                    Faroe
                                                                                    Islands
                                                                                </MenuItem>
                                                                                <MenuItem value="Fiji">
                                                                                    Fiji
                                                                                </MenuItem>
                                                                                <MenuItem value="Finland">
                                                                                    Finland
                                                                                </MenuItem>
                                                                                <MenuItem value="France">
                                                                                    France
                                                                                </MenuItem>
                                                                                <MenuItem value="French Guiana">
                                                                                    French
                                                                                    Guiana
                                                                                </MenuItem>
                                                                                <MenuItem value="French Polynesia">
                                                                                    French
                                                                                    Polynesia
                                                                                </MenuItem>
                                                                                <MenuItem value="French Southern Territories">
                                                                                    French
                                                                                    Southern
                                                                                    Territories
                                                                                </MenuItem>
                                                                                <MenuItem value="Gabon">
                                                                                    Gabon
                                                                                </MenuItem>
                                                                                <MenuItem value="Gambia">
                                                                                    Gambia
                                                                                </MenuItem>
                                                                                <MenuItem value="Georgia">
                                                                                    Georgia
                                                                                </MenuItem>
                                                                                <MenuItem value="Germany">
                                                                                    Germany
                                                                                </MenuItem>
                                                                                <MenuItem value="Ghana">
                                                                                    Ghana
                                                                                </MenuItem>
                                                                                <MenuItem value="Gibraltar">
                                                                                    Gibraltar
                                                                                </MenuItem>
                                                                                <MenuItem value="Greece">
                                                                                    Greece
                                                                                </MenuItem>
                                                                                <MenuItem value="Greenland">
                                                                                    Greenland
                                                                                </MenuItem>
                                                                                <MenuItem value="Grenada">
                                                                                    Grenada
                                                                                </MenuItem>
                                                                                <MenuItem value="Guadeloupe">
                                                                                    Guadeloupe
                                                                                </MenuItem>
                                                                                <MenuItem value="Guam">
                                                                                    Guam
                                                                                </MenuItem>
                                                                                <MenuItem value="Guatemala">
                                                                                    Guatemala
                                                                                </MenuItem>
                                                                                <MenuItem value="Guinea">
                                                                                    Guinea
                                                                                </MenuItem>
                                                                                <MenuItem value="Guinea-bissau">
                                                                                    Guinea-bissau
                                                                                </MenuItem>
                                                                                <MenuItem value="Guyana">
                                                                                    Guyana
                                                                                </MenuItem>
                                                                                <MenuItem value="Haiti">
                                                                                    Haiti
                                                                                </MenuItem>
                                                                                <MenuItem value="Heard Island and Mcdonald Islands">
                                                                                    Heard
                                                                                    Island
                                                                                    and
                                                                                    Mcdonald
                                                                                    Islands
                                                                                </MenuItem>
                                                                                <MenuItem value="Holy See (Vatican City State)">
                                                                                    Holy
                                                                                    See
                                                                                    (Vatican
                                                                                    City
                                                                                    State)
                                                                                </MenuItem>
                                                                                <MenuItem value="Honduras">
                                                                                    Honduras
                                                                                </MenuItem>
                                                                                <MenuItem value="Hong Kong">
                                                                                    Hong
                                                                                    Kong
                                                                                </MenuItem>
                                                                                <MenuItem value="Hungary">
                                                                                    Hungary
                                                                                </MenuItem>
                                                                                <MenuItem value="Iceland">
                                                                                    Iceland
                                                                                </MenuItem>
                                                                                <MenuItem value="India">
                                                                                    India
                                                                                </MenuItem>
                                                                                <MenuItem value="Indonesia">
                                                                                    Indonesia
                                                                                </MenuItem>
                                                                                <MenuItem value="Iran, Islamic Republic of">
                                                                                    Iran,
                                                                                    Islamic
                                                                                    Republic
                                                                                    of
                                                                                </MenuItem>
                                                                                <MenuItem value="Iraq">
                                                                                    Iraq
                                                                                </MenuItem>
                                                                                <MenuItem value="Ireland">
                                                                                    Ireland
                                                                                </MenuItem>
                                                                                <MenuItem value="Israel">
                                                                                    Israel
                                                                                </MenuItem>
                                                                                <MenuItem value="Italy">
                                                                                    Italy
                                                                                </MenuItem>
                                                                                <MenuItem value="Jamaica">
                                                                                    Jamaica
                                                                                </MenuItem>
                                                                                <MenuItem value="Japan">
                                                                                    Japan
                                                                                </MenuItem>
                                                                                <MenuItem value="Jordan">
                                                                                    Jordan
                                                                                </MenuItem>
                                                                                <MenuItem value="Kazakhstan">
                                                                                    Kazakhstan
                                                                                </MenuItem>
                                                                                <MenuItem value="Kenya">
                                                                                    Kenya
                                                                                </MenuItem>
                                                                                <MenuItem value="Kiribati">
                                                                                    Kiribati
                                                                                </MenuItem>
                                                                                <MenuItem value="Korea, Democratic People's Republic of">
                                                                                    Korea,
                                                                                    Democratic
                                                                                    People's
                                                                                    Republic
                                                                                    of
                                                                                </MenuItem>
                                                                                <MenuItem value="Korea, Republic of">
                                                                                    Korea,
                                                                                    Republic
                                                                                    of
                                                                                </MenuItem>
                                                                                <MenuItem value="Kuwait">
                                                                                    Kuwait
                                                                                </MenuItem>
                                                                                <MenuItem value="Kyrgyzstan">
                                                                                    Kyrgyzstan
                                                                                </MenuItem>
                                                                                <MenuItem value="Lao People's Democratic Republic">
                                                                                    Lao
                                                                                    People's
                                                                                    Democratic
                                                                                    Republic
                                                                                </MenuItem>
                                                                                <MenuItem value="Latvia">
                                                                                    Latvia
                                                                                </MenuItem>
                                                                                <MenuItem value="Lebanon">
                                                                                    Lebanon
                                                                                </MenuItem>
                                                                                <MenuItem value="Lesotho">
                                                                                    Lesotho
                                                                                </MenuItem>
                                                                                <MenuItem value="Liberia">
                                                                                    Liberia
                                                                                </MenuItem>
                                                                                <MenuItem value="Libyan Arab Jamahiriya">
                                                                                    Libyan
                                                                                    Arab
                                                                                    Jamahiriya
                                                                                </MenuItem>
                                                                                <MenuItem value="Liechtenstein">
                                                                                    Liechtenstein
                                                                                </MenuItem>
                                                                                <MenuItem value="Lithuania">
                                                                                    Lithuania
                                                                                </MenuItem>
                                                                                <MenuItem value="Luxembourg">
                                                                                    Luxembourg
                                                                                </MenuItem>
                                                                                <MenuItem value="Macao">
                                                                                    Macao
                                                                                </MenuItem>
                                                                                <MenuItem value="North Macedonia">
                                                                                    North
                                                                                    Macedonia
                                                                                </MenuItem>
                                                                                <MenuItem value="Madagascar">
                                                                                    Madagascar
                                                                                </MenuItem>
                                                                                <MenuItem value="Malawi">
                                                                                    Malawi
                                                                                </MenuItem>
                                                                                <MenuItem value="Malaysia">
                                                                                    Malaysia
                                                                                </MenuItem>
                                                                                <MenuItem value="Maldives">
                                                                                    Maldives
                                                                                </MenuItem>
                                                                                <MenuItem value="Mali">
                                                                                    Mali
                                                                                </MenuItem>
                                                                                <MenuItem value="Malta">
                                                                                    Malta
                                                                                </MenuItem>
                                                                                <MenuItem value="Marshall Islands">
                                                                                    Marshall
                                                                                    Islands
                                                                                </MenuItem>
                                                                                <MenuItem value="Martinique">
                                                                                    Martinique
                                                                                </MenuItem>
                                                                                <MenuItem value="Mauritania">
                                                                                    Mauritania
                                                                                </MenuItem>
                                                                                <MenuItem value="Mauritius">
                                                                                    Mauritius
                                                                                </MenuItem>
                                                                                <MenuItem value="Mayotte">
                                                                                    Mayotte
                                                                                </MenuItem>
                                                                                <MenuItem value="Mexico">
                                                                                    Mexico
                                                                                </MenuItem>
                                                                                <MenuItem value="Micronesia, Federated States of">
                                                                                    Micronesia,
                                                                                    Federated
                                                                                    States
                                                                                    of
                                                                                </MenuItem>
                                                                                <MenuItem value="Moldova, Republic of">
                                                                                    Moldova,
                                                                                    Republic
                                                                                    of
                                                                                </MenuItem>
                                                                                <MenuItem value="Monaco">
                                                                                    Monaco
                                                                                </MenuItem>
                                                                                <MenuItem value="Mongolia">
                                                                                    Mongolia
                                                                                </MenuItem>
                                                                                <MenuItem value="Montserrat">
                                                                                    Montserrat
                                                                                </MenuItem>
                                                                                <MenuItem value="Morocco">
                                                                                    Morocco
                                                                                </MenuItem>
                                                                                <MenuItem value="Mozambique">
                                                                                    Mozambique
                                                                                </MenuItem>
                                                                                <MenuItem value="Myanmar">
                                                                                    Myanmar
                                                                                </MenuItem>
                                                                                <MenuItem value="Namibia">
                                                                                    Namibia
                                                                                </MenuItem>
                                                                                <MenuItem value="Nauru">
                                                                                    Nauru
                                                                                </MenuItem>
                                                                                <MenuItem value="Nepal">
                                                                                    Nepal
                                                                                </MenuItem>
                                                                                <MenuItem value="Netherlands">
                                                                                    Netherlands
                                                                                </MenuItem>
                                                                                <MenuItem value="Netherlands Antilles">
                                                                                    Netherlands
                                                                                    Antilles
                                                                                </MenuItem>
                                                                                <MenuItem value="New Caledonia">
                                                                                    New
                                                                                    Caledonia
                                                                                </MenuItem>
                                                                                <MenuItem value="New Zealand">
                                                                                    New
                                                                                    Zealand
                                                                                </MenuItem>
                                                                                <MenuItem value="Nicaragua">
                                                                                    Nicaragua
                                                                                </MenuItem>
                                                                                <MenuItem value="Niger">
                                                                                    Niger
                                                                                </MenuItem>
                                                                                <MenuItem value="Nigeria">
                                                                                    Nigeria
                                                                                </MenuItem>
                                                                                <MenuItem value="Niue">
                                                                                    Niue
                                                                                </MenuItem>
                                                                                <MenuItem value="Norfolk Island">
                                                                                    Norfolk
                                                                                    Island
                                                                                </MenuItem>
                                                                                <MenuItem value="Northern Mariana Islands">
                                                                                    Northern
                                                                                    Mariana
                                                                                    Islands
                                                                                </MenuItem>
                                                                                <MenuItem value="Norway">
                                                                                    Norway
                                                                                </MenuItem>
                                                                                <MenuItem value="Oman">
                                                                                    Oman
                                                                                </MenuItem>
                                                                                <MenuItem value="Pakistan">
                                                                                    Pakistan
                                                                                </MenuItem>
                                                                                <MenuItem value="Palau">
                                                                                    Palau
                                                                                </MenuItem>
                                                                                <MenuItem value="Palestinian Territory, Occupied">
                                                                                    Palestinian
                                                                                    Territory,
                                                                                    Occupied
                                                                                </MenuItem>
                                                                                <MenuItem value="Panama">
                                                                                    Panama
                                                                                </MenuItem>
                                                                                <MenuItem value="Papua New Guinea">
                                                                                    Papua
                                                                                    New
                                                                                    Guinea
                                                                                </MenuItem>
                                                                                <MenuItem value="Paraguay">
                                                                                    Paraguay
                                                                                </MenuItem>
                                                                                <MenuItem value="Peru">
                                                                                    Peru
                                                                                </MenuItem>
                                                                                <MenuItem value="Philippines">
                                                                                    Philippines
                                                                                </MenuItem>
                                                                                <MenuItem value="Pitcairn">
                                                                                    Pitcairn
                                                                                </MenuItem>
                                                                                <MenuItem value="Poland">
                                                                                    Poland
                                                                                </MenuItem>
                                                                                <MenuItem value="Portugal">
                                                                                    Portugal
                                                                                </MenuItem>
                                                                                <MenuItem value="Puerto Rico">
                                                                                    Puerto
                                                                                    Rico
                                                                                </MenuItem>
                                                                                <MenuItem value="Qatar">
                                                                                    Qatar
                                                                                </MenuItem>
                                                                                <MenuItem value="Reunion">
                                                                                    Reunion
                                                                                </MenuItem>
                                                                                <MenuItem value="Romania">
                                                                                    Romania
                                                                                </MenuItem>
                                                                                <MenuItem value="Russian Federation">
                                                                                    Russian
                                                                                    Federation
                                                                                </MenuItem>
                                                                                <MenuItem value="Rwanda">
                                                                                    Rwanda
                                                                                </MenuItem>
                                                                                <MenuItem value="Saint Helena">
                                                                                    Saint
                                                                                    Helena
                                                                                </MenuItem>
                                                                                <MenuItem value="Saint Kitts and Nevis">
                                                                                    Saint
                                                                                    Kitts
                                                                                    and
                                                                                    Nevis
                                                                                </MenuItem>
                                                                                <MenuItem value="Saint Lucia">
                                                                                    Saint
                                                                                    Lucia
                                                                                </MenuItem>
                                                                                <MenuItem value="Saint Pierre and Miquelon">
                                                                                    Saint
                                                                                    Pierre
                                                                                    and
                                                                                    Miquelon
                                                                                </MenuItem>
                                                                                <MenuItem value="Saint Vincent and The Grenadines">
                                                                                    Saint
                                                                                    Vincent
                                                                                    and
                                                                                    The
                                                                                    Grenadines
                                                                                </MenuItem>
                                                                                <MenuItem value="Samoa">
                                                                                    Samoa
                                                                                </MenuItem>
                                                                                <MenuItem value="San Marino">
                                                                                    San
                                                                                    Marino
                                                                                </MenuItem>
                                                                                <MenuItem value="Sao Tome and Principe">
                                                                                    Sao
                                                                                    Tome
                                                                                    and
                                                                                    Principe
                                                                                </MenuItem>
                                                                                <MenuItem value="Saudi Arabia">
                                                                                    Saudi
                                                                                    Arabia
                                                                                </MenuItem>
                                                                                <MenuItem value="Senegal">
                                                                                    Senegal
                                                                                </MenuItem>
                                                                                <MenuItem value="Serbia and Montenegro">
                                                                                    Serbia
                                                                                    and
                                                                                    Montenegro
                                                                                </MenuItem>
                                                                                <MenuItem value="Seychelles">
                                                                                    Seychelles
                                                                                </MenuItem>
                                                                                <MenuItem value="Sierra Leone">
                                                                                    Sierra
                                                                                    Leone
                                                                                </MenuItem>
                                                                                <MenuItem value="Singapore">
                                                                                    Singapore
                                                                                </MenuItem>
                                                                                <MenuItem value="Slovakia">
                                                                                    Slovakia
                                                                                </MenuItem>
                                                                                <MenuItem value="Slovenia">
                                                                                    Slovenia
                                                                                </MenuItem>
                                                                                <MenuItem value="Solomon Islands">
                                                                                    Solomon
                                                                                    Islands
                                                                                </MenuItem>
                                                                                <MenuItem value="Somalia">
                                                                                    Somalia
                                                                                </MenuItem>
                                                                                <MenuItem value="South Africa">
                                                                                    South
                                                                                    Africa
                                                                                </MenuItem>
                                                                                <MenuItem value="South Georgia and The South Sandwich Islands">
                                                                                    South
                                                                                    Georgia
                                                                                    and
                                                                                    The
                                                                                    South
                                                                                    Sandwich
                                                                                    Islands
                                                                                </MenuItem>
                                                                                <MenuItem value="Spain">
                                                                                    Spain
                                                                                </MenuItem>
                                                                                <MenuItem value="Sri Lanka">
                                                                                    Sri
                                                                                    Lanka
                                                                                </MenuItem>
                                                                                <MenuItem value="Sudan">
                                                                                    Sudan
                                                                                </MenuItem>
                                                                                <MenuItem value="Suriname">
                                                                                    Suriname
                                                                                </MenuItem>
                                                                                <MenuItem value="Svalbard and Jan Mayen">
                                                                                    Svalbard
                                                                                    and
                                                                                    Jan
                                                                                    Mayen
                                                                                </MenuItem>
                                                                                <MenuItem value="Swaziland">
                                                                                    Swaziland
                                                                                </MenuItem>
                                                                                <MenuItem value="Sweden">
                                                                                    Sweden
                                                                                </MenuItem>
                                                                                <MenuItem value="Switzerland">
                                                                                    Switzerland
                                                                                </MenuItem>
                                                                                <MenuItem value="Syrian Arab Republic">
                                                                                    Syrian
                                                                                    Arab
                                                                                    Republic
                                                                                </MenuItem>
                                                                                <MenuItem value="Taiwan, Province of China">
                                                                                    Taiwan,
                                                                                    Province
                                                                                    of
                                                                                    China
                                                                                </MenuItem>
                                                                                <MenuItem value="Tajikistan">
                                                                                    Tajikistan
                                                                                </MenuItem>
                                                                                <MenuItem value="Tanzania, United Republic of">
                                                                                    Tanzania,
                                                                                    United
                                                                                    Republic
                                                                                    of
                                                                                </MenuItem>
                                                                                <MenuItem value="Thailand">
                                                                                    Thailand
                                                                                </MenuItem>
                                                                                <MenuItem value="Timor-leste">
                                                                                    Timor-leste
                                                                                </MenuItem>
                                                                                <MenuItem value="Togo">
                                                                                    Togo
                                                                                </MenuItem>
                                                                                <MenuItem value="Tokelau">
                                                                                    Tokelau
                                                                                </MenuItem>
                                                                                <MenuItem value="Tonga">
                                                                                    Tonga
                                                                                </MenuItem>
                                                                                <MenuItem value="Trinidad and Tobago">
                                                                                    Trinidad
                                                                                    and
                                                                                    Tobago
                                                                                </MenuItem>
                                                                                <MenuItem value="Tunisia">
                                                                                    Tunisia
                                                                                </MenuItem>
                                                                                <MenuItem value="Turkey">
                                                                                    Turkey
                                                                                </MenuItem>
                                                                                <MenuItem value="Turkmenistan">
                                                                                    Turkmenistan
                                                                                </MenuItem>
                                                                                <MenuItem value="Turks and Caicos Islands">
                                                                                    Turks
                                                                                    and
                                                                                    Caicos
                                                                                    Islands
                                                                                </MenuItem>
                                                                                <MenuItem value="Tuvalu">
                                                                                    Tuvalu
                                                                                </MenuItem>
                                                                                <MenuItem value="Uganda">
                                                                                    Uganda
                                                                                </MenuItem>
                                                                                <MenuItem value="Ukraine">
                                                                                    Ukraine
                                                                                </MenuItem>
                                                                                <MenuItem value="United Arab Emirates">
                                                                                    United
                                                                                    Arab
                                                                                    Emirates
                                                                                </MenuItem>
                                                                                <MenuItem value="United Kingdom">
                                                                                    United
                                                                                    Kingdom
                                                                                </MenuItem>
                                                                                <MenuItem value="United States">
                                                                                    United
                                                                                    States
                                                                                </MenuItem>
                                                                                <MenuItem value="United States Minor Outlying Islands">
                                                                                    United
                                                                                    States
                                                                                    Minor
                                                                                    Outlying
                                                                                    Islands
                                                                                </MenuItem>
                                                                                <MenuItem value="Uruguay">
                                                                                    Uruguay
                                                                                </MenuItem>
                                                                                <MenuItem value="Uzbekistan">
                                                                                    Uzbekistan
                                                                                </MenuItem>
                                                                                <MenuItem value="Vanuatu">
                                                                                    Vanuatu
                                                                                </MenuItem>
                                                                                <MenuItem value="Venezuela">
                                                                                    Venezuela
                                                                                </MenuItem>
                                                                                <MenuItem value="Viet Nam">
                                                                                    Viet
                                                                                    Nam
                                                                                </MenuItem>
                                                                                <MenuItem value="Virgin Islands, British">
                                                                                    Virgin
                                                                                    Islands,
                                                                                    British
                                                                                </MenuItem>
                                                                                <MenuItem value="Virgin Islands, U.S.">
                                                                                    Virgin
                                                                                    Islands,
                                                                                    U.S.
                                                                                </MenuItem>
                                                                                <MenuItem value="Wallis and Futuna">
                                                                                    Wallis
                                                                                    and
                                                                                    Futuna
                                                                                </MenuItem>
                                                                                <MenuItem value="Western Sahara">
                                                                                    Western
                                                                                    Sahara
                                                                                </MenuItem>
                                                                                <MenuItem value="Yemen">
                                                                                    Yemen
                                                                                </MenuItem>
                                                                                <MenuItem value="Zambia">
                                                                                    Zambia
                                                                                </MenuItem>
                                                                                <MenuItem value="Zimbabwe">
                                                                                    Zimbabwe
                                                                                </MenuItem>
                                                                            </Select>
                                                                        </FormControl>
                                                                    </Box>
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    xs={4}
                                                                    sm={8}
                                                                    md={6}
                                                                    sx={{
                                                                        mb: 1,
                                                                    }}
                                                                >
                                                                    <Box
                                                                        sx={{
                                                                            p: 1,
                                                                            m: 1,
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                            columnGap: 1,
                                                                            rowGap: 1,
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                        >
                                                                            Address
                                                                            details
                                                                        </Typography>
                                                                        <TextField
                                                                            sx={{
                                                                                flexGrow: 1,
                                                                            }}
                                                                            placeholder="Nairobi"
                                                                            label="Address  "
                                                                            variant="filled"
                                                                            // onChange={handleChange}
                                                                            // disabled
                                                                        />
                                                                    </Box>
                                                                </Grid>
                                                            </Grid>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Box>

                                    <Box
                                        sx={{
                                            p: 1,
                                            m: 1,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            columnGap: 3,
                                            rowGap: 1,
                                        }}
                                    >
                                        <Link
                                            to={`/customer/Payment`}
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit",
                                            }}
                                        >
                                            <Button
                                                fullWidth
                                                size="large"
                                                variant="contained"
                                                color="secondary"
                                                bgcolor="secondary"
                                            >
                                                Proceed with payment
                                            </Button>
                                        </Link>
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </>
            )}
        </>
    );
};

export default Checkout;
