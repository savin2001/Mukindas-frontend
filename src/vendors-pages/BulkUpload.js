import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    ListItem,
    List,
    IconButton,
    Slide,
} from "@mui/material";
import VendorSearchBar from "../components/VendorSearchBar";
import VendorMenu from "../components/VendorMenu";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Link, useNavigate } from "react-router-dom";
import BulkUploadExamplePic from "../media/BulkUploadExamplePic.png";
import Loading from "../components/Loading";
import axios from "axios";
import api from "../components/api";
import useFetch from "../components/useFetch";

const Input = styled("input")({
    display: "block",
});
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const BulkUpload = () => {
    const { data: categories } = useFetch(`${api}/products/categories`);
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    const vendorID = isLogInTrue.user.id;
    const vendorToken = isLogInTrue.user.token;
    const [error, setError] = useState("");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState("");
    const [array, setArray] = useState([]);

    const fileReader = new FileReader();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    const csvFileToArray = (string, delimiter = ",") => {
        const csvHeader = string
            .slice(0, string.indexOf("\r\n"))
            .split(delimiter);
        const csvRows = string.slice(string.indexOf("\r\n") + 1).split("\r\n");

        const array = csvRows.map((row) => {
            const values = row.split(delimiter);
            const obj = csvHeader.reduce((object, header, index) => {
                object[header] = values[index];
                return object;
            }, {});
            return obj;
        });
        localStorage.setItem("bulkUpload", JSON.stringify(array));
        handleClose();
        return setArray(array);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (file) {
            fileReader.onload = function (event) {
                const text = event.target.result;
                csvFileToArray(text);
            };

            fileReader.readAsText(file);
        }
    };
    const handleBulkUpload = (e) => {
        e.preventDefault();

        // confirm if the array has content or is empty
        if (array.length > 0) {
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${vendorToken}`,
            };

            // Take the bulk pload array from local storage
            const BulkUploadArray = JSON.parse(
                localStorage.getItem("bulkUpload")
            );

            // Accessing each product
            BulkUploadArray.forEach((product) => {
                // Adding vendor ID to each product
                product["vendor"] = vendorID;
                // product['price'] = product['"price"'];
                const categoriesArray = categories;
                // checking if the category names in the array from csv matches categories in the system
                const isFound = categoriesArray.some((categoryObject) => {
                    if (product.category === categoryObject.name) {
                        return true;
                    }
                    return false;
                });

                // If the product
                if (isFound) {
                    categoriesArray.forEach((categoryObject) => {
                        if (product.category === categoryObject.name) {
                            // Assigning the category name to its equivalent ID
                            product.category = categoryObject.id;

                            const payload = product;
                            axios
                                .post(
                                    `${api}/products/product`,
                                    payload,
                                    {
                                        headers,
                                    },
                                    {
                                        onUploadProgress: (progressEvent) => {
                                            setIsPending(true);
                                        },
                                    }
                                )
                                .then((response) => {
                                    console.log(response);
                                    localStorage.removeItem("bulkUpload");
                                    navigate("/vendor/Shop");
                                    setIsPending(false);
                                })
                                .catch((error) =>
                                    setError(error.response.data.message)
                                );
                            return console.log(payload);
                        }
                        return null;
                    });
                } else {
                    setError("Kindly confirm if your product category is okay");
                }
            });
        }
    };

    const headerKeys = Object.keys(Object.assign({}, ...array));

    return (
        <>
            {isLogInTrue &&
            isLogInTrue.userLogin &&
            isLogInTrue.user.role === "vendor" ? (
                <>
                    <VendorSearchBar />
                    <Container
                        sx={{ flexGrow: 1, width: "100%", height: 100 }}
                    ></Container>

                    {isPending && <Loading />}
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
                                <VendorMenu />
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
                                            Products upload
                                        </Typography>
                                    </Box>
                                    <Box sx={{ width: "100%" }}>
                                        <Grid
                                            container
                                            width="100%"
                                            spacing={{ xs: 1, md: 1 }}
                                            columns={{ xs: 6, sm: 8, md: 12 }}
                                        >
                                            <Grid item xs={6} sm={8} md={6}>
                                                <Box
                                                    sx={{
                                                        p: 1,
                                                        m: 1,
                                                        columnGap: 3,
                                                        rowGap: 1,
                                                        width: "100%",
                                                    }}
                                                >
                                                    <Button
                                                        size="large"
                                                        variant="contained"
                                                        color="secondary"
                                                        component="span"
                                                        onClick={
                                                            handleClickOpen
                                                        }
                                                        startIcon={
                                                            <DriveFolderUploadIcon />
                                                        }
                                                    >
                                                        Bulk Product Upload
                                                    </Button>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={6} sm={8} md={6}>
                                                <Box
                                                    sx={{
                                                        p: 1,
                                                        m: 1,
                                                        columnGap: 3,
                                                        rowGap: 1,
                                                    }}
                                                >
                                                    <label htmlFor="contained-button-file">
                                                        <Link
                                                            to={`/vendor/upload/single`}
                                                            style={{
                                                                textDecoration:
                                                                    "none",
                                                                color: "inherit",
                                                            }}
                                                        >
                                                            <Button
                                                                size="large"
                                                                variant="outlined"
                                                                color="secondary"
                                                                component="span"
                                                                startIcon={
                                                                    <UploadFileIcon />
                                                                }
                                                            >
                                                                Single Product
                                                                Upload
                                                            </Button>
                                                        </Link>
                                                    </label>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box
                                        sx={{
                                            textAlign: "left",
                                            width: "98%",
                                            height: "10%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            p: 2,
                                            mb: 2,
                                            borderRadius: 2,
                                        }}
                                    >
                                        <TableContainer component={Paper}>
                                            <Table aria-label="spanning table">
                                                <TableHead>
                                                    <TableRow
                                                        sx={{
                                                            backgroundColor:
                                                                "secondary.main",
                                                        }}
                                                    >
                                                        {headerKeys.map(
                                                            (key) => (
                                                                <TableCell>
                                                                    <Typography
                                                                        variant="h6"
                                                                        color="white"
                                                                        sx={{
                                                                            textAlign:
                                                                                "left",
                                                                        }}
                                                                        key={
                                                                            key
                                                                        }
                                                                    >
                                                                        {key}
                                                                    </Typography>
                                                                </TableCell>
                                                            )
                                                        )}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {array.map((item) => (
                                                        <TableRow key={item.id}>
                                                            {Object.values(
                                                                item
                                                            ).map((val) => (
                                                                <TableCell>
                                                                    <Typography
                                                                        variant="body1"
                                                                        sx={{
                                                                            mb: 1,
                                                                        }}
                                                                        key={
                                                                            val
                                                                        }
                                                                    >
                                                                        {val}
                                                                    </Typography>
                                                                </TableCell>
                                                            ))}
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Box>
                                    {array.length === 0 ? (
                                        <>
                                            {error && (
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                        fontSize: "30px",
                                                        background: "#c20f00",
                                                    }}
                                                >
                                                    {error}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            <Box sx={{ width: "100%" }}>
                                                <ListItem>
                                                    <Button
                                                        fullWidth
                                                        size="small"
                                                        variant="contained"
                                                        color="secondary"
                                                        bgcolor="secondary"
                                                        onClick={(e) => {
                                                            handleBulkUpload(e);
                                                        }}
                                                        startIcon={<SendIcon />}
                                                    >
                                                        Add the products
                                                    </Button>
                                                </ListItem>
                                            </Box>
                                        </>
                                    )}
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                    <Dialog
                        fullScreen
                        TransitionComponent={Transition}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <DialogTitle id="alert-dialog-title">
                                Choose your CSV file
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    The structure of the CSV should be as shown
                                    in the example below.
                                    <br />
                                    <strong>
                                        <i>
                                            Ensure there are no commas in the
                                            fields and that the heading fields
                                            of your CSV file are exactly as
                                            shown
                                        </i>
                                    </strong>
                                </DialogContentText>
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
                                    <CardMedia
                                        component="img"
                                        image={BulkUploadExamplePic}
                                        alt="Bulk upload structure"
                                    />
                                </Card>
                            </DialogContent>
                            <DialogActions>
                                <Box sx={{ maxWidth: "560px" }}>
                                    <List>
                                        <ListItem>
                                            <label htmlFor="contained-button-file">
                                                <Input
                                                    accept=".csv*"
                                                    id="contained-button-file"
                                                    onChange={handleOnChange}
                                                    type="file"
                                                />
                                                <Button
                                                    variant="contained"
                                                    component="span"
                                                    startIcon={
                                                        <UploadFileIcon />
                                                    }
                                                    onClick={(e) => {
                                                        handleOnSubmit(e);
                                                    }}
                                                >
                                                    Upload CSV file
                                                </Button>
                                            </label>
                                        </ListItem>
                                    </List>
                                </Box>
                            </DialogActions>
                        </Box>
                    </Dialog>
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
                                <span>Log into your account</span>
                            </Typography>
                        </Link>
                    </Box>
                </Container>
            )}
        </>
    );
};

export default BulkUpload;
