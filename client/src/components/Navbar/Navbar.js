import React, { useEffect } from "react";

import { Link } from "react-router-dom";

function Nav() {
  const toggle = () => {
    var sidebarOpen = document.querySelector(".sidebarOpen");
    var nav = document.querySelector("nav");

    sidebarOpen.addEventListener("click", () => {
      nav.classList.add("active");
    });
    document.body.addEventListener("click", (e) => {
      let clickedElm = e.target;
      if (
        !clickedElm.classList.contains("sidebarOpen") &&
        !clickedElm.classList.contains("menu")
      ) {
        nav.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    toggle();
  }, []);

  return <Navbar />;
}

function Navbar(props) {
  return (
    <div>
      <nav>
        <div className="nav-bar">
          <i className="bx bx-menu sidebarOpen"></i>
          <span className="logo navLogo">
            <Link to={"/"} className="nav-link">
              Logo
            </Link>
          </span>

          <div className="nav-menu">
            <div className="logo-toggle">
              <span className="logo">
                <Link to={"/"} className="nav-link">
                  Logo
                </Link>
              </span>
              <i className="bx bx-x siderbarClose"></i>
            </div>

            <ul className="nav-links">
              <li>
                <Link to={"/"} className="">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/products"} className="">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <ul id="navbar-nav" className="navbar-nav">
            {props.children}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
