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
} from "@mui/material";
import { Link } from "react-router-dom";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";

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

const Cart = () => {
    return (
        <>
            <PrimarySearchAppBar />
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 100 }}
            ></Container>
            <Container sx={{ flexGrow: 1, my: 3 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 8 }}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Grid item xs={3} sm={6} md={5}>
                        <Typography variant="h5" sx={{ textAlign: "left" }}>
                            Cart(3 items)
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={2} md={3}>
                        <Link
                            to={`/customer/checkout`}
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            <Button
                                size="large"
                                variant="outlined"
                                color="secondary"
                                borderColor="secondary"
                            >
                                checkout
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{ flexGrow: 1, my: 3 }}>
                <TableContainer component={Paper}>
                    <Table aria-label="spanning table">
                        <TableHead>
                            <TableRow
                                sx={{ backgroundColor: "secondary.main" }}
                            >
                                <TableCell>
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        sx={{ textAlign: "left" }}
                                    >
                                        Description
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6" color="white">
                                        Quantity
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6" color="white">
                                        Unit Price
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6" color="white">
                                        Sum
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.desc}>
                                    <TableCell>
                                        <Grid
                                            container
                                            columns={{ xs: 4, sm: 8, md: 15 }}
                                        >
                                            <Grid
                                                item
                                                sx={{
                                                    display: {
                                                        xs: "none",
                                                        sm: "none",
                                                        md: "block",
                                                    },
                                                }}
                                                md={3}
                                            >
                                                <Card sx={{ maxWidth: 100 }}>
                                                    <CardMedia
                                                        component="img"
                                                        image={row.img}
                                                        alt={row.desc}
                                                    />
                                                </Card>
                                            </Grid>
                                            <Grid item xs={4} sm={8} md={12}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                    }}
                                                >
                                                    <Typography
                                                        variant="body1"
                                                        sx={{ mb: 1 }}
                                                    >
                                                        {row.prod}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: "primary.light",
                                                            display: {
                                                                xs: "none",
                                                                sm: "none",
                                                                md: "block",
                                                            },
                                                        }}
                                                    >
                                                        {row.desc}
                                                    </Typography>
                                                    <Box>
                                                        <Button
                                                            variant="text"
                                                            size="small"
                                                        >
                                                            <Typography
                                                                color="secondary"
                                                                variant="caption"
                                                            >
                                                                Move to saved
                                                            </Typography>
                                                        </Button>
                                                        <Button
                                                            variant="text"
                                                            size="small"
                                                            color="secondary"
                                                        >
                                                            <Typography
                                                                color="secondary"
                                                                variant="caption"
                                                            >
                                                                Remove
                                                            </Typography>
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.qty}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.unit}
                                    </TableCell>
                                    <TableCell align="right">
                                        {ccyFormat(row.price)}
                                    </TableCell>
                                </TableRow>
                            ))}

                            <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>
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
                                    <Typography variant="body1">Tax</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="body1">
                                        {`${(TAX_RATE * 100).toFixed(0)} %`}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="body1">
                                        {ccyFormat(invoiceTaxes)}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>
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
            </Container>
        </>
    );
};

export default Cart;
