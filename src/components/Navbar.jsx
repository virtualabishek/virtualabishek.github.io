import { nav } from "framer-motion/client";
import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center fixed top-3 w-full z-10">
      <div className="flex gap-1 p-0.5 border-white/15 border bg-white/10 backdrop-blur rounded-full">
        <HashLink to="/#home" className="nav-item">
          Home
        </HashLink>
        <HashLink to="/perspective" className="nav-item">
          Perspective
        </HashLink>
        <HashLink to="/#projects" className="nav-item">
          Projects
        </HashLink>
        {/* <HashLink to="/#about" className="nav-item">
          About
        </HashLink> */}
        <HashLink
          to="/#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </HashLink>
      </div>
    </nav>
  );
};

export default Navbar;
