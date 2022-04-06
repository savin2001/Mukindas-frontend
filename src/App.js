import { createTheme, ThemeProvider } from "@mui/material/styles";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./home-pages/Home";
import Cart from "./home-pages/Cart";
import Favorite from "./customer-pages/Favorite";
import Profile from "./customer-pages/Profile";
import Products from "./home-pages/Products";
import Product from "./home-pages/Product";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Checkout from "./home-pages/Checkout";
import VendorAccount from "./vendors-pages/VendorAccount";
import VendorShop from "./vendors-pages/VendorShop";
import VendorWallet from "./vendors-pages/VendorWallet";
import ShippingCalculator from "./vendors-pages/ShippingCalculator";
import NewLabel from "./vendors-pages/NewLabel";
import ShippingLabels from "./vendors-pages/ShippingLabels";
import Customs from "./vendors-pages/Customs";
import VendorPayments from "./vendors-pages/Payment"

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
                    <PrimarySearchAppBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="checkout" element={<Checkout />} />
                        <Route path="favorite" element={<Favorite />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="products" element={<Products />} />
                        <Route path="product" element={<Product />} />
                        <Route path="vendor" element={<VendorAccount />} />
                        <Route path="vendor/my-shop" element={<VendorShop />} />
                        <Route path="vendor/my-wallet" element={<VendorWallet />} />
                        <Route path="vendor/new-label" element={<NewLabel />} />
                        <Route path="vendor/customs" element={<Customs />} />
                        <Route path="vendor/payment" element={<VendorPayments />} />
                        <Route
                            path="vendor/shipping-labels"
                            element={<ShippingLabels />}
                        />
                        <Route
                            path="vendor/shipping-calculator"
                            element={<ShippingCalculator />}
                        />
                        {pages.map((page) => (
                            <Route
                                path={page}
                                element={<Products />}
                                key={page}
                            />
                        ))}
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </ThemeProvider>
    );
};

export default App;
