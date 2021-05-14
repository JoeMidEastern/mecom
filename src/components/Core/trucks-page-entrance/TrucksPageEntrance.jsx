import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TrucksPageEntrance = ({ products }) => {
  console.log("products logged from TrucksPageEntrance.jsx", products);
  return (
    <Card bg="dark">
      <Card.Body>
        <Card.Title>
          <h3 style={{ textAlign: "center", color: "#fff" }}>
            Mid Eastern Chrome Stop
          </h3>
        </Card.Title>
      </Card.Body>
      <Link to="/mideasternchromestop">
        <Card.Img
          variant="top"
          src="/assets/general-images/whiteTruck.jpg"
          style={{ height: "18rem", objectFit: "cover" }}
        />
      </Link>
    </Card>
  );
};

export default TrucksPageEntrance;
