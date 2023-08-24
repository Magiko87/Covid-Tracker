import { Link } from 'react-router-dom';
import './Home.css';



function HomePage() {
  return (
    <div className="home-container"> 
      <h1>Home Page</h1>
      <Link to="/provinces">Vai alla pagina delle Province</Link>
    </div>
  );
}

export default HomePage;
