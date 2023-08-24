import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import routes from "../Routes/Routes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path} onClick={toggleMenu}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
