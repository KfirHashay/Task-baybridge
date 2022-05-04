import { SET_PRODUCTS } from "./actionTypes";

const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export { setProducts };
