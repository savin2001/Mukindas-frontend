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
import GuestMenu from "../components/GuestMenu";
import GuestSearchBar from "../components/GuestSearchBar";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const GuestShipment = () => {
    const [alignment, setAlignment] = React.useState("web");
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    const handlePackageChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <>
            {isLogInTrue &&
            isLogInTrue.userLogin &&
            isLogInTrue.user.role === "guest" ? (
                <>
                    <GuestSearchBar />
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
                                    display: {
                                        xs: "none",
                                        sm: "none",
                                        md: "block",
                                    },
                                }}
                                md={3}
                            >
                                <GuestMenu />
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
                                            backgroundColor:
                                                "primary.contrastText",
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
                                            New Shipment
                                        </Typography>
                                    </Box>
                                    <Box width="100%">
                                        <Grid
                                            container
                                            spacing={{ xs: 1, md: 1 }}
                                            columns={{ xs: 6, sm: 9, md: 12 }}
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
                                                        alignItems: "center",
                                                        columnGap: 1,
                                                        rowGap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            flexGrow: 1,
                                                        }}
                                                    >
                                                        Shipped from
                                                    </Typography>
                                                    <TextField
                                                        sx={{
                                                            flexGrow: 1,
                                                        }}
                                                        // value={name}
                                                        placeholder="Kenya"
                                                        id="filled-basic"
                                                        label="Enter your source country"
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
                                                        alignItems: "center",
                                                        columnGap: 1,
                                                        rowGap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            flexGrow: 1,
                                                        }}
                                                    >
                                                        Shipped to
                                                    </Typography>
                                                    <TextField
                                                        sx={{
                                                            flexGrow: 1,
                                                        }}
                                                        // value={name}
                                                        placeholder="Tanzania"
                                                        id="filled-basic"
                                                        label="Enter your destination country"
                                                        variant="filled"
                                                        // onChange={handleChange}
                                                        // disabled
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>
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
                                                                    Package
                                                                    details
                                                                </Typography>
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
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
                                                                sx={{ mb: 1 }}
                                                            >
                                                                <Box
                                                                    sx={{
                                                                        p: 1,
                                                                        m: 1,
                                                                        display:
                                                                            "flex",
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
                                                                        type
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
                                                                        display:
                                                                            "flex",
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
                                                            alignItems:
                                                                "center",
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
                                                            alignItems:
                                                                "center",
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
                                                            alignItems:
                                                                "center",
                                                            columnGap: 3,
                                                            rowGap: 1,
                                                        }}
                                                    >
                                                        {/* <Link
                                                    to={`/vendor/Customs`}
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "inherit",
                                                    }}
                                                > */}
                                                        <Button
                                                            fullWidth
                                                            size="large"
                                                            variant="contained"
                                                            color="secondary"
                                                            bgcolor="secondary"
                                                        >
                                                            Confirm
                                                        </Button>
                                                        {/* </Link> */}
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
            ) : (
                <>
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
                                Page not found
                            </Typography>
                            <Link
                                to={`/login`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <Typography variant="h6" color="secondary">
                                    <KeyboardBackspaceIcon fontSize="small" />
                                    {"  "}
                                    <span>Log into your account</span>
                                </Typography>
                            </Link>
                        </Box>
                    </Container>
                </>
            )}
        </>
    );
};

export default GuestShipment;
