import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./home-pages/Home";
import Cart from "./home-pages/Cart";
import Profile from "./customer-pages/CustomerAccount";
import Products from "./home-pages/Products";
import Product from "./home-pages/Product";
import Login from "./authentication/Login";
import CustomerRegister from "./authentication/customerAuth/CustomerRegister";
import VendorRegister from "./authentication/vendorAuth/VendorRegister";
import GuestRegister from "./authentication/guestAuth/GuestRegister";
import CheckOut from "./customer-pages/CheckOut";
import VendorAccount from "./vendors-pages/VendorAccount";
import VendorShop from "./vendors-pages/VendorShop";
import VendorWallet from "./vendors-pages/VendorWallet";
import VendorView from "./vendors-pages/VendorView";
import ShippingCalculator from "./vendors-pages/ShippingCalculator";
import NewLabel from "./vendors-pages/NewLabel";
import ShippingLabels from "./vendors-pages/ShippingLabels";
import Customs from "./vendors-pages/Customs";
import VendorPayments from "./vendors-pages/Payment";
import CustomerPayment from "./customer-pages/Payment";
import CustomerAccount from "./customer-pages/CustomerAccount";
import Favorites from "./customer-pages/Favorite";
import CustomerOrders from "./customer-pages/Orders";
import Order from "./customer-pages/Order";
import BulkUpload from "./vendors-pages/BulkUpload";
import GuestAccount from "./guest-pages/GuestAccount";
import GuestShipment from "./guest-pages/GuestShipment";
import GuestTransactions from "./guest-pages/GuestTransactions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import api from "./components/api";
import ProductUpdate from "./vendors-pages/ProductUpdate";
import SingleProductUpload from "./vendors-pages/SingleProductUpload";

// This function changes the overall color of the whole application
const theme = createTheme({
    palette: {
        primary: {
            light: "#979696",
            main: "#fff",
            dark: "#000",
            contrastText: "#C8A988",
        },
        secondary: {
            light: "#ff7961",
            main: "#C8A988",
            dark: "#5d4037",
            contrastText: "#fff",
        },
    },
});

const App = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get(`${api}/products/categories`).then((response) => {
            setCategories(response.data.data);
        });
        return () => console.log("clean up categories");
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Router>
                    <ToastContainer />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="login" element={<Login />} />
                        <Route
                            path="customer-register"
                            element={<CustomerRegister />}
                        />
                        <Route
                            path="vendor-register"
                            element={<VendorRegister />}
                        />
                        <Route
                            path="guest-register"
                            element={<GuestRegister />}
                        />
                        <Route path="profile" element={<Profile />} />
                        {/* <Route path="product" element={<Product />} /> */}
                        <Route path="products/:id/" element={<Product />} />
                        <Route path="products" element={<Products />} />
                        {categories.map((category) => (
                            <Route
                                path={category.name}
                                element={<Products />}
                                key={category.id}
                            />
                        ))}

                        <Route
                            path="vendor/:userId"
                            element={<VendorAccount />}
                        />
                        <Route path="vendor/Shop" element={<VendorShop />} />
                        <Route
                            path="vendor/Shop/product/:id"
                            element={<VendorView />}
                        />
                        <Route
                            path="vendor/Shop/:productId"
                            element={<ProductUpdate />}
                        />
                        <Route
                            path="vendor/Wallet"
                            element={<VendorWallet />}
                        />
                        <Route path="vendor/Label" element={<NewLabel />} />
                        <Route path="vendor/Customs" element={<Customs />} />
                        <Route
                            path="vendor/Payment"
                            element={<VendorPayments />}
                        />

                        <Route
                            path="vendor/Shipping"
                            element={<ShippingLabels />}
                        />
                        <Route
                            path="vendor/Calculator"
                            element={<ShippingCalculator />}
                        />
                        <Route
                            path="vendor/upload/bulk"
                            element={<BulkUpload />}
                        />
                        <Route
                            path="vendor/upload/single"
                            element={<SingleProductUpload />}
                        />
                        <Route
                            path="customer/:userId"
                            element={<CustomerAccount />}
                        />
                        <Route
                            path="customer/Favorites"
                            element={<Favorites />}
                        />
                        <Route
                            path="customer/Orders"
                            element={<CustomerOrders />}
                        />
                        <Route
                            path="customer/Order/:orderID"
                            element={<Order />}
                        />
                        <Route
                            path="customer/Checkout"
                            element={<CheckOut />}
                        />
                        <Route
                            path="customer/Payment"
                            element={<CustomerPayment />}
                        />
                        <Route
                            path="customer/Continue%20shopping"
                            element={<Products />}
                        />
                        <Route
                            path="guest/:userId"
                            element={<GuestAccount />}
                        />
                        <Route
                            path="guest/Shipment"
                            element={<GuestShipment />}
                        />
                        <Route
                            path="guest/Transactions"
                            element={<GuestTransactions />}
                        />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </ThemeProvider>
    );
};

export default App;
