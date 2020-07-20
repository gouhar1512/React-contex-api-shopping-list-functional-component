import React from "react";

export default React.createContext({
  products: [],
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});

/**
 * 1. We can use this context in this file itself but it is
 *    better to export this file and use it in other files
 *

 */
