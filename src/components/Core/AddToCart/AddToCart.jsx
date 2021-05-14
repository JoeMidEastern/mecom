import { Button } from "react-bootstrap";
import "./styleAddToCart.css";

const AddToCart = ({ children, product, quickAddToCart }) => {
  return (
    <Button variant="dark" onClick={() => quickAddToCart(product.id, 1)}>
      <i className="fa fa-cart-plus " aria-hidden="true">
        {children}
      </i>
    </Button>
  );
};

export default AddToCart;
