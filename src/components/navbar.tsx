import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper grey darken-1">
      <a href="/" className="brand-logo">
        Movie App
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
