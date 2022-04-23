import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./components/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
