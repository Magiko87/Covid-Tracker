import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./Component/Routes/Routes";
import "./App.css";
import DarkModeButton from "./Component/DarkModeButton/DarkModeButton";


import Navbar from "../src/Component/Navbar/Navbar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Aggiorna le variabili CSS quando cambia la modalità
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--background-color', '#121212');
      root.style.setProperty('--text-color', '#fff');
    } else {
      root.style.setProperty('--background-color', '#fff');
      root.style.setProperty('--text-color', '#000');
    }
  }, [isDarkMode]);

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <BrowserRouter>
        <Navbar routes={routes} />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
