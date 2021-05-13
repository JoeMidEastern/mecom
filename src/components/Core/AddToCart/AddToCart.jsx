import { Button } from "react-bootstrap";
import "./styleAddToCart.css";

const AddToCart = ({ children }) => {
  return (
    <Button variant="dark">
      <i className="fa fa-cart-plus " aria-hidden="true">
        {children}
      </i>
    </Button>
  );
};

export default AddToCart;
