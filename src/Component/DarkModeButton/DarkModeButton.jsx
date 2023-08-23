import React, { useState } from 'react';
import "../DarkModeButton/DarkMode.css"

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Modalità Chiaro' : 'Modalità Scuro'}
    </button>
  );
}

export default DarkModeButton;
