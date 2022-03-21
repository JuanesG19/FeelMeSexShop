import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "../components/Products";
import Homepage from "./Homepage";

const RouteDom = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteDom;
