import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                toast.info(
                    `added ${
                        state.cartItems[itemIndex].cartQuantity
                    } more of ${action.payload.product.slice(
                        0,
                        15
                    )}... to cart `,
                    {
                        position: "bottom-left ",
                    }
                );
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                toast.success(
                    `added ${action.payload.product.slice(0, 15)} to cart`,
                    {
                        position: "bottom-left ",
                    }
                );
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
