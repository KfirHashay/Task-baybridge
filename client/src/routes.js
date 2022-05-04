import React from "react";

import { Route, Routes } from "react-router-dom";

import { Home, Cart, NotFoundPage } from "./containers";

// import {
//   Main

// } from "./containers/Admin/components";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/cart" element={<Cart />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
