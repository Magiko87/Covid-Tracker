/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import  "./Navbar.css"; 
import { Link } from "react-router-dom";
import routes from "../Routes/Routes";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false); // Dichiarazione e inizializzazione di isOpen

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""} ${isDarkMode ? "dark" : "light"}`}>
      <div className="navbar-content">
        <div className={`menu-toggle ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
          {routes.map((route, index) => (
            <li key={index} onClick={closeMenu}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Disattiva Dark Mode" : "Attiva Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;