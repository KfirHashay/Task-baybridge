import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Routing from "./routes";
import Cart from "./components/Ecom/Cart";

import "./style/App.scss";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routing />
        </div>
      </Router>

      <Cart />
    </>
  );
}

export default App;
