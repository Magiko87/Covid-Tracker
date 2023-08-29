import {useState} from 'react';
import {PropTypes} from 'prop-types'; // Assicurati di importare PropTypes

import '../DarkModeToggle/styles-dark.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = ({ toggleDarkMode }) => {
  const [isSunIcon, setIsSunIcon] = useState(true);

  const handleToggle = () => {
    setIsSunIcon(!isSunIcon);
    toggleDarkMode();
  };

  return (
    <button className="dark-mode-toggle" onClick={handleToggle}>
      <FontAwesomeIcon icon={isSunIcon ? faSun : faMoon} className='fa-icon'/>
    </button>
  );
};

// Dichiarazione dei PropTypes
DarkModeToggle.propTypes = {

  toggleDarkMode: PropTypes.func.isRequired,
};

export default DarkModeToggle;
