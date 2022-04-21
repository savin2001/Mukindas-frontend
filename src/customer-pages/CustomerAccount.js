import React, { useState } from "react";
// import PropTypes from 'prop-types'; to be used for upload
import CustomerMenu from "../components/CustomerMenu";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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
    FormControl,
    InputLabel,
    InputAdornment,

    // Select,
    // MenuItem,
    FilledInput,
    IconButton,
    // FormGroup,
    // FormControlLabel,
    // Checkbox,
    Button,
} from "@mui/material";
import CustomerSearchBar from "../components/CustomerSearchBar";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";

const CustomerAccount = () => {
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    const [values, setValues] = useState({
        fname: "",
        sname: "",
        email: "",
        phone: "",
        password: "",
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            {isLogInTrue && isLogInTrue.userLogin ? (
                        <CustomerSearchBar />
                    ) : (
                        <PrimarySearchAppBar />
                    )}

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
                                alt="Customer Pic"
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
                                                        textAlign: "left",
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
                                            columns={{ xs: 4, sm: 8, md: 12 }}
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
                                                        sx={{ flexGrow: 1 }}
                                                    >
                                                        First name
                                                    </Typography>
                                                    <TextField
                                                        sx={{ flexGrow: 1 }}
                                                        label="Enter your first name"
                                                        variant="filled"
                                                        value={values.fname}
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
                                                        alignItems: "center",
                                                        columnGap: 1,
                                                        rowGap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{ flexGrow: 1 }}
                                                    >
                                                        Second name
                                                    </Typography>
                                                    <TextField
                                                        sx={{ flexGrow: 1 }}
                                                        value={values.sname}
                                                        placeholder="Doe"
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
                                                        alignItems: "center",
                                                        columnGap: 1,
                                                        rowGap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{ flexGrow: 1 }}
                                                    >
                                                        Phone number
                                                    </Typography>
                                                    <TextField
                                                        sx={{ flexGrow: 1 }}
                                                        value={values.phone}
                                                        placeholder="+254 712 345 678"
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
                                                        alignItems: "center",
                                                        columnGap: 1,
                                                        rowGap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{ flexGrow: 1 }}
                                                    >
                                                        E-mail address
                                                    </Typography>
                                                    <TextField
                                                        sx={{ flexGrow: 1 }}
                                                        value={values.email}
                                                        placeholder="example@email.com"
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
                                                        alignItems: "center",
                                                        columnGap: 1,
                                                        rowGap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{ flexGrow: 1 }}
                                                    >
                                                        Password
                                                    </Typography>
                                                    <FormControl
                                                        sx={{ width: "35ch" }}
                                                        variant="filled"
                                                    >
                                                        <InputLabel htmlFor="filled-adornment-password">
                                                            Password
                                                        </InputLabel>
                                                        <FilledInput
                                                            id="filled-adornment-password"
                                                            type={
                                                                values.showPassword
                                                                    ? "text"
                                                                    : "password"
                                                            }
                                                            value={
                                                                values.password
                                                            }
                                                            onChange={handleChange(
                                                                "password"
                                                            )}
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={
                                                                            handleClickShowPassword
                                                                        }
                                                                        onMouseDown={
                                                                            handleMouseDownPassword
                                                                        }
                                                                        edge="end"
                                                                    >
                                                                        {values.showPassword ? (
                                                                            <VisibilityOff />
                                                                        ) : (
                                                                            <Visibility />
                                                                        )}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
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
    );
};

export default CustomerAccount;
