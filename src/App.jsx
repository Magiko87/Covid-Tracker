/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./Component/Routes/Routes";
import  "../src/App.css"
import "../src/Component/DarkModeToggle/styles-light.css";
import "../src/Component/DarkModeToggle/styles-dark.css";  
import Navbar from "../src/Component/Navbar/Navbar";
import DarkModeToggle from "../src/Component/DarkModeToggle/DarkModeToggle"

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
