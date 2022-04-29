import React, { useEffect, useState } from "react";
import {
    Container,
    Grid,
    Card,
    CardContent,
    Avatar,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    TextField,
    Button,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import GuestSearchBar from "../components/GuestSearchBar";
import GuestMenu from "../components/GuestMenu";

const GuestAccount = () => {
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem("login"));
        if (userDetails) {
            if (userDetails.user.role === "guest") {
                const user = userDetails.user;
                setFirstName(user.first_name);
                setSecondName(user.second_name);
                setEmail(user.email);
                setPhone(user.phone_number);
                setCountry(user.country);
                setCity(user.city);
                setStreetName(user.street_name);
                setAddress(user.address);
            }else {
                setError("User not found");
            }
        } 
    }, []);
    const [first_name, setFirstName] = useState("");
    const [second_name, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [street_name, setStreetName] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");

    return (
        <>
            {error && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        alignItems: "center",
                        fontSize: "30px",
                        background: "#c20f00",
                    }}
                >
                    {error}
                </div>
            )}
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
                            <Grid item xs={4} sm={8} md={9} sx={{ mb: 1 }}>
                                <Card
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: 116,
                                            height: 116,
                                            m: 3,
                                            bgcolor: "secondary.main",
                                        }}
                                        alt="Guest Pic"
                                        src="/static/images/avatar/1.jpg"
                                    />
                                    <CardContent sx={{ width: "100%" }}>
                                        <Typography
                                            gutterBottom
                                            variant="subtitle1"
                                            component="div"
                                            color="secondary"
                                        >
                                            Change picture
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        mt: 2,
                                    }}
                                >
                                    <TableContainer component={Paper}>
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
                                                            Profile details
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
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                label="First name"
                                                                variant="filled"
                                                                value={
                                                                    first_name
                                                                }
                                                                fullWidth
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
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                value={
                                                                    second_name
                                                                }
                                                                label="Second name"
                                                                variant="filled"
                                                                fullWidth
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
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                value={
                                                                    phone_number
                                                                }
                                                                label="Phone number"
                                                                variant="filled"
                                                                fullWidth
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
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                value={email}
                                                                label="Email address"
                                                                variant="filled"
                                                                fullWidth
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
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                value={country}
                                                                label="Country"
                                                                variant="filled"
                                                                fullWidth
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
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                value={city}
                                                                label="City"
                                                                variant="filled"
                                                                fullWidth
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
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                value={
                                                                    street_name
                                                                }
                                                                label="Street name"
                                                                variant="filled"
                                                                fullWidth
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
                                                            <TextField
                                                                sx={{
                                                                    flexGrow: 1,
                                                                }}
                                                                value={address}
                                                                label="Address"
                                                                variant="filled"
                                                                fullWidth
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
                                                                Update
                                                            </Button>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </>
            ) : (
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
            )}
        </>
    );
};

export default GuestAccount;
