import React, { useState } from 'react';
import '../DarkModeToggle/styles-dark.css'; // Assicurati che il file CSS sia correttamente importato
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  // Usa uno stato locale per gestire l'icona corrente
  const [isSunIcon, setIsSunIcon] = useState(true);

  // Funzione per cambiare l'icona e attivare/disattivare la modalità scura
  const handleToggle = () => {
    setIsSunIcon(!isSunIcon);
    toggleDarkMode();
  };

  return (
    <button className="dark-mode-toggle" onClick={handleToggle}>
      <FontAwesomeIcon icon={isSunIcon ? faSun : faMoon} className='fa-icon'/>
    </button>
  );
};

export default DarkModeToggle;
