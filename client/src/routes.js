import React from "react";

import { Route, Routes } from "react-router-dom";

import { Home, Products, NotFoundPage } from "./containers";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/products" element={<Products />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
