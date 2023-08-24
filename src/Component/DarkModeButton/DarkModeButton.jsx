import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './DarkMode.css';

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`dark-mode-button ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
    </div>
  );
}

export default DarkModeButton;
