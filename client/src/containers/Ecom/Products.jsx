import React, { useEffect } from "react";

import { AppWrap } from "../../wrapper";

import { useDispatch, useSelector } from "react-redux";

import { setProducts } from "../../state/actions/products";

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

  return <div>Fetch</div>;
};

export default AppWrap(Products, "products");
