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
    MenuItem,
    Select,
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
    const [first_name, setFirstName] = useState("");
    const [second_name, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [street_name, setStreetName] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [role, setUserType] = useState("guest");
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
            .post(`${api}/register`, {
                first_name,
                second_name,
                email,
                phone_number,
                country,
                city,
                street_name,
                address,
                role,
                password,
            })
            .then((response) => {
                // console.log(response);
                setError("");
                setFirstName("");
                setSecondName("");
                setPhone("");
                setEmail("");
                setCountry("");
                setCity("");
                setStreetName("");
                setPassword("");
                setAddress("");
                setUserType("");
                navigate("/guest-login");
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
                            <TextField
                                label="First name"
                                value={first_name}
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
                                value={second_name}
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
                                value={phone_number}
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
                            <FormControl variant="filled" fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Country
                                </InputLabel>
                                <Select
                                    value={country}
                                    label="Country"
                                    sx={{ textAlign: "left" }}
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    <MenuItem value="Afghanistan">
                                        Afghanistan
                                    </MenuItem>
                                    <MenuItem value="Albania">Albania</MenuItem>
                                    <MenuItem value="Algeria">Algeria</MenuItem>
                                    <MenuItem value="American Samoa">
                                        American Samoa
                                    </MenuItem>
                                    <MenuItem value="Andorra">Andorra</MenuItem>
                                    <MenuItem value="Angola">Angola</MenuItem>
                                    <MenuItem value="Anguilla">
                                        Anguilla
                                    </MenuItem>
                                    <MenuItem value="Antarctica">
                                        Antarctica
                                    </MenuItem>
                                    <MenuItem value="Antigua and Barbuda">
                                        Antigua and Barbuda
                                    </MenuItem>
                                    <MenuItem value="Argentina">
                                        Argentina
                                    </MenuItem>
                                    <MenuItem value="Armenia">Armenia</MenuItem>
                                    <MenuItem value="Aruba">Aruba</MenuItem>
                                    <MenuItem value="Australia">
                                        Australia
                                    </MenuItem>
                                    <MenuItem value="Austria">Austria</MenuItem>
                                    <MenuItem value="Azerbaijan">
                                        Azerbaijan
                                    </MenuItem>
                                    <MenuItem value="Bahamas">Bahamas</MenuItem>
                                    <MenuItem value="Bahrain">Bahrain</MenuItem>
                                    <MenuItem value="Bangladesh">
                                        Bangladesh
                                    </MenuItem>
                                    <MenuItem value="Barbados">
                                        Barbados
                                    </MenuItem>
                                    <MenuItem value="Belarus">Belarus</MenuItem>
                                    <MenuItem value="Belgium">Belgium</MenuItem>
                                    <MenuItem value="Belize">Belize</MenuItem>
                                    <MenuItem value="Benin">Benin</MenuItem>
                                    <MenuItem value="Bermuda">Bermuda</MenuItem>
                                    <MenuItem value="Bhutan">Bhutan</MenuItem>
                                    <MenuItem value="Bolivia">Bolivia</MenuItem>
                                    <MenuItem value="Bosnia and Herzegovina">
                                        Bosnia and Herzegovina
                                    </MenuItem>
                                    <MenuItem value="Botswana">
                                        Botswana
                                    </MenuItem>
                                    <MenuItem value="Bouvet Island">
                                        Bouvet Island
                                    </MenuItem>
                                    <MenuItem value="Brazil">Brazil</MenuItem>
                                    <MenuItem value="British Indian Ocean Territory">
                                        British Indian Ocean Territory
                                    </MenuItem>
                                    <MenuItem value="Brunei Darussalam">
                                        Brunei Darussalam
                                    </MenuItem>
                                    <MenuItem value="Bulgaria">
                                        Bulgaria
                                    </MenuItem>
                                    <MenuItem value="Burkina Faso">
                                        Burkina Faso
                                    </MenuItem>
                                    <MenuItem value="Burundi">Burundi</MenuItem>
                                    <MenuItem value="Cambodia">
                                        Cambodia
                                    </MenuItem>
                                    <MenuItem value="Cameroon">
                                        Cameroon
                                    </MenuItem>
                                    <MenuItem value="Canada">Canada</MenuItem>
                                    <MenuItem value="Cape Verde">
                                        Cape Verde
                                    </MenuItem>
                                    <MenuItem value="Cayman Islands">
                                        Cayman Islands
                                    </MenuItem>
                                    <MenuItem value="Central African Republic">
                                        Central African Republic
                                    </MenuItem>
                                    <MenuItem value="Chad">Chad</MenuItem>
                                    <MenuItem value="Chile">Chile</MenuItem>
                                    <MenuItem value="China">China</MenuItem>
                                    <MenuItem value="Christmas Island">
                                        Christmas Island
                                    </MenuItem>
                                    <MenuItem value="Cocos (Keeling) Islands">
                                        Cocos (Keeling) Islands
                                    </MenuItem>
                                    <MenuItem value="Colombia">
                                        Colombia
                                    </MenuItem>
                                    <MenuItem value="Comoros">Comoros</MenuItem>
                                    <MenuItem value="Congo">Congo</MenuItem>
                                    <MenuItem value="Congo, The Democratic Republic of The">
                                        Congo, The Democratic Republic of The
                                    </MenuItem>
                                    <MenuItem value="Cook Islands">
                                        Cook Islands
                                    </MenuItem>
                                    <MenuItem value="Costa Rica">
                                        Costa Rica
                                    </MenuItem>
                                    <MenuItem value="Cote D'ivoire">
                                        Cote D'ivoire
                                    </MenuItem>
                                    <MenuItem value="Croatia">Croatia</MenuItem>
                                    <MenuItem value="Cuba">Cuba</MenuItem>
                                    <MenuItem value="Cyprus">Cyprus</MenuItem>
                                    <MenuItem value="Czech Republic">
                                        Czech Republic
                                    </MenuItem>
                                    <MenuItem value="Denmark">Denmark</MenuItem>
                                    <MenuItem value="Djibouti">
                                        Djibouti
                                    </MenuItem>
                                    <MenuItem value="Dominica">
                                        Dominica
                                    </MenuItem>
                                    <MenuItem value="Dominican Republic">
                                        Dominican Republic
                                    </MenuItem>
                                    <MenuItem value="Ecuador">Ecuador</MenuItem>
                                    <MenuItem value="Egypt">Egypt</MenuItem>
                                    <MenuItem value="El Salvador">
                                        El Salvador
                                    </MenuItem>
                                    <MenuItem value="Equatorial Guinea">
                                        Equatorial Guinea
                                    </MenuItem>
                                    <MenuItem value="Eritrea">Eritrea</MenuItem>
                                    <MenuItem value="Estonia">Estonia</MenuItem>
                                    <MenuItem value="Ethiopia">
                                        Ethiopia
                                    </MenuItem>
                                    <MenuItem value="Falkland Islands (Malvinas)">
                                        Falkland Islands (Malvinas)
                                    </MenuItem>
                                    <MenuItem value="Faroe Islands">
                                        Faroe Islands
                                    </MenuItem>
                                    <MenuItem value="Fiji">Fiji</MenuItem>
                                    <MenuItem value="Finland">Finland</MenuItem>
                                    <MenuItem value="France">France</MenuItem>
                                    <MenuItem value="French Guiana">
                                        French Guiana
                                    </MenuItem>
                                    <MenuItem value="French Polynesia">
                                        French Polynesia
                                    </MenuItem>
                                    <MenuItem value="French Southern Territories">
                                        French Southern Territories
                                    </MenuItem>
                                    <MenuItem value="Gabon">Gabon</MenuItem>
                                    <MenuItem value="Gambia">Gambia</MenuItem>
                                    <MenuItem value="Georgia">Georgia</MenuItem>
                                    <MenuItem value="Germany">Germany</MenuItem>
                                    <MenuItem value="Ghana">Ghana</MenuItem>
                                    <MenuItem value="Gibraltar">
                                        Gibraltar
                                    </MenuItem>
                                    <MenuItem value="Greece">Greece</MenuItem>
                                    <MenuItem value="Greenland">
                                        Greenland
                                    </MenuItem>
                                    <MenuItem value="Grenada">Grenada</MenuItem>
                                    <MenuItem value="Guadeloupe">
                                        Guadeloupe
                                    </MenuItem>
                                    <MenuItem value="Guam">Guam</MenuItem>
                                    <MenuItem value="Guatemala">
                                        Guatemala
                                    </MenuItem>
                                    <MenuItem value="Guinea">Guinea</MenuItem>
                                    <MenuItem value="Guinea-bissau">
                                        Guinea-bissau
                                    </MenuItem>
                                    <MenuItem value="Guyana">Guyana</MenuItem>
                                    <MenuItem value="Haiti">Haiti</MenuItem>
                                    <MenuItem value="Heard Island and Mcdonald Islands">
                                        Heard Island and Mcdonald Islands
                                    </MenuItem>
                                    <MenuItem value="Holy See (Vatican City State)">
                                        Holy See (Vatican City State)
                                    </MenuItem>
                                    <MenuItem value="Honduras">
                                        Honduras
                                    </MenuItem>
                                    <MenuItem value="Hong Kong">
                                        Hong Kong
                                    </MenuItem>
                                    <MenuItem value="Hungary">Hungary</MenuItem>
                                    <MenuItem value="Iceland">Iceland</MenuItem>
                                    <MenuItem value="India">India</MenuItem>
                                    <MenuItem value="Indonesia">
                                        Indonesia
                                    </MenuItem>
                                    <MenuItem value="Iran, Islamic Republic of">
                                        Iran, Islamic Republic of
                                    </MenuItem>
                                    <MenuItem value="Iraq">Iraq</MenuItem>
                                    <MenuItem value="Ireland">Ireland</MenuItem>
                                    <MenuItem value="Israel">Israel</MenuItem>
                                    <MenuItem value="Italy">Italy</MenuItem>
                                    <MenuItem value="Jamaica">Jamaica</MenuItem>
                                    <MenuItem value="Japan">Japan</MenuItem>
                                    <MenuItem value="Jordan">Jordan</MenuItem>
                                    <MenuItem value="Kazakhstan">
                                        Kazakhstan
                                    </MenuItem>
                                    <MenuItem value="Kenya">Kenya</MenuItem>
                                    <MenuItem value="Kiribati">
                                        Kiribati
                                    </MenuItem>
                                    <MenuItem value="Korea, Democratic People's Republic of">
                                        Korea, Democratic People's Republic of
                                    </MenuItem>
                                    <MenuItem value="Korea, Republic of">
                                        Korea, Republic of
                                    </MenuItem>
                                    <MenuItem value="Kuwait">Kuwait</MenuItem>
                                    <MenuItem value="Kyrgyzstan">
                                        Kyrgyzstan
                                    </MenuItem>
                                    <MenuItem value="Lao People's Democratic Republic">
                                        Lao People's Democratic Republic
                                    </MenuItem>
                                    <MenuItem value="Latvia">Latvia</MenuItem>
                                    <MenuItem value="Lebanon">Lebanon</MenuItem>
                                    <MenuItem value="Lesotho">Lesotho</MenuItem>
                                    <MenuItem value="Liberia">Liberia</MenuItem>
                                    <MenuItem value="Libyan Arab Jamahiriya">
                                        Libyan Arab Jamahiriya
                                    </MenuItem>
                                    <MenuItem value="Liechtenstein">
                                        Liechtenstein
                                    </MenuItem>
                                    <MenuItem value="Lithuania">
                                        Lithuania
                                    </MenuItem>
                                    <MenuItem value="Luxembourg">
                                        Luxembourg
                                    </MenuItem>
                                    <MenuItem value="Macao">Macao</MenuItem>
                                    <MenuItem value="North Macedonia">
                                        North Macedonia
                                    </MenuItem>
                                    <MenuItem value="Madagascar">
                                        Madagascar
                                    </MenuItem>
                                    <MenuItem value="Malawi">Malawi</MenuItem>
                                    <MenuItem value="Malaysia">
                                        Malaysia
                                    </MenuItem>
                                    <MenuItem value="Maldives">
                                        Maldives
                                    </MenuItem>
                                    <MenuItem value="Mali">Mali</MenuItem>
                                    <MenuItem value="Malta">Malta</MenuItem>
                                    <MenuItem value="Marshall Islands">
                                        Marshall Islands
                                    </MenuItem>
                                    <MenuItem value="Martinique">
                                        Martinique
                                    </MenuItem>
                                    <MenuItem value="Mauritania">
                                        Mauritania
                                    </MenuItem>
                                    <MenuItem value="Mauritius">
                                        Mauritius
                                    </MenuItem>
                                    <MenuItem value="Mayotte">Mayotte</MenuItem>
                                    <MenuItem value="Mexico">Mexico</MenuItem>
                                    <MenuItem value="Micronesia, Federated States of">
                                        Micronesia, Federated States of
                                    </MenuItem>
                                    <MenuItem value="Moldova, Republic of">
                                        Moldova, Republic of
                                    </MenuItem>
                                    <MenuItem value="Monaco">Monaco</MenuItem>
                                    <MenuItem value="Mongolia">
                                        Mongolia
                                    </MenuItem>
                                    <MenuItem value="Montserrat">
                                        Montserrat
                                    </MenuItem>
                                    <MenuItem value="Morocco">Morocco</MenuItem>
                                    <MenuItem value="Mozambique">
                                        Mozambique
                                    </MenuItem>
                                    <MenuItem value="Myanmar">Myanmar</MenuItem>
                                    <MenuItem value="Namibia">Namibia</MenuItem>
                                    <MenuItem value="Nauru">Nauru</MenuItem>
                                    <MenuItem value="Nepal">Nepal</MenuItem>
                                    <MenuItem value="Netherlands">
                                        Netherlands
                                    </MenuItem>
                                    <MenuItem value="Netherlands Antilles">
                                        Netherlands Antilles
                                    </MenuItem>
                                    <MenuItem value="New Caledonia">
                                        New Caledonia
                                    </MenuItem>
                                    <MenuItem value="New Zealand">
                                        New Zealand
                                    </MenuItem>
                                    <MenuItem value="Nicaragua">
                                        Nicaragua
                                    </MenuItem>
                                    <MenuItem value="Niger">Niger</MenuItem>
                                    <MenuItem value="Nigeria">Nigeria</MenuItem>
                                    <MenuItem value="Niue">Niue</MenuItem>
                                    <MenuItem value="Norfolk Island">
                                        Norfolk Island
                                    </MenuItem>
                                    <MenuItem value="Northern Mariana Islands">
                                        Northern Mariana Islands
                                    </MenuItem>
                                    <MenuItem value="Norway">Norway</MenuItem>
                                    <MenuItem value="Oman">Oman</MenuItem>
                                    <MenuItem value="Pakistan">
                                        Pakistan
                                    </MenuItem>
                                    <MenuItem value="Palau">Palau</MenuItem>
                                    <MenuItem value="Palestinian Territory, Occupied">
                                        Palestinian Territory, Occupied
                                    </MenuItem>
                                    <MenuItem value="Panama">Panama</MenuItem>
                                    <MenuItem value="Papua New Guinea">
                                        Papua New Guinea
                                    </MenuItem>
                                    <MenuItem value="Paraguay">
                                        Paraguay
                                    </MenuItem>
                                    <MenuItem value="Peru">Peru</MenuItem>
                                    <MenuItem value="Philippines">
                                        Philippines
                                    </MenuItem>
                                    <MenuItem value="Pitcairn">
                                        Pitcairn
                                    </MenuItem>
                                    <MenuItem value="Poland">Poland</MenuItem>
                                    <MenuItem value="Portugal">
                                        Portugal
                                    </MenuItem>
                                    <MenuItem value="Puerto Rico">
                                        Puerto Rico
                                    </MenuItem>
                                    <MenuItem value="Qatar">Qatar</MenuItem>
                                    <MenuItem value="Reunion">Reunion</MenuItem>
                                    <MenuItem value="Romania">Romania</MenuItem>
                                    <MenuItem value="Russian Federation">
                                        Russian Federation
                                    </MenuItem>
                                    <MenuItem value="Rwanda">Rwanda</MenuItem>
                                    <MenuItem value="Saint Helena">
                                        Saint Helena
                                    </MenuItem>
                                    <MenuItem value="Saint Kitts and Nevis">
                                        Saint Kitts and Nevis
                                    </MenuItem>
                                    <MenuItem value="Saint Lucia">
                                        Saint Lucia
                                    </MenuItem>
                                    <MenuItem value="Saint Pierre and Miquelon">
                                        Saint Pierre and Miquelon
                                    </MenuItem>
                                    <MenuItem value="Saint Vincent and The Grenadines">
                                        Saint Vincent and The Grenadines
                                    </MenuItem>
                                    <MenuItem value="Samoa">Samoa</MenuItem>
                                    <MenuItem value="San Marino">
                                        San Marino
                                    </MenuItem>
                                    <MenuItem value="Sao Tome and Principe">
                                        Sao Tome and Principe
                                    </MenuItem>
                                    <MenuItem value="Saudi Arabia">
                                        Saudi Arabia
                                    </MenuItem>
                                    <MenuItem value="Senegal">Senegal</MenuItem>
                                    <MenuItem value="Serbia and Montenegro">
                                        Serbia and Montenegro
                                    </MenuItem>
                                    <MenuItem value="Seychelles">
                                        Seychelles
                                    </MenuItem>
                                    <MenuItem value="Sierra Leone">
                                        Sierra Leone
                                    </MenuItem>
                                    <MenuItem value="Singapore">
                                        Singapore
                                    </MenuItem>
                                    <MenuItem value="Slovakia">
                                        Slovakia
                                    </MenuItem>
                                    <MenuItem value="Slovenia">
                                        Slovenia
                                    </MenuItem>
                                    <MenuItem value="Solomon Islands">
                                        Solomon Islands
                                    </MenuItem>
                                    <MenuItem value="Somalia">Somalia</MenuItem>
                                    <MenuItem value="South Africa">
                                        South Africa
                                    </MenuItem>
                                    <MenuItem value="South Georgia and The South Sandwich Islands">
                                        South Georgia and The South Sandwich
                                        Islands
                                    </MenuItem>
                                    <MenuItem value="Spain">Spain</MenuItem>
                                    <MenuItem value="Sri Lanka">
                                        Sri Lanka
                                    </MenuItem>
                                    <MenuItem value="Sudan">Sudan</MenuItem>
                                    <MenuItem value="Suriname">
                                        Suriname
                                    </MenuItem>
                                    <MenuItem value="Svalbard and Jan Mayen">
                                        Svalbard and Jan Mayen
                                    </MenuItem>
                                    <MenuItem value="Swaziland">
                                        Swaziland
                                    </MenuItem>
                                    <MenuItem value="Sweden">Sweden</MenuItem>
                                    <MenuItem value="Switzerland">
                                        Switzerland
                                    </MenuItem>
                                    <MenuItem value="Syrian Arab Republic">
                                        Syrian Arab Republic
                                    </MenuItem>
                                    <MenuItem value="Taiwan, Province of China">
                                        Taiwan, Province of China
                                    </MenuItem>
                                    <MenuItem value="Tajikistan">
                                        Tajikistan
                                    </MenuItem>
                                    <MenuItem value="Tanzania, United Republic of">
                                        Tanzania, United Republic of
                                    </MenuItem>
                                    <MenuItem value="Thailand">
                                        Thailand
                                    </MenuItem>
                                    <MenuItem value="Timor-leste">
                                        Timor-leste
                                    </MenuItem>
                                    <MenuItem value="Togo">Togo</MenuItem>
                                    <MenuItem value="Tokelau">Tokelau</MenuItem>
                                    <MenuItem value="Tonga">Tonga</MenuItem>
                                    <MenuItem value="Trinidad and Tobago">
                                        Trinidad and Tobago
                                    </MenuItem>
                                    <MenuItem value="Tunisia">Tunisia</MenuItem>
                                    <MenuItem value="Turkey">Turkey</MenuItem>
                                    <MenuItem value="Turkmenistan">
                                        Turkmenistan
                                    </MenuItem>
                                    <MenuItem value="Turks and Caicos Islands">
                                        Turks and Caicos Islands
                                    </MenuItem>
                                    <MenuItem value="Tuvalu">Tuvalu</MenuItem>
                                    <MenuItem value="Uganda">Uganda</MenuItem>
                                    <MenuItem value="Ukraine">Ukraine</MenuItem>
                                    <MenuItem value="United Arab Emirates">
                                        United Arab Emirates
                                    </MenuItem>
                                    <MenuItem value="United Kingdom">
                                        United Kingdom
                                    </MenuItem>
                                    <MenuItem value="United States">
                                        United States
                                    </MenuItem>
                                    <MenuItem value="United States Minor Outlying Islands">
                                        United States Minor Outlying Islands
                                    </MenuItem>
                                    <MenuItem value="Uruguay">Uruguay</MenuItem>
                                    <MenuItem value="Uzbekistan">
                                        Uzbekistan
                                    </MenuItem>
                                    <MenuItem value="Vanuatu">Vanuatu</MenuItem>
                                    <MenuItem value="Venezuela">
                                        Venezuela
                                    </MenuItem>
                                    <MenuItem value="Viet Nam">
                                        Viet Nam
                                    </MenuItem>
                                    <MenuItem value="Virgin Islands, British">
                                        Virgin Islands, British
                                    </MenuItem>
                                    <MenuItem value="Virgin Islands, U.S.">
                                        Virgin Islands, U.S.
                                    </MenuItem>
                                    <MenuItem value="Wallis and Futuna">
                                        Wallis and Futuna
                                    </MenuItem>
                                    <MenuItem value="Western Sahara">
                                        Western Sahara
                                    </MenuItem>
                                    <MenuItem value="Yemen">Yemen</MenuItem>
                                    <MenuItem value="Zambia">Zambia</MenuItem>
                                    <MenuItem value="Zimbabwe">
                                        Zimbabwe
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                label="City"
                                value={city}
                                sx={{
                                    my: 2,
                                }}
                                onChange={(e) => setCity(e.target.value)}
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
                                label="Street name"
                                value={street_name}
                                sx={{
                                    my: 2,
                                }}
                                onChange={(e) => setStreetName(e.target.value)}
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
                                label="Address"
                                value={address}
                                sx={{
                                    my: 2,
                                }}
                                onChange={(e) => setAddress(e.target.value)}
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
                            <input
                                type="hidden"
                                name="role"
                                value={role}
                                onChange={(e) => setUserType(e.target.value)}
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
                                justifyContent: "space-between",
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
