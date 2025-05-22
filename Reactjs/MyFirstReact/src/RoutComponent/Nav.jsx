import React from "react";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-center gap-20 bg-black text-white">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/servies">Servies</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Nav;
