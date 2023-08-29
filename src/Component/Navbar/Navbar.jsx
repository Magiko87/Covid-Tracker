import {useState}  from 'react';
import PropTypes from 'prop-types'; // Assicurati di importare PropTypes
import './naavbar.css';
import { Link } from 'react-router-dom';
import routes from '../Routes/Routes';
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

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
      <div className="navbar-content">
        <DarkModeToggle toggleDarkMode={toggleDarkMode} />
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

// Dichiarazione dei PropTypes per Navbar
Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
