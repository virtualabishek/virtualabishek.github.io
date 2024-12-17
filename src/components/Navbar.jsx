import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="text-xl px-2 font-bold">Abishek Neupane</div>
        <div className="flex-row">
          <ul>
            <li>
              <NavLink to="/">
                <li>About</li>
              </NavLink>
            </li>
            <li>
              <NavLink>
                {" "}
                <li>Skills</li>Skills
              </NavLink>
              <NavLink>
                {" "}
                <li>Hero</li>
              </NavLink>
              <NavLink>
                {" "}
                <li>Services</li>Hero
              </NavLink>
              <NavLink>
                {" "}
                <li>Contact</li>Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
