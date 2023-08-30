
import 'react';
import "./loader.css"
import {darkModeClass} from "../darkmodetoggle/style";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className={`loader-spinner spinner-border ${darkModeClass}`} role="status">
        
      </div>
    </div>
  );
};

export default Loader;
