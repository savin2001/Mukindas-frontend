import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
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
import registerPic from "../../media/register.png";
import api from "../../components/api";
import axios from "axios";

const Register = () => {
    const [values, setValues] = useState({
        showPassword: false,
    });
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("guest");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // const [isPending, setIsPending] = useState(true);

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const register = (e) => {
        e.preventDefault();
        axios
            .post(`${api}/api/auth/register/guest`, {
                firstName,
                secondName,
                email,
                phone,
                password,
                userType,
            })
            .then((response) => {
                console.log(response);
                localStorage.setItem(
                    "guestLogin",
                    JSON.stringify({
                        userLogin: true,
                        token: response.data.access_token,
                    })
                );
                
                setError("");
                setFirstName("")
                setSecondName("")
                setPhone("")
                setEmail("");
                setPassword("");
                setUserType("")
                navigate("/guest");
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
                        Create a guest account
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
                                image={registerPic}
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
                            onSubmit={register}
                        >
                            <input
                                type="hidden"
                                name="userType"
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                            />
                            <TextField
                                label="First name"
                                value={firstName}
                                sx={{
                                    my: 2,
                                }}
                                onChange={(e) => setFirstName(e.target.value)}
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="filled"
                            />

                            <TextField
                                label="Second name"
                                value={secondName}
                                sx={{
                                    my: 2,
                                }}
                                onChange={(e) => setSecondName(e.target.value)}
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="Phone number"
                                value={phone}
                                sx={{
                                    my: 2,
                                }}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <LocalPhoneIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="filled"
                            />
                            <TextField
                                label="Email address"
                                type="email"
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
                                    id="filled-adornment-password"
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
                                Register
                            </Button>
                            {error && (
                                <Alert severity="error">
                                    <AlertTitle>{error}</AlertTitle>
                                </Alert>
                            )}
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
                                to={`/guest-login`}
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
                                    Already have an account
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
                </Grid>
            </Container>
        </>
    );
};

export default Register;
