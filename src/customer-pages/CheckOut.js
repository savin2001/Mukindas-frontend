import React from "react";
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
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Link } from "react-router-dom";
import CustomerSearchBar from "../components/CustomerSearchBar";

const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(img, prod, desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { img, prod, desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow(
        "https://i.etsystatic.com/17434867/r/il/d4c634/2490833996/il_fullxfull.2490833996_g1w9.jpg",
        "Blue Red Maasai Shuka",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In est consequuntur minus.",
        1,
        1.15
    ),
    createRow(
        "https://i.etsystatic.com/17434867/r/il/1d4e7f/1479707788/il_fullxfull.1479707788_bry2.jpg",
        "Red okre Maasai Earrings",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In est consequuntur minus.",

        1,
        45.99
    ),
    createRow(
        "https://i.etsystatic.com/17434867/r/il/ad0808/1532319595/il_fullxfull.1532319595_iqvv.jpg",
        "Dashiki Snoodie",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In est consequuntur minus.",

        2,
        17.99
    ),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const Checkout = () => {
    const [open, setOpen] = React.useState(true);

    const handleOption1Click = () => {
        setOpen(!open);
    };
    const handleOption2Click = () => {
        setOpen(!open);
    };
    return (
        <>
            <CustomerSearchBar/>
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 100 }}
            ></Container>
            <Container sx={{ flexGrow: 1, my: 3 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Grid item xs={4} sm={8} md={12} sx={{ mb: 3 }}>
                        <Typography variant="h5" sx={{ textAlign: "left" }}>
                            Check-out
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Grid item xs={4} sm={8} md={4}>
                        <Box sx={{ width: "100%" }}>
                            <TableContainer component={Paper}>
                                <Table aria-label="spanning table">
                                    <TableHead>
                                        <TableRow
                                            sx={{
                                                borderColor: "secondary.main",
                                            }}
                                        >
                                            <TableCell>
                                                <Typography
                                                    variant="body1"
                                                    color="secondary"
                                                    width="100%"
                                                    sx={{
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    Your order
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.prod}>
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
                                                                        row.img
                                                                    }
                                                                    alt={
                                                                        row.prod
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
                                                                    {row.prod}
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>
                                                <TableCell align="right">
                                                    {ccyFormat(row.price)}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="body1">
                                                    Subtotal
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Typography variant="body1">
                                                    {ccyFormat(invoiceSubtotal)}
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
                                                    {ccyFormat(invoiceTaxes)}
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
                                                    {ccyFormat(invoiceTotal)}
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
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        Address details
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
                                                <TableCell>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            mb: 1,
                                                        }}
                                                    >
                                                        Customer's name
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            mb: 1,
                                                        }}
                                                    >
                                                        House number, Building
                                                        name, Estate name,
                                                        Nairobi, Kenya
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            mb: 1,
                                                        }}
                                                    >
                                                        P.O Box 1234-5678
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            mb: 1,
                                                        }}
                                                    >
                                                        +254 7XX XXX XXX
                                                    </Typography>
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
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        Payment details
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
                                                                        pl: 10,
                                                                    }}
                                                                >
                                                                    <ListItemButton
                                                                        sx={{
                                                                            pl: 10,
                                                                        }}
                                                                    >
                                                                        <FormControlLabel
                                                                            value="Pickup"
                                                                            control={
                                                                                <Radio color="secondary" />
                                                                            }
                                                                            label="Pickup station"
                                                                        />
                                                                    </ListItemButton>
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
                                                        <ListItemButton
                                                            onClick={
                                                                handleOption2Click
                                                            }
                                                        >
                                                            <ListItemIcon>
                                                                <LocalShippingOutlinedIcon color="secondary" />
                                                            </ListItemIcon>
                                                            <ListItemText primary="Shipment details" />
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
                                                                <ListItemButton
                                                                    sx={{
                                                                        pl: 10,
                                                                    }}
                                                                >
                                                                    <ListItemIcon>
                                                                        {/* <MobileScreenShareIcon /> */}
                                                                    </ListItemIcon>
                                                                    <ListItemText primary="Item 1" />
                                                                </ListItemButton>
                                                                <ListItemButton
                                                                    sx={{
                                                                        pl: 10,
                                                                    }}
                                                                >
                                                                    <ListItemIcon>
                                                                        {/* <CreditCardIcon /> */}
                                                                    </ListItemIcon>
                                                                    <ListItemText primary="Item 2" />
                                                                </ListItemButton>
                                                                <ListItemButton
                                                                    sx={{
                                                                        pl: 10,
                                                                    }}
                                                                >
                                                                    <ListItemIcon>
                                                                        {/* <CreditCardIcon /> */}
                                                                    </ListItemIcon>
                                                                    <ListItemText primary="Item 3" />
                                                                </ListItemButton>
                                                                <ListItemButton
                                                                    sx={{
                                                                        pl: 10,
                                                                    }}
                                                                >
                                                                    <ListItemIcon>
                                                                        {/* <CreditCardIcon /> */}
                                                                    </ListItemIcon>
                                                                    <ListItemText primary="Item 4" />
                                                                </ListItemButton>
                                                            </List>
                                                        </Collapse>
                                                    </List>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Box
                                    sx={{
                                        p: 1,
                                        m: 1,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "flex-end",
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
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Checkout;
