import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./home-pages/Home";
import Cart from "./home-pages/Cart";
import Favorite from "./customer-pages/Favorite";
import Profile from "./customer-pages/CustomerAccount";
import Products from "./home-pages/Products";
import Product from "./home-pages/Product";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import CheckOut from "./customer-pages/CheckOut";
import VendorAccount from "./vendors-pages/VendorAccount";
import VendorShop from "./vendors-pages/VendorShop";
import VendorWallet from "./vendors-pages/VendorWallet";
import ShippingCalculator from "./vendors-pages/ShippingCalculator";
import NewLabel from "./vendors-pages/NewLabel";
import ShippingLabels from "./vendors-pages/ShippingLabels";
import Customs from "./vendors-pages/Customs";
import VendorPayments from "./vendors-pages/Payment";
import CustomerPayment from "./customer-pages/Payment";
import CustomerAccount from "./customer-pages/CustomerAccount"
import Favorites from "./customer-pages/Favorite"
import CustomerOrders from "./customer-pages/Orders"
import Order from "./customer-pages/Order"

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

// Remember to also change the list of pages in the Primary Navigation file too when you make changes to the pages array below
const pages = ["Clothing", "Jewellery", "Beauty", "Accessories"];
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="favorite" element={<Favorite />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="product" element={<Product />} />
                        <Route path="products" element={<Products />} />
                        {pages.map((page) => (
                            <Route
                                path={page}
                                element={<Products />}
                                key={page}
                            />
                        ))}
                        
                        <Route path="vendor" element={<VendorAccount />} />
                        <Route path="vendor/Shop" element={<VendorShop />} />
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
                            path="customer"
                            element={<CustomerAccount/>}
                        />
                        <Route
                            path="customer/Favorites"
                            element={<Favorites/>}
                        />
                        <Route
                            path="customer/Orders"
                            element={<CustomerOrders/>}
                        />
                        <Route
                            path="customer/Order"
                            element={<Order/>}
                        />
                        <Route
                            path="customer/Checkout"
                            element={<CheckOut />}
                        />
                        <Route
                            path="customer/Payment"
                            element={<CustomerPayment />}
                        />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </ThemeProvider>
    );
};

export default App;
