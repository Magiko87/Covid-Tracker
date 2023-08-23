// routes.js
import HomePage from "../Home/Home"
import ErrorPage from "../Error/Error"
import RegionPage from "../Region/Region"
import ProvincePage from "../Province/Province"

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/error", element: <ErrorPage /> },
  { path: "/regions", element: <RegionPage /> },
  { path: "/provinces", element: <ProvincePage /> },
];

export default routes;
