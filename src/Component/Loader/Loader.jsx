/* eslint-disable no-unused-vars */
import React from 'react';
import styles from "../Loader/loaader.css";

const Loader = ({ isDarkMode }) => {
  return (
    <div className="loader-container">
      <div className={`loader-spinner spinner-border ${isDarkMode ? 'dark-mode' : ''}`} role="status">
        
      </div>
    </div>
  );
};

export default Loader;
