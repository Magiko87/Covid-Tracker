import React from "react";

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? "Disattiva Dark Mode" : "Attiva Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
