import { Link } from 'react-router-dom';
import './Home.css';



function HomePage() {
  return (
    <div className="home-container"> 
      <h1 className='tit' >COVID TRACKER</h1>
      <div className="img-cont">
        <img className="img-cov"src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/COVID-19-outbreak-timeline.gif/800px-COVID-19-outbreak-timeline.gif" alt="map covid" />
      </div>

      <h3 className='descr'>Benvenuti in Covid Tracker,una Web App  che riporta  i dati utili per il tracciamento dei casi di COVID in Italia.</h3>
      <footer>Daniele Camodeca-®Copyright</footer>
    </div>
    
  );
}

export default HomePage;
