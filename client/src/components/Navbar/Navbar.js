import React, { useEffect } from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import Button from "../Ecom/elements/Button";
import { openCart } from "../../state/actions";

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
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const sumQuantity = () => {
    return cart.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);
  };
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
            <ButtonContainer onClick={() => dispatch(openCart())}>
              <Button content={<FaShoppingCart />} shape="round" />
              {sumQuantity() > 0 ? <Quantity>{sumQuantity()}</Quantity> : ""}
            </ButtonContainer>
          </ul>
        </div>
      </nav>
    </div>
  );
}

const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.02);
  }
`;

const Quantity = styled.div`
  position: absolute;
  top: 4rem;
  right: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.red};
  font-size: 2rem;
  font-weight: bold;
`;

export default Nav;
