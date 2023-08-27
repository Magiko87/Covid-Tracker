import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./Component/Routes/Routes";
import "./App.css";
import Navbar from "../src/Component/Navbar/Navbar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <BrowserRouter>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} routes={routes} />
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
