
import 'react';
import "./loaader.css"
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
