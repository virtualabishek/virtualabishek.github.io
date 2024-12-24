import { nav } from "framer-motion/client";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center fixed top-3 w-full z-10">
      <div className="flex gap-1 p-0.5 border-white/15 border bg-white/10 backdrop-blur rounded-full">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
