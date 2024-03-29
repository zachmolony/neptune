import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import CheckoutPage from "./CheckoutPage";
import Cart from "./Cart";
import Products from "./components/Products";
import OrderStatusPage from "./OrderStatusPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="products" element={<Products />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="checkout" element={<CheckoutPage />}></Route>
        <Route path="status" element={<OrderStatusPage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
