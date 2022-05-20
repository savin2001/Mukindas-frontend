import React, { useState } from "react";
import api from "../components/api";
import { styled } from "@mui/material/styles";
import {
    Container,
    Button,
    Dialog,
    DialogTitle,
    ListItem,
    TextField,
    Box,
    List,
    Typography,
    Slide,
    IconButton,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Loading from "../components/Loading";
import { Link, useNavigate } from "react-router-dom";
import VendorSearchBar from "../components/VendorSearchBar";
import axios from "axios";
import useFetch from "../components/useFetch";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Input = styled("input")({
    display: "none",
});

// Image size
const bytesToSize = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const SingleProductUpload = () => {
    const { data: categories } = useFetch(`${api}/products/categories`);
    const isLogInTrue = JSON.parse(localStorage.getItem("login"));
    const vendorID = isLogInTrue.user.id;
    const vendorToken = isLogInTrue.user.token;

    const [isFilePicked, setIsFilePicked] = useState(false);
    const [imageInfo, setImageInfo] = useState();
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const handleClose = () => {
        navigate("/vendor/upload/bulk");
        setOpen(false);
    };

    const [error, setError] = useState("");
    const [isPending, setIsPending] = useState(false);
    const [category, setCategory] = useState("");
    const [currency, setCurrency] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [vendor, setVendorName] = useState(vendorID);

    const changeHandler = (event) => {
        const [file] = event.target.files;
        setImageInfo(URL.createObjectURL(file));
        console.log(imageInfo)
        setImage(event.target.files[0]);        
        setIsFilePicked(true);
    };

    const handleAddNewProduct = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("vendor", vendor);
        formData.append("category", category);
        formData.append("name", name);
        formData.append("image", image);
        formData.append("description", description);
        formData.append("quantity", quantity);
        formData.append("currency", currency);
        formData.append("price", price);
        const headers = {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${vendorToken}`,
        };
        axios
            .post(`${api}/products/product`, formData, {
                headers,
            })
            .then((response) => {
                console.log("The form data is" + formData);
                console.log(response);
                setIsPending(true);
                setError("");
                setCategory("");
                setCurrency("");
                setDescription("");
                setImage("");
                setName("");
                setPrice("");
                setQuantity("");
                setVendorName("");
                navigate("/vendor/Shop");
            })
            .catch((error) => setError(error.response.message));
    };
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
                    {error && (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "30px",
                                background: "#c20f00",
                            }}
                        >
                            {error}
                        </div>
                    )}
                    <>
                        <Dialog
                            fullScreen
                            TransitionComponent={Transition}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            {error && (
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: "30px",
                                        background: "#c20f00",
                                    }}
                                >
                                    {error}
                                </div>
                            )}
                            {isPending && <Loading />}
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={handleClose}
                                    aria-label="close"
                                >
                                    <CloseIcon />
                                </IconButton>
                                <DialogTitle id="alert-dialog-title">
                                    Input product details
                                </DialogTitle>
                                <Box sx={{ width: "80%", maxWidth: "760px" }}>
                                    <List>
                                        <ListItem>
                                            <TextField
                                                fullWidth
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                required
                                                label="Product name"
                                                variant="filled"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                fullWidth
                                                required
                                                value={description}
                                                multiline
                                                maxRows={6}
                                                onChange={(e) =>
                                                    setDescription(
                                                        e.target.value
                                                    )
                                                }
                                                label="Product description"
                                                variant="filled"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <FormControl
                                                variant="filled"
                                                fullWidth
                                            >
                                                <InputLabel id="demo-simple-select-label">
                                                    Category
                                                </InputLabel>
                                                {categories && (
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={category}
                                                        required
                                                        label="Age"
                                                        onChange={(e) =>
                                                            setCategory(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        {categories.map(
                                                            (category) => (
                                                                <MenuItem
                                                                    value={
                                                                        category.id
                                                                    }
                                                                    key={
                                                                        category.id
                                                                    }
                                                                >
                                                                    {
                                                                        category.name
                                                                    }
                                                                </MenuItem>
                                                            )
                                                        )}
                                                    </Select>
                                                )}
                                            </FormControl>
                                        </ListItem>
                                        <ListItem>
                                            <FormControl
                                                variant="filled"
                                                fullWidth
                                            >
                                                <InputLabel id="demo-simple-select-label">
                                                    Currency
                                                </InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    required
                                                    value={currency}
                                                    label="Age"
                                                    onChange={(e) =>
                                                        setCurrency(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <MenuItem
                                                        value="AFN"
                                                        label="Afghan afghani"
                                                    >
                                                        AFN
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="ALL"
                                                        label="Albanian lek"
                                                    >
                                                        ALL
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="DZD"
                                                        label="Algerian dinar"
                                                    >
                                                        DZD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="AOA"
                                                        label="Angolan kwanza"
                                                    >
                                                        AOA
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="ARS"
                                                        label="Argentine peso"
                                                    >
                                                        ARS
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="AMD"
                                                        label="Armenian dram"
                                                    >
                                                        AMD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="AWG"
                                                        label="Aruban florin"
                                                    >
                                                        AWG
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="AUD"
                                                        label="Australian dollar"
                                                    >
                                                        AUD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="AZN"
                                                        label="Azerbaijani manat"
                                                    >
                                                        AZN
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="BHD"
                                                        label="Bahraini dinar"
                                                    >
                                                        BHD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="BSD"
                                                        label="Bahamian dollar"
                                                    >
                                                        BSD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="BDT"
                                                        label="Bangladeshi taka"
                                                    >
                                                        BDT
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="BBD"
                                                        label="Barbadian dollar"
                                                    >
                                                        BBD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="BYN"
                                                        label="Belarusian ruble"
                                                    >
                                                        BYN
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="BZD"
                                                        label="Belize dollar"
                                                    >
                                                        BZD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="BMD"
                                                        label="Bermudian dollar"
                                                    >
                                                        BMD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="BTN"
                                                        label="Bhutanese ngultrum"
                                                    >
                                                        BTN
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="BOB"
                                                        label="Bolivian boliviano"
                                                    >
                                                        BOB
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="BAM"
                                                        label="Bosnia and Herzegovina convertible mark"
                                                    >
                                                        BAM
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="BWP"
                                                        label="Botswana pula"
                                                    >
                                                        BWP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="BRL"
                                                        label="Brazilian real"
                                                    >
                                                        BRL
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="GBP"
                                                        label="British pound"
                                                    >
                                                        GBP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="BND"
                                                        label="Brunei dollar"
                                                    >
                                                        BND
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="MMK"
                                                        label="Burmese kyat"
                                                    >
                                                        MMK
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="BIF"
                                                        label="Burundian franc"
                                                    >
                                                        BIF
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="KHR"
                                                        label="Cambodian riel"
                                                    >
                                                        KHR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="CAD"
                                                        label="Canadian dollar"
                                                    >
                                                        CAD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="CVE"
                                                        label="Cape Verdean escudo"
                                                    >
                                                        CVE
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="KYD"
                                                        label="Cayman Islands dollar"
                                                    >
                                                        KYD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="XAF"
                                                        label="Central African CFA franc"
                                                    >
                                                        XAF
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="XPF"
                                                        label="CFP franc"
                                                    >
                                                        XPF
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="CLP"
                                                        label="Chilean peso"
                                                    >
                                                        CLP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="CNY"
                                                        label="Chinese yuan"
                                                    >
                                                        CNY
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="COP"
                                                        label="Colombian peso"
                                                    >
                                                        COP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="KMF"
                                                        label="Comorian franc"
                                                    >
                                                        KMF
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="CDF"
                                                        label="Congolese franc"
                                                    >
                                                        CDF
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="CRC"
                                                        label="Costa Rican colón"
                                                    >
                                                        CRC
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="HRK"
                                                        label="Croatian kuna"
                                                    >
                                                        HRK
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="CUC"
                                                        label="Cuban convertible peso"
                                                    >
                                                        CUC
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="CUP"
                                                        label="Cuban peso"
                                                    >
                                                        CUP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="CZK"
                                                        label="Czech koruna"
                                                    >
                                                        CZK
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="DKK"
                                                        label="Danish krone"
                                                    >
                                                        DKK
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="DOP"
                                                        label="Dominican peso"
                                                    >
                                                        DOP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="DJF"
                                                        label="Djiboutian franc"
                                                    >
                                                        DJF
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="XCD"
                                                        label="Eastern Caribbean dollar"
                                                    >
                                                        XCD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="EGP"
                                                        label="Egyptian pound"
                                                    >
                                                        EGP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="ERN"
                                                        label="Eritrean nakfa"
                                                    >
                                                        ERN
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="ETB"
                                                        label="Ethiopian birr"
                                                    >
                                                        ETB
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="EUR"
                                                        label="Euro"
                                                    >
                                                        EUR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="FKP"
                                                        label="Falkland Islands pound"
                                                    >
                                                        FKP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="FJD"
                                                        label="Fijian dollar"
                                                    >
                                                        FJD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="GMD"
                                                        label="Gambian dalasi"
                                                    >
                                                        GMD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="GEL"
                                                        label="Georgian lari"
                                                    >
                                                        GEL
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="GHS"
                                                        label="Ghanaian cedi"
                                                    >
                                                        GHS
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="GIP"
                                                        label="Gibraltar pound"
                                                    >
                                                        GIP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="GTQ"
                                                        label="Guatemalan quetzal"
                                                    >
                                                        GTQ
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="GGP"
                                                        label="Guernsey pound"
                                                    >
                                                        GGP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="GNF"
                                                        label="Guinean franc"
                                                    >
                                                        GNF
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="GYD"
                                                        label="Guyanese dollar"
                                                    >
                                                        GYD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="HTG"
                                                        label="Haitian gourde"
                                                    >
                                                        HTG
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="HNL"
                                                        label="Honduran lempira"
                                                    >
                                                        HNL
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="HKD"
                                                        label="Hong Kong dollar"
                                                    >
                                                        HKD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="HUF"
                                                        label="Hungarian forint"
                                                    >
                                                        HUF
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="ISK"
                                                        label="Icelandic króna"
                                                    >
                                                        ISK
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="INR"
                                                        label="Indian rupee"
                                                    >
                                                        INR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="IDR"
                                                        label="Indonesian rupiah"
                                                    >
                                                        IDR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="IRR"
                                                        label="Iranian rial"
                                                    >
                                                        IRR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="IQD"
                                                        label="Iraqi dinar"
                                                    >
                                                        IQD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="ILS"
                                                        label="Israeli new shekel"
                                                    >
                                                        ILS
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="JMD"
                                                        label="Jamaican dollar"
                                                    >
                                                        JMD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="JPY"
                                                        label="Japanese yen"
                                                    >
                                                        JPY
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="JEP"
                                                        label="Jersey pound"
                                                    >
                                                        JEP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="JOD"
                                                        label="Jordanian dinar"
                                                    >
                                                        JOD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="KZT"
                                                        label="Kazakhstani tenge"
                                                    >
                                                        KZT
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="KES"
                                                        label="Kenyan shilling"
                                                    >
                                                        KES
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="KID"
                                                        label="Kiribati dollar"
                                                    >
                                                        KID
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="KGS"
                                                        label="Kyrgyzstani som"
                                                    >
                                                        KGS
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="KWD"
                                                        label="Kuwaiti dinar"
                                                    >
                                                        KWD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="LAK"
                                                        label="Lao kip"
                                                    >
                                                        LAK
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="LBP"
                                                        label="Lebanese pound"
                                                    >
                                                        LBP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="LSL"
                                                        label="Lesotho loti"
                                                    >
                                                        LSL
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="LRD"
                                                        label="Liberian dollar"
                                                    >
                                                        LRD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="LYD"
                                                        label="Libyan dinar"
                                                    >
                                                        LYD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="MOP"
                                                        label="Macanese pataca"
                                                    >
                                                        MOP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="MKD"
                                                        label="Macedonian denar"
                                                    >
                                                        MKD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="MGA"
                                                        label="Malagasy ariary"
                                                    >
                                                        MGA
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="MWK"
                                                        label="Malawian kwacha"
                                                    >
                                                        MWK
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="MYR"
                                                        label="Malaysian ringgit"
                                                    >
                                                        MYR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="MVR"
                                                        label="Maldivian rufiyaa"
                                                    >
                                                        MVR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="IMP"
                                                        label="Manx pound"
                                                    >
                                                        IMP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="MRU"
                                                        label="Mauritanian ouguiya"
                                                    >
                                                        MRU
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="MUR"
                                                        label="Mauritian rupee"
                                                    >
                                                        MUR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="MXN"
                                                        label="Mexican peso"
                                                    >
                                                        MXN
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="MDL"
                                                        label="Moldovan leu"
                                                    >
                                                        MDL
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="MNT"
                                                        label="Mongolian tögrög"
                                                    >
                                                        MNT
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="MAD"
                                                        label="Moroccan dirham"
                                                    >
                                                        MAD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="MZN"
                                                        label="Mozambican metical"
                                                    >
                                                        MZN
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="NAD"
                                                        label="Namibian dollar"
                                                    >
                                                        NAD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="NPR"
                                                        label="Nepalese rupee"
                                                    >
                                                        NPR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="ANG"
                                                        label="Netherlands Antillean guilder"
                                                    >
                                                        ANG
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="TWD"
                                                        label="New Taiwan dollar"
                                                    >
                                                        TWD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="NZD"
                                                        label="New Zealand dollar"
                                                    >
                                                        NZD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="NIO"
                                                        label="Nicaraguan córdoba"
                                                    >
                                                        NIO
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="NGN"
                                                        label="Nigerian naira"
                                                    >
                                                        NGN
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="KPW"
                                                        label="North Korean won"
                                                    >
                                                        KPW
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="NOK"
                                                        label="Norwegian krone"
                                                    >
                                                        NOK
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="OMR"
                                                        label="Omani rial"
                                                    >
                                                        OMR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="PKR"
                                                        label="Pakistani rupee"
                                                    >
                                                        PKR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="PAB"
                                                        label="Panamanian balboa"
                                                    >
                                                        PAB
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="PGK"
                                                        label="Papua New Guinean kina"
                                                    >
                                                        PGK
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="PYG"
                                                        label="Paraguayan guaraní"
                                                    >
                                                        PYG
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="PEN"
                                                        label="Peruvian sol"
                                                    >
                                                        PEN
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="PHP"
                                                        label="Philippine peso"
                                                    >
                                                        PHP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="PLN"
                                                        label="Polish złoty"
                                                    >
                                                        PLN
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="QAR"
                                                        label="Qatari riyal"
                                                    >
                                                        QAR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="RON"
                                                        label="Romanian leu"
                                                    >
                                                        RON
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="RUB"
                                                        label="Russian ruble"
                                                    >
                                                        RUB
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="RWF"
                                                        label="Rwandan franc"
                                                    >
                                                        RWF
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="SHP"
                                                        label="Saint Helena pound"
                                                    >
                                                        SHP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="WST"
                                                        label="Samoan tālā"
                                                    >
                                                        WST
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="STN"
                                                        label="São Tomé and Príncipe dobra"
                                                    >
                                                        STN
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="SAR"
                                                        label="Saudi riyal"
                                                    >
                                                        SAR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="RSD"
                                                        label="Serbian dinar"
                                                    >
                                                        RSD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="SLL"
                                                        label="Sierra Leonean leone"
                                                    >
                                                        SLL
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="SGD"
                                                        label="Singapore dollar"
                                                    >
                                                        SGD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="SOS"
                                                        label="Somali shilling"
                                                    >
                                                        SOS
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="SLS"
                                                        label="Somaliland shilling"
                                                    >
                                                        SLS
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="ZAR"
                                                        label="South African rand"
                                                    >
                                                        ZAR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="KRW"
                                                        label="South Korean won"
                                                    >
                                                        KRW
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="SSP"
                                                        label="South Sudanese pound"
                                                    >
                                                        SSP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="SRD"
                                                        label="Surinamese dollar"
                                                    >
                                                        SRD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="SEK"
                                                        label="Swedish krona"
                                                    >
                                                        SEK
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="CHF"
                                                        label="Swiss franc"
                                                    >
                                                        CHF
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="LKR"
                                                        label="Sri Lankan rupee"
                                                    >
                                                        LKR
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="SZL"
                                                        label="Swazi lilangeni"
                                                    >
                                                        SZL
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="SYP"
                                                        label="Syrian pound"
                                                    >
                                                        SYP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="TJS"
                                                        label="Tajikistani somoni"
                                                    >
                                                        TJS
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="TZS"
                                                        label="Tanzanian shilling"
                                                    >
                                                        TZS
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="THB"
                                                        label="Thai baht"
                                                    >
                                                        THB
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="TOP"
                                                        label="Tongan paʻanga"
                                                    >
                                                        TOP
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="PRB"
                                                        label="Transnistrian ruble"
                                                    >
                                                        PRB
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="TTD"
                                                        label="Trinidad and Tobago dollar"
                                                    >
                                                        TTD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="TND"
                                                        label="Tunisian dinar"
                                                    >
                                                        TND
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="TRY"
                                                        label="Turkish lira"
                                                    >
                                                        TRY
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="TMT"
                                                        label="Turkmenistan manat"
                                                    >
                                                        TMT
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="TVD"
                                                        label="Tuvaluan dollar"
                                                    >
                                                        TVD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="UGX"
                                                        label="Ugandan shilling"
                                                    >
                                                        UGX
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="UAH"
                                                        label="Ukrainian hryvnia"
                                                    >
                                                        UAH
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="AED"
                                                        label="United Arab Emirates dirham"
                                                    >
                                                        AED
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="USD"
                                                        label="United States dollar"
                                                    >
                                                        USD
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="UYU"
                                                        label="Uruguayan peso"
                                                    >
                                                        UYU
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="UZS"
                                                        label="Uzbekistani soʻm"
                                                    >
                                                        UZS
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="VUV"
                                                        label="Vanuatu vatu"
                                                    >
                                                        VUV
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="VES"
                                                        label="Venezuelan bolívar soberano"
                                                    >
                                                        VES
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="VND"
                                                        label="Vietnamese đồng"
                                                    >
                                                        VND
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="XOF"
                                                        label="West African CFA franc"
                                                    >
                                                        XOF
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="ZMW"
                                                        label="Zambian kwacha"
                                                    >
                                                        ZMW
                                                    </MenuItem>
                                                    <MenuItem
                                                        value="ZWB"
                                                        label="Zimbabwean bonds"
                                                    >
                                                        ZWB
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                fullWidth
                                                required
                                                value={price}
                                                type="number"
                                                onChange={(e) =>
                                                    setPrice(e.target.value)
                                                }
                                                label="Price"
                                                variant="filled"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                fullWidth
                                                required
                                                value={quantity}
                                                type="number"
                                                onChange={(e) =>
                                                    setQuantity(e.target.value)
                                                }
                                                label="Quantity"
                                                variant="filled"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <label
                                                htmlFor="contained-button-file"
                                                style={{
                                                    width: "100%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <Input
                                                    required
                                                    accept=".jpeg, .png, or .jpg"
                                                    id="contained-button-file"
                                                    multiple
                                                    type="file"
                                                    onChange={changeHandler}
                                                />
                                                {isFilePicked ? (
                                                    <Box
                                                        sx={{
                                                            width: "80%",
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            alignItems:
                                                                "center",
                                                            justifyContent:
                                                                "center",
                                                        }}
                                                    >
                                                        <CardMedia
                                                            component="img"
                                                            image={imageInfo}
                                                            alt={image.name}
                                                        />
                                                        <p>
                                                            Filename:{" "}
                                                            {image.name}
                                                        </p>

                                                        <p>
                                                            Size :
                                                            {bytesToSize(
                                                                image.size
                                                            )}
                                                        </p>
                                                        <Button
                                                            width="100%"
                                                            size="large"
                                                            variant="outlined"
                                                            color="secondary"
                                                            startIcon={
                                                                <AddPhotoAlternateIcon />
                                                            }
                                                            component="span"
                                                        >
                                                            Change the product
                                                            image
                                                        </Button>
                                                    </Box>
                                                ) : (
                                                    <Box
                                                        sx={{
                                                            width: "80%",
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            alignItems:
                                                                "center",
                                                            justifyContent:
                                                                "center",
                                                        }}
                                                    >
                                                        <Button
                                                            width="100%"
                                                            size="large"
                                                            variant="outlined"
                                                            color="secondary"
                                                            startIcon={
                                                                <AddPhotoAlternateIcon />
                                                            }
                                                            component="span"
                                                        >
                                                            Upload the product
                                                            image
                                                        </Button>
                                                    </Box>
                                                )}
                                            </label>
                                        </ListItem>
                                        <ListItem>
                                            <Button
                                                fullWidth
                                                size="small"
                                                variant="contained"
                                                color="secondary"
                                                bgcolor="secondary"
                                                onClick={handleAddNewProduct}
                                            >
                                                Add product
                                            </Button>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                        </Dialog>
                    </>
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

export default SingleProductUpload;
