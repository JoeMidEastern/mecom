import { Card } from "react-bootstrap";
import ShowMore from "../../Core/ShowMore/ShowMore";
import AddToCart from "../../Core/AddToCart/AddToCart";
import "./styleProduct.css";

const Product = ({ product, quickAddToCart }) => {
  return (
    <Card className="card-style my-5 product-styled-border">
      <Card.Img
        style={{ width: "14rem" }}
        variant="top"
        src={product.media.source}
      />
      <Card.Body>
        <Card.Title className="truncated-desc">{product.name}</Card.Title>

        <ShowMore product={product}></ShowMore>
        <AddToCart product={product} quickAddToCart={quickAddToCart}>
          Quick Add
        </AddToCart>
      </Card.Body>
    </Card>
  );
};

export default Product;
