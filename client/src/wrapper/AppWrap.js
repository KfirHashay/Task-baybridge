import React from "react";
import { Navbar } from "../components";
import { Footer } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div>
        <Navbar />

        <div id={idName} className={`app__container ${classNames}`}>
          <div className="app__wrapper app__flex">
            <Component />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

export default AppWrap;
