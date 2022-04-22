import React from "react";
// import PropTypes from 'prop-types'; to be used for upload
import GuestMenu from "../components/GuestMenu";
import GuestSearchBar from "../components/GuestSearchBar";
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

const GuestAccount = () => {
    // const [name, setName] = useState("");
    // const handleChange = (event) => {
    //     setName(event.target.value);
    // };
    return (
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
                    <Grid item sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }} md={3}>
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
                                                        alignItems: "center",
                                                        columnGap: 1,
                                                        rowGap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{ flexGrow: 1 }}
                                                    >
                                                        Country
                                                    </Typography>
                                                    <TextField
                                                        sx={{ flexGrow: 1 }}
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
                                                        alignItems: "center",
                                                        columnGap: 1,
                                                        rowGap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{ flexGrow: 1 }}
                                                    >
                                                        City
                                                    </Typography>
                                                    <TextField
                                                        sx={{ flexGrow: 1 }}
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
                                                        alignItems: "center",
                                                        columnGap: 1,
                                                        rowGap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{ flexGrow: 1 }}
                                                    >
                                                        Address
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            flexGrow: 1,
                                                            display: "flex",
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
                                                        alignItems: "center",
                                                        columnGap: 3,
                                                        rowGap: 1,
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{ flexGrow: 1 }}
                                                    >
                                                        Street name
                                                    </Typography>
                                                    <TextField
                                                        sx={{ flexGrow: 1 }}
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

export default GuestAccount;
