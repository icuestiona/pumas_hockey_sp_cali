import React from "react";
import { navigation } from "../constants/navigation";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navigation.map((item, index) => (
          <li key={index} className="nav-item">
            <a href={item.path} className="nav-link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
