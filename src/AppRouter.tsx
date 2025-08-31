import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import routes from "./constants/routes";
import VentureCapitals from "./pages/VentureCapitals";

const AppRouter: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.VENTURE_CAPITALS} element={<VentureCapitals />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
