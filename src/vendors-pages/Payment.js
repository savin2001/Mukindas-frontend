import React from "react";
import {
    Container,
    Grid,
    Typography,
    Card,
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LanguageIcon from "@mui/icons-material/Language";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import VendorSearchBar from "../components/VendorSearchBar";
import VendorMenu from "../components/VendorMenu";

const Payment = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <VendorSearchBar />
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
                        <VendorMenu />
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
                            <Box
                                sx={{
                                    textAlign: "left",
                                    width: "95%",
                                    height: "10%",
                                    backgroundColor: "primary.contrastText",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    p: 2,
                                    mb: 2,
                                    borderRadius: 2,
                                }}
                            >
                                <Typography
                                    sx={{ color: "primary.main" }}
                                    variant="h6"
                                >
                                    Payment
                                </Typography>
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
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            mb: 1,
                                                        }}
                                                    >
                                                        How do you want to pay
                                                        for your order?
                                                    </Typography>
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
                                                                handleClick
                                                            }
                                                        >
                                                            <ListItemIcon>
                                                                <AccessTimeIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary="Pay now" />
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
                                                                        <MobileScreenShareIcon />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary="M-Pesa" />
                                                                </ListItemButton>
                                                                <ListItemButton
                                                                    sx={{
                                                                        pl: 10,
                                                                    }}
                                                                >
                                                                    <ListItemIcon>
                                                                        <CreditCardIcon />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary="Visa" />
                                                                </ListItemButton>
                                                                <ListItemButton
                                                                    sx={{
                                                                        pl: 10,
                                                                    }}
                                                                >
                                                                    <ListItemIcon>
                                                                        <CreditScoreIcon />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary="Mastercard" />
                                                                </ListItemButton>
                                                                <ListItemButton
                                                                    sx={{
                                                                        pl: 10,
                                                                    }}
                                                                >
                                                                    <ListItemIcon>
                                                                        <LanguageIcon />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary="Paypal" />
                                                                </ListItemButton>
                                                            </List>
                                                        </Collapse>

                                                        <ListItemButton>
                                                            <ListItemIcon>
                                                                <AccountBalanceWalletIcon />
                                                            </ListItemIcon>
                                                            <ListItemText primary="Cash on delivery" />
                                                        </ListItemButton>
                                                    </List>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                            <Grid
                                container
                                spacing={{ xs: 1, md: 1 }}
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
                                    sx={{ mb: 1 }}
                                ></Grid>
                                <Grid item xs={4} sm={8} md={6} sx={{ mb: 1 }}>
                                    <Box
                                        sx={{
                                            p: 1,
                                            m: 1,
                                            display: "flex",
                                            alignItems: "center",
                                            columnGap: 3,
                                            rowGap: 1,
                                        }}
                                    >
                                        <Button
                                            fullWidth
                                            size="large"
                                            variant="contained"
                                            color="secondary"
                                            bgcolor="secondary"
                                        >
                                            Complete transaction
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Payment;
