import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const RvPageEntrance = () => {
  return (
    <Card bg="dark">
      <Card.Body>
        <Card.Title>
          <h3 style={{ textAlign: "center", color: "#fff" }}>
            Mid Eastern RV and Accessories
          </h3>
        </Card.Title>
      </Card.Body>
      <Link to="/rv">
        <Card.Img
          variant="top"
          src="/assets/general-images/whiteRV.jpg"
          style={{ height: "18rem", objectFit: "cover" }}
        />
      </Link>
    </Card>
  );
};

export default RvPageEntrance;
