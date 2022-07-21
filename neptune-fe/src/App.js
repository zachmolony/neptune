import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Outlet } from "react-router";

export default function App() {
  return (
    <div className="bg-gray w-full h-screen flex">
      <div
        className="w-1/5 h-full"
        style={{ minWidth: "280px", maxWidth: "505px" }}
      >
        <Navbar />
      </div>
      <div className="w-4/5 h-full">
        <Outlet />
      </div>
    </div>
  );
}
