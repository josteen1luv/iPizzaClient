import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import { store } from "./store/store";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";

import "./index.css";
import SinglePizza from "./pages/SinglePizza.jsx";
import CartIcon from "./components/CartIcon.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Success from "./pages/Success.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <CartIcon />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pizza/:id" element={<SinglePizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  </Provider>,
);
