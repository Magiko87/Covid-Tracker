/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import routes from '../Routes/Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle"



const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>

      <div className="navbar-content  ">
        {/* Icona per la modalità scura (sole/luna) */}
        <DarkModeToggle  toggleDarkMode={toggleDarkMode} />
        
        {/* Icona per il burger (apri/chiudi il menu) */}
        <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
             <div className={`bar ${isOpen && isDarkMode ? 'open dark-mode' : isOpen ? 'open' : isDarkMode ? 'dark-mode' : ''}`}></div>
            <div className={`bar ${isOpen && isDarkMode ? 'open dark-mode' : isOpen ? 'open' : isDarkMode ? 'dark-mode' : ''}`}></div>
            <div className={`bar ${isOpen && isDarkMode ? 'open dark-mode' : isOpen ? 'open' : isDarkMode ? 'dark-mode' : ''}`}></div>
            </div>



        <ul className={`nav-list ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>

          {routes.map((route, index) => (
            <li key={index} onClick={closeMenu} className={isDarkMode ? 'dark-mode-li' : ''}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
