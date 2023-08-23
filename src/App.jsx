import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./Component/Routes/Routes";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="button-container">
        <button className="toggle-button" onClick={toggleDarkMode}>
          {isDarkMode ? "Modalità Chiaro" : "Modalità Scuro"}
        </button>
      </div>
      <BrowserRouter>
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
