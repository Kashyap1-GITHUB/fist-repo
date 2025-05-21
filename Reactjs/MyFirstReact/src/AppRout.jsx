import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./RoutComponent/Home";
import About from "./RoutComponent/About";
import Product from "./RoutComponent/Product";
import Servies from "./RoutComponent/Servies";
import Nav from "./RoutComponent/Nav";

const AppRout = () => {
  return (
    <div className="h-screen w-screen text-emerald-50 bg-black">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/servies" element={<Servies />} />
          <Route path="/about" element={<About />} />
        </Routes>   
    </div>
  );
};

export default AppRout;
