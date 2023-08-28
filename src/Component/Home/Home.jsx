/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import '../Home/hoome.css';
import {Helmet} from "react-helmet";


function HomePage({ isDarkMode }) { // Accedi a isDarkMode come prop
  return (
    <div className={`home-container ${isDarkMode ? "dark-mode" : ""}`}>
      <h1 className={`tit ${isDarkMode ? 'dark-mode' : ''}`}>COVID TRACKER</h1>
      <Helmet>
        <title>Covid Tracker</title>
        <meta name="description" content="Web App per tracking Covid" />
        <meta property="og:image" content="/src/assets/img/cov-img meta.png"/>
        <meta property="og:url" content="https://covid-tracker-magiko87.vercel.app/"/>
        <meta property="og:type" content="CovidTracker web app"/>
        <meta property="og:site_name" content="Covid Tracker"/>
      </Helmet>

      <div className="img-cont">
        <img className="img-cov" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/COVID-19-outbreak-timeline.gif/800px-COVID-19-outbreak-timeline.gif" alt="map covid" />
      </div>
      <h3 className={`descr ${isDarkMode ? "dark-mode" : ""}`}>Benvenuti in Covid Tracker, una Web App che riporta i dati utili per il tracciamento dei casi di COVID in Italia.</h3>
      <footer className={`footer ${isDarkMode ? "dark-mode" : ""}`}>Daniele Camodeca-®Copyright</footer>
    </div>
  );
}

export default HomePage;
