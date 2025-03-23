import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  },
  orderedPizzas: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza: (state, action) => {
      state.orderedPizzas.push(action.payload);
    },
    resetCart: (state) => {
      state.orderedPizzas = [];
      state.address = {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      };
    },
  },
});

export const { addPizza, resetCart } = cartSlice.actions;

export const selectCartInfo = (state) => state.cart;
export const selectCartPizzas = (state) => state.cart.orderedPizzas;

export default cartSlice.reducer;
