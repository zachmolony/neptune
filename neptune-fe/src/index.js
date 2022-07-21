import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";

import StoreOwnerDashboard from "./pages/store/StoreOwnerDashboard";
import Orders from "./pages/store/Orders";

import DeveloperDashboard from "./pages/developer/Dashboard";
import Clients from "./pages/developer/Clients";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="store" element={<App />}>
        <Route path="dashboard" element={<StoreOwnerDashboard />}></Route>
        <Route path="orders" element={<Orders />}></Route>
      </Route>
      <Route path="developer" element={<App />}>
        <Route path="dashboard" element={<DeveloperDashboard />}></Route>
        <Route path="clients" element={<Clients />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
