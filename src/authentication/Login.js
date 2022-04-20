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
import { Link } from "react-router-dom";
import login from "../media/login.png";
import api from "../components/api";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false,
    });
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

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
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${api}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setData(data);
            })
            .catch((err) => {
                setError(err.message);
                // setIsPending(false);
            });
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
                        Sign In
                    </Typography>
                </Box>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 8 }}
                    sx={{ mb: 5 }}
                >
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
                                image={login}
                                alt="stock image"
                            />
                        </Box>
                    </Grid>
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
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            <TextField
                                label="Email address"
                                type="email"
                                value={values.email}
                                sx={{
                                    my: 2,
                                }}
                                onChange={handleChange("email")}
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
                                    id="filled-adornment-password"
                                    type={
                                        values.showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={values.password}
                                    onChange={handleChange("password")}
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
                            {error && (
                                <Alert severity="error">
                                    <AlertTitle>{error}</AlertTitle>
                                </Alert>
                            )}
                            {data && (
                                <Alert severity="success">
                                    <AlertTitle>{data}</AlertTitle>
                                    Please use a{" "}
                                    <strong>different email</strong>
                                </Alert>
                            )}
                        </form>
                        <Box
                            sx={{
                                p: 2,
                                m: 2,
                            }}
                        >
                            <Link
                                to={`/register`}
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
                                    Create an account
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;
