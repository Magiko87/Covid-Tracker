//====>PROVINCE PAGE

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars*/
//--->IMPORT
import React from "react";
import '../Home/hoome.css';
import {Helmet} from "react-helmet";


function HomePage({ isDarkMode }) {
  const darkModeClass = isDarkMode ? "dark-mode" : "";

  return (
    <div className={`home-container ${darkModeClass}`}>
      <h1 className={`tit-h ${darkModeClass}`}>COVID TRACKER</h1>
      <Helmet>
        <title>Covid Tracker</title>
      </Helmet>
      <div className="img-cont">
        <img
          className="img-cov"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/COVID-19-outbreak-timeline.gif/800px-COVID-19-outbreak-timeline.gif"
          alt="map covid"
        />
      </div>
      <h3 className={`descr ${darkModeClass}`}>
        Benvenuti in Covid Tracker, una Web App che riporta i dati utili per il tracciamento dei casi di COVID in Italia.
      </h3>
      <footer className={`footer ${darkModeClass}`}>Daniele Camodeca-®Copyright</footer>
    </div>
  );
}
export default HomePage;
