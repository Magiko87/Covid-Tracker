/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars*/
import React from "react";
import '../Home/hoome.css';
import {Helmet} from "react-helmet";


function HomePage({ isDarkMode }) { // Accedi a isDarkMode come prop..
  return (
    <div className={`home-container ${isDarkMode ? "dark-mode" : ""}`}>
      <h1 className={`tit ${isDarkMode ? 'dark-mode' : ''}`}>COVID TRACKER</h1>
      <Helmet>
        <title>Covid Tracker</title>
      </Helmet>

      <div className="img-cont">
      </div>
      <h3 className={`descr ${isDarkMode ? "dark-mode" : ""}`}>Benvenuti in Covid Tracker, una Web App che riporta i dati utili per il tracciamento dei casi di COVID in Italia.</h3>
      <footer className={`footer ${isDarkMode ? "dark-mode" : ""}`}>Daniele Camodeca-®Copyright</footer>
    </div>
  );
}

export default HomePage;
