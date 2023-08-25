import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import routes from '../Routes/Routes';
import DarkModeButton from '../DarkModeButton/DarkModeButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-content">
        <DarkModeButton />
        <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
          {routes.map((route, index) => (
            <li key={index} onClick={closeMenu}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
