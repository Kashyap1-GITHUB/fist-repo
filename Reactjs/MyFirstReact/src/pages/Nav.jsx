import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 font-thin">
        <NavLink className={(e) => (e.isActive ? "text-blue-500 " : "")} to="/">
          Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-blue-500 " : "")}
          to="/Recipies"
        >
          Recipies
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-blue-500 " : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-blue-500 " : "")}
          to="/creatRespies"
        >
        <button className="px-4 py-2 bg-gray-700 rounded-1xl">  Creat Respies</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
