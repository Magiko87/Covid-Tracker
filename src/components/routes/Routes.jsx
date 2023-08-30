import HomePage from "../home/Home";
import RegionPage from "../region/Region";
import ProvincePage from "../province/Province";
import AndamentoPage from "../andamento/Andamento";

const routes = [
  { path: "/", element: <HomePage isDarkMode={true} />, name: "Home" }, // Passa il valore corretto di isDarkMode
  { path: "/regioni", element: <RegionPage isDarkMode={true} />, name: "Regioni" }, // Passa il valore corretto di isDarkMode
  { path: "/province", element: <ProvincePage isDarkMode={true} />, name: "Province" }, // Passa il valore corretto di isDarkMode
  { path: "/andaments", element: <AndamentoPage isDarkMode={true} />, name: "Andamento" }, // Passa il valore corretto di isDarkMode
];

export default routes;
