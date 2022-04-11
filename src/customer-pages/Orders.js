import React from "react";
import {
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    // List,
    // ListItemButton,
    // ListItemIcon,
    // ListItemText,
    // Collapse,
} from "@mui/material";
import CustomerSearchBar from "../components/CustomerSearchBar";
import CustomerMenu from "../components/CustomerMenu";
import { Link } from "react-router-dom";

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
function createRow(img, prod, desc) {
    return { img, prod, desc };
}
const Orders = () => {
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
                    <Grid item xs={4} sm={8} md={9}>
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
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Grid item xs={3} sm={6} md={5}>
                                    <Typography
                                        variant="h5"
                                        sx={{ textAlign: "left", mb: 3 }}
                                    >
                                        Orders
                                    </Typography>
                                </Grid>
                            </Grid>
                            <TableContainer component={Paper}>
                                <Table
                                    aria-label="spanning table"
                                    sx={{ width: "100%" }}
                                >
                                    <TableHead>
                                        <TableRow
                                            sx={{
                                                backgroundColor:
                                                    "secondary.main",
                                            }}
                                        >
                                            <TableCell>
                                                <Typography
                                                    variant="h6"
                                                    color="white"
                                                    sx={{
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    Description
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography
                                                    variant="h6"
                                                    color="white"
                                                    sx={{
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    Order no.
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
                                                            <Card
                                                                sx={{
                                                                    maxWidth: 100,
                                                                }}
                                                            >
                                                                <CardMedia
                                                                    component="img"
                                                                    image={
                                                                        row.img
                                                                    }
                                                                    alt={
                                                                        row.desc
                                                                    }
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
                                                                <Typography
                                                                    variant="body2"
                                                                    sx={{
                                                                        color: "primary.light",
                                                                        display:
                                                                            {
                                                                                xs: "none",
                                                                                sm: "none",
                                                                                md: "block",
                                                                            },
                                                                    }}
                                                                >
                                                                    {row.desc}
                                                                </Typography>
                                                                <Box
                                                                    sx={{
                                                                        mt: 2,
                                                                    }}
                                                                >
                                                                    <Link
                                                                        to={`/customer/Order`}
                                                                        style={{
                                                                            textDecoration:
                                                                                "none",
                                                                            color: "inherit",
                                                                        }}
                                                                    >
                                                                        <Button
                                                                            variant="text"
                                                                            size="large"
                                                                        >
                                                                            <Typography
                                                                                color="secondary"
                                                                                variant="caption"
                                                                            >
                                                                                Check on order
                                                                            </Typography>
                                                                        </Button>
                                                                    </Link>
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>
                                                <TableCell>
                                                    {Math.floor(Math.random() * 10000)}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Orders;
