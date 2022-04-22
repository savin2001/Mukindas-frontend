import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Container,
    Typography,
    Grid,
    Box,
    TextField,
    InputAdornment,
    CardMedia,
    FormControl,
    InputLabel,
    FilledInput,
    IconButton,
    Alert,
    AlertTitle,
    // FormGroup,
    // FormControlLabel,
    // Checkbox,
    Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import loginPic from "../../media/login.png";
import api from "../../components/api";
import axios from "axios";

const Login = () => {
    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const login = (e) => {
        e.preventDefault();
        axios
            .post(`${api}/api/auth/login/vendor`, {
                email,
                password,
            })
            .then((response) => {
                console.log(response);
                localStorage.setItem(
                    "vendorLogin",
                    JSON.stringify({
                        userLogin: true,
                        token: response.data.access_token,
                    })
                );
                setError("");
                setEmail("");
                setPassword("");
                navigate("/vendor");
            })
            .catch((error) => setError(error.response.data.message));
    };

    return (
        <>
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 100 }}
            ></Container>
            <Container sx={{ flexGrow: 1, top: 1000, mb: 5 }}>
                <Box sx={{ width: "100%" }}>
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: "center",
                            mb: 3,
                            pt: 3,
                        }}
                    >
                        Welcome to Your Shop
                    </Typography>
                </Box>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 8 }}
                    sx={{ mb: 5 }}
                >
                    <Grid item xs={4} sm={8} md={4}>
                        <form
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                p: 1,
                                m: 1,
                            }}
                            onSubmit={login}
                        >
                            
                            <TextField
                                id="email"
                                label="Email address"
                                type="text"
                                value={email}
                                sx={{
                                    my: 2,
                                }}
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <MailOutlineIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="filled"
                            />

                            <FormControl
                                fullWidth
                                variant="filled"
                                sx={{
                                    my: 2,
                                }}
                            >
                                <InputLabel htmlFor="filled-adornment-password">
                                    Password
                                </InputLabel>
                                <FilledInput
                                    id="password"
                                    type={
                                        values.showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
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
                            {error && (
                                <Alert severity="error">
                                    <AlertTitle>
                                        <strong>{error}</strong>
                                    </AlertTitle>
                                    Please confirm your details
                                </Alert>
                            )}
                            <Button
                                size="large"
                                variant="outlined"
                                color="secondary"
                                bgcolor="secondary"
                                fullWidth
                                type="submit"
                                sx={{
                                    my: 2,
                                }}
                            >
                                Login
                            </Button>
                        </form>
                        <Box
                            sx={{
                                p: 2,
                                m: 2,
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                        >
                            <Link
                                to={`/vendor-register`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <Typography
                                    sx={{ textAlign: "left" }}
                                    variant="h6"
                                    color="secondary"
                                >
                                    Create a new shop
                                </Typography>
                            </Link>
                            <Link
                                to={`/`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <Typography
                                    sx={{ textAlign: "right" }}
                                    variant="h6"
                                    color="secondary"
                                >
                                   Back to main page
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                        md={4}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                p: 2,
                                m: 2,
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={loginPic}
                                alt="stock image"
                            />
                        </Box>
                    </Grid>
                    
                </Grid>
            </Container>
        </>
    );
};

export default Login;
