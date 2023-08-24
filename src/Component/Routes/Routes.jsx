// Routes.js
import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../Home/Home";
import RegionPage from "../Region/Region";
import ProvincePage from "../Province/Province";

const routes = [
  { path: "/", element: <HomePage />, name: "Home" },
  { path: "/regioni", element: <RegionPage />, name: "Regioni" },
  { path: "/province", element: <ProvincePage />, name: "Province" },
];

export default routes;
