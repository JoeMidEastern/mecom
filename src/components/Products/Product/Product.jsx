import { Card } from "react-bootstrap";
import "./styleProduct.css";

const Product = ({ product }) => {
  return (
    <Card className="card-style my-5" style={{ width: "14rem" }}>
      <Card.Img variant="top" src={product.media.source} />
      <Card.Body>
        <Card.Title className="truncated-desc">{product.name}</Card.Title>
        <Card.Text>{product.price.formatted_with_symbol}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
