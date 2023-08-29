/* eslint-disable no-unused-vars */
import React from 'react';
import styles from "../Loader/loaader.css";
import {darkModeClass} from "../DarkModeToggle/style";

const Loader = ({ isDarkMode }) => {
  return (
    <div className="loader-container">
      <div className={`loader-spinner spinner-border ${darkModeClass}`} role="status">
        
      </div>
    </div>
  );
};

export default Loader;
