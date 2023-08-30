import 'react';
import PropTypes from 'prop-types'; // Assicurati di importare PropTypes
import '../home/home.css';
import { Helmet } from 'react-helmet';

function HomePage({ isDarkMode }) {
  const darkModeClass = isDarkMode ? 'dark-mode' : '';

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
        Benvenuti in Covid Tracker, una Web App che riporta i dati aggiornati sulle regioni, le province e l&apos;andamento

 nazionale della pandemia.
      </h3>
      <footer className={`footer ${darkModeClass}`}>Daniele Camodeca-®Copyright</footer>
    </div>
  );
}

// Dichiarazione dei PropTypes per HomePage
HomePage.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default HomePage;
