import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import "./DarkMode.css"

function DarkModeButton(props) {
  const { isDarkMode, toggleDarkMode } = props;

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <button className="dark-mode-button" onClick={handleClick}>
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
    </button>
  );
}


DarkModeButton.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default DarkModeButton;