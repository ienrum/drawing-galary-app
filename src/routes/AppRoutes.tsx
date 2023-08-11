import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
