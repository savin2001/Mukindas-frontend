import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
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
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import login from "../media/login.png";

const Login = () => {
    const [values, setValues] = useState({
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
                            <Box
                                sx={{
                                    p: 2,
                                    m: 2,
                                }}
                            >
                                <TextField
                                    id="standard-basic"
                                    label="Username or email"
                                    sx={{ width: "35ch" }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="filled"
                                />
                            </Box>
                            <Box
                                sx={{
                                    p: 2,
                                    m: 2,
                                }}
                            >
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
                            </Box>
                            <Box
                                sx={{
                                    p: 2,
                                    m: 2,
                                }}
                            >
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                defaultChecked
                                                sx={{
                                                    "& .MuiSvgIcon-root": {
                                                        fontSize: 28,
                                                    },
                                                }}
                                            />
                                        }
                                        label="Remember me"
                                    />
                                </FormGroup>
                            </Box>
                            <Box sx={{ flexGrow: 1, my: 4, m: 2 }}>
                                <Link
                                    to={`/vendor`}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <Button
                                        size="large"
                                        variant="outlined"
                                        color="secondary"
                                        bgcolor="secondary"
                                    >
                                        Log in
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
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
