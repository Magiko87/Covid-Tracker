import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./Component/Routes/Routes";
import styles from  "./App.modules.css";
import "../src/Component/DarkModeToggle/styles-light.modules.css";
import "../src/Component/DarkModeToggle/styles-dark.modules.css";  
import Navbar from "../src/Component/Navbar/Navbar";
import DarkModeToggle from "../src/Component/DarkModeToggle/DarkModeToggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log("Modalità dark/light cambiata");
  };

  return (
    <BrowserRouter>

      <Navbar routes={routes} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
