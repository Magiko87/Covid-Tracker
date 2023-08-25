
import HomePage from "../Home/Home";
import RegionPage from "../Region/Region";
import ProvincePage from "../Province/Province";
import AndamentoPage from "../Andamento/Andamento";

const routes = [
  { path: "/", element: <HomePage />, name: "Home" },
  { path: "/regioni", element: <RegionPage />, name: "Regioni" },
  { path: "/province", element: <ProvincePage />, name: "Province" },
  { path: "/andamento", element: <AndamentoPage />, name: "Andamento" },
];

export default routes;
