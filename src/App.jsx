//====>COMPONENTE APP 
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./Component/Routes/Routes";
import "./aapp.css"
import Navbar from "../src/Component/Navbar/Navbar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  //--->Aggiungi la classe "dark-mode" al body quando la modalità scura è attiva
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <BrowserRouter>
      {/*---> Passa lo stato della modalità scura e la funzione di toggle al componente Navbar */}
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} routes={routes} />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={React.cloneElement(route.element, { isDarkMode: isDarkMode })}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
