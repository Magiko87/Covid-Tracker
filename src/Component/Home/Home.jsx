import React from "react";
import '../Home/home.css'; // Assicurati di importare i tuoi stili CSS

function HomePage({ isDarkMode }) { // Accedi a isDarkMode come prop
  return (
    <div className={`home-container ${isDarkMode ? "dark-mode" : ""}`}>
      <h1 className={`tit ${isDarkMode ? 'dark-mode' : ''}`}>COVID TRACKER</h1>

      <div className="img-cont">
        <img className="img-cov" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/COVID-19-outbreak-timeline.gif/800px-COVID-19-outbreak-timeline.gif" alt="map covid" />
      </div>
      <h3 className={`descr ${isDarkMode ? "dark-mode" : ""}`}>Benvenuti in Covid Tracker, una Web App che riporta i dati utili per il tracciamento dei casi di COVID in Italia.</h3>
      <footer className={`footer ${isDarkMode ? "dark-mode" : ""}`}>Daniele Camodeca-®Copyright</footer>
    </div>
  );
}

export default HomePage;
