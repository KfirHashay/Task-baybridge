import React, { useEffect } from "react";
import styled from "styled-components";

import { AppWrap } from "../../wrapper";

import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../state/actions/products";

import { v4 as uuidv4 } from "uuid";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    let isCancelled = false;

    const loadProducts = async () => {
      if (!isCancelled) {
        dispatch(setProducts(await fetchProducts()));
      }
    };

    loadProducts();

    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    return data;
  };

  console.log(products);

  const productCards = products.map((product) => (
    <ProductCard
      key={uuidv4()}
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
    />
  ));

  return <ProductsWrapper>{productCards}</ProductsWrapper>;
};

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(28rem, 36rem));
    justify-content: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 36rem);
  }

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default AppWrap(Products, "products");
