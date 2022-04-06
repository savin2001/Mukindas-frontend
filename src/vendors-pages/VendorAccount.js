import React from "react";
// import PropTypes from 'prop-types'; to be used for upload
import VendorMenu from "../components/VendorMenu";
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
    // FormControl,
    // InputLabel,
    // Select,
    // MenuItem,
    // FilledInput,
    // IconButton,
    // FormGroup,
    // FormControlLabel,
    // Checkbox,
    // Button,
} from "@mui/material";

const VendorAccount = () => {
    // const [name, setName] = useState("");
    // const handleChange = (event) => {
    //     setName(event.target.value);
    // };
    return (
        <>
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 100 }}
            ></Container>
            <Container>
                <Grid
                    container
                    spacing={{ xs: 2, md: 1 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item xs={4} sm={8} md={3}>
                        <VendorMenu />
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
                                alt="Seller Pic"
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
                                                        id="filled-basic"
                                                        label="First name"
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
                                                        // value={name}
                                                        placeholder="Doe"
                                                        id="filled-basic"
                                                        label="Second name"
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
                                                        columnGap: 3,
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
                                                        // value={name}
                                                        placeholder="+254 712 345 678"
                                                        id="filled-basic"
                                                        label="Phone number"
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
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default VendorAccount;
