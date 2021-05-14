import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "./styleAddToCart.css";

const AddToCart = ({ children, product, quickAddToCart }) => {
  const [disabled, setDisabled] = useState(false);
  console.log(product);
  return (
    <>
      {!disabled ? (
        <Button
          variant="dark"
          onClick={() => {
            quickAddToCart(product.id, 1);
            setDisabled(true);
          }}
        >
          <i className="fa fa-cart-plus " aria-hidden="true">
            {children}
          </i>
        </Button>
      ) : (
        <FaCheck style={{ color: "#91CB40" }} />
      )}
    </>
  );
};

export default AddToCart;
