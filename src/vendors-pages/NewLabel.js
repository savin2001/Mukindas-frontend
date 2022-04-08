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
    TextField,
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material";
import VendorSearchBar from "../components/VendorSearchBar";
import VendorMenu from "../components/VendorMenu";
import { Link } from "react-router-dom";

const NewLabel = () => {
    const [alignment, setAlignment] = React.useState("web");

    const handlePackageChange = (event, newAlignment) => {
        setAlignment(newAlignment);
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
                                    New shipping label
                                </Typography>
                            </Box>
                            <Box sx={{ width: "100%" }}>
                                <Grid
                                    container
                                    width="100%"
                                    spacing={{ xs: 1, md: 1 }}
                                    columns={{ xs: 6, sm: 9, md: 12 }}
                                >
                                    <Grid item xs={2} sm={3} md={4}>
                                        <Box
                                            sx={{
                                                p: 1,
                                                m: 1,
                                                columnGap: 3,
                                                rowGap: 1,
                                                width: "100%",
                                            }}
                                        >
                                            <Button
                                                size="large"
                                                variant="contained"
                                                color="secondary"
                                                bgcolor="secondary"
                                            >
                                                Address
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={2} sm={3} md={4}>
                                        <Box
                                            sx={{
                                                p: 1,
                                                m: 1,
                                                columnGap: 3,
                                                rowGap: 1,
                                            }}
                                        >
                                            <Button
                                                size="large"
                                                variant="outlined"
                                                color="secondary"
                                                bgcolor="secondary"
                                            >
                                                Customs
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={2} sm={3} md={4}>
                                        <Box
                                            sx={{
                                                p: 1,
                                                m: 1,
                                                columnGap: 3,
                                                rowGap: 1,
                                            }}
                                        >
                                            <Button
                                                size="large"
                                                variant="outlined"
                                                color="secondary"
                                                bgcolor="secondary"
                                            >
                                                Payment
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
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
                                                        Address details
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Link
                                                        to={`/vendor`}
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
                                                        Seller's name
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
                                <Card
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        mt: 2,
                                    }}
                                >
                                    <TableContainer
                                        component={Paper}
                                        sx={{ mb: 1 }}
                                    >
                                        <Table aria-label="spanning table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography
                                                            variant="h6"
                                                            sx={{
                                                                textAlign:
                                                                    "left",
                                                                color: "secondary.main",
                                                            }}
                                                        >
                                                            Customer details
                                                        </Typography>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
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
                                                    >
                                                        <Box
                                                            sx={{
                                                                p: 1,
                                                                m: 1,
                                                                display: "flex",
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
                                                                First name
                                                            </Typography>
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                id="filled-basic"
                                                                label="Enter your first name"
                                                                variant="filled"
                                                                // value={name}
                                                                placeholder="John"
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
                                                        sx={{ mb: 1 }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                p: 1,
                                                                m: 1,
                                                                display: "flex",
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
                                                                Second name
                                                            </Typography>
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                // value={name}
                                                                placeholder="Doe"
                                                                id="filled-basic"
                                                                label="Enter your second name"
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
                                                        sx={{ mb: 1 }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                p: 1,
                                                                m: 1,
                                                                display: "flex",
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
                                                                Phone number
                                                            </Typography>
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                // value={name}
                                                                placeholder="+254 712 345 678"
                                                                id="filled-basic"
                                                                label="Enter your phone number"
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
                                                        sx={{ mb: 1 }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                p: 1,
                                                                m: 1,
                                                                display: "flex",
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
                                                                E-mail address
                                                            </Typography>
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                // value={name}
                                                                placeholder="example@email.com"
                                                                id="filled-basic"
                                                                label="Enter your email"
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
                                                        sx={{ mb: 1 }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                p: 1,
                                                                m: 1,
                                                                display: "flex",
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
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                // value={name}
                                                                placeholder="Kenya"
                                                                id="filled-basic"
                                                                label="Enter your country"
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
                                                        sx={{ mb: 1 }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                p: 1,
                                                                m: 1,
                                                                display: "flex",
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
                                                                // value={name}
                                                                placeholder="Nairobi"
                                                                id="filled-basic"
                                                                label="Enter your city"
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
                                                        sx={{ mb: 1 }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                p: 1,
                                                                m: 1,
                                                                display: "flex",
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
                                                            </Typography>
                                                            <Box
                                                                sx={{
                                                                    flexGrow: 1,
                                                                    display:
                                                                        "flex",
                                                                    columnGap: 2,
                                                                    rowGap: 1,
                                                                }}
                                                            >
                                                                <TextField
                                                                    // value={name}
                                                                    placeholder="1234"
                                                                    id="filled-basic"
                                                                    label="P.O Box"
                                                                    variant="filled"
                                                                    // onChange={handleChange}
                                                                    // disabled
                                                                />
                                                                <TextField
                                                                    // value={name}
                                                                    placeholder="00100"
                                                                    id="filled-basic"
                                                                    label="Code"
                                                                    variant="filled"
                                                                    // onChange={handleChange}
                                                                    // disabled
                                                                />
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={4}
                                                        sm={8}
                                                        md={6}
                                                        sx={{ mb: 1 }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                p: 1,
                                                                m: 1,
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                                columnGap: 3,
                                                                rowGap: 1,
                                                            }}
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                            >
                                                                Street name
                                                            </Typography>
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                // value={name}
                                                                placeholder="Road name"
                                                                id="filled-basic"
                                                                label="Enter your street name"
                                                                variant="filled"
                                                                // onChange={handleChange}
                                                                // disabled
                                                            />
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <TableContainer
                                        component={Paper}
                                        sx={{ mb: 1 }}
                                    >
                                        <Table aria-label="spanning table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography
                                                            variant="h6"
                                                            sx={{
                                                                textAlign:
                                                                    "left",
                                                                color: "secondary.main",
                                                            }}
                                                        >
                                                            Package details
                                                        </Typography>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
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
                                                    >
                                                        <Box
                                                            sx={{
                                                                p: 1,
                                                                m: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "space-between",
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
                                                                Package type
                                                            </Typography>
                                                            <ToggleButtonGroup
                                                                value={
                                                                    alignment
                                                                }
                                                                exclusive
                                                                onChange={
                                                                    handlePackageChange
                                                                }
                                                            >
                                                                <ToggleButton
                                                                    value="web"
                                                                    size="large"
                                                                    variant="contained"
                                                                    color="secondary"
                                                                    bgcolor="secondary"
                                                                >
                                                                    Flyer
                                                                </ToggleButton>
                                                                <ToggleButton
                                                                    value="android"
                                                                    size="large"
                                                                    variant="outlined"
                                                                    color="secondary"
                                                                    bgcolor="secondary"
                                                                >
                                                                    Box
                                                                </ToggleButton>
                                                            </ToggleButtonGroup>
                                                        </Box>
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        xs={4}
                                                        sm={8}
                                                        md={6}
                                                        sx={{ mb: 1 }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                p: 1,
                                                                m: 1,
                                                                display: "flex",
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
                                                                Package
                                                                weight(kg)
                                                            </Typography>
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                // value={name}
                                                                placeholder="2.00"
                                                                id="filled-basic"
                                                                label="Enter your package weight"
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
                                                        md={12}
                                                        sx={{ mb: 1 }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                p: 1,
                                                                m: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "space-between",
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
                                                                Package
                                                                dimensions(cm)
                                                            </Typography>
                                                            <Box
                                                                sx={{
                                                                    flexGrow: 1,
                                                                    display:
                                                                        "flex",
                                                                    columnGap: 2,
                                                                    rowGap: 1,
                                                                }}
                                                            >
                                                                <TextField
                                                                    // value={name}
                                                                    placeholder="50"
                                                                    id="filled-basic"
                                                                    label="Width"
                                                                    variant="filled"
                                                                    // onChange={handleChange}
                                                                    // disabled
                                                                />
                                                                <TextField
                                                                    // value={name}
                                                                    placeholder="50"
                                                                    id="filled-basic"
                                                                    label="Length"
                                                                    variant="filled"
                                                                    // onChange={handleChange}
                                                                    // disabled
                                                                />
                                                                <TextField
                                                                    // value={name}
                                                                    placeholder="50"
                                                                    id="filled-basic"
                                                                    label="Height"
                                                                    variant="filled"
                                                                    // onChange={handleChange}
                                                                    // disabled
                                                                />
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
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
                                        >
                                            <Box
                                                sx={{
                                                    p: 1,
                                                    m: 1,
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    alignItems: "center",
                                                    columnGap: 1,
                                                    rowGap: 1,
                                                }}
                                            >
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{
                                                        flexGrow: 1,
                                                    }}
                                                >
                                                    Billing weight
                                                </Typography>
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        flexGrow: 1,
                                                    }}
                                                >
                                                    2.00 kg
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={4}
                                            sm={8}
                                            md={6}
                                            sx={{ mb: 1 }}
                                        >
                                            <Box
                                                sx={{
                                                    p: 1,
                                                    m: 1,
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    alignItems: "center",
                                                    columnGap: 1,
                                                    rowGap: 1,
                                                }}
                                            >
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        flexGrow: 1,
                                                    }}
                                                >
                                                    Shipping cost
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{
                                                        flexGrow: 1,
                                                    }}
                                                >
                                                    $ 11.95
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={4}
                                            sm={8}
                                            md={6}
                                            sx={{ mb: 1 }}
                                        ></Grid>
                                        <Grid
                                            item
                                            xs={4}
                                            sm={8}
                                            md={6}
                                            sx={{ mb: 1 }}
                                        >
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
                                                <Link
                                                    to={`/vendor/Customs`}
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
                                                        Proceed to customs
                                                    </Button>
                                                </Link>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default NewLabel;
