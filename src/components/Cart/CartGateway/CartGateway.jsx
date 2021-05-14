import { commerce } from "../../../lib/commerce";
import React, { useState, useEffect } from "react";

const CartGateway = () => {
  // @ useState hooks
  const [cartData, setCartData] = useState({});

  //fetch cart
  const getStaticCart = async () => {
    const response = await commerce.cart.retrieve();
    setCartData(response);
  };

  // add to cart
  const addProductToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCartData(response.cart);
  };

  useEffect(() => {
    getStaticCart();
  }, []);

  console.log("cart data logged from CartGateway.jsx", cartData);

  return (
    <div>
      <h3>cart gateway</h3>
    </div>
  );
};

export default CartGateway;
