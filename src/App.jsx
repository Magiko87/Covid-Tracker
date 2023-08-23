

import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../src/Component/Routes/Routes"

const App = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default App;
