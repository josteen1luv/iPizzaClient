import { configureStore } from "@reduxjs/toolkit";
import { pizzaApiSlice } from "./pizzaApiSlice.js";
import cart from "./cartSlice.js";

export const store = configureStore({
    reducer: {
        [pizzaApiSlice.reducerPath]: pizzaApiSlice.reducer,
        cart
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pizzaApiSlice.middleware),
});
