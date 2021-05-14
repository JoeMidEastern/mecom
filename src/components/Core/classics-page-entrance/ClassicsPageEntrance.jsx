import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TrucksPageEntrance = () => {
  return (
    <Card bg="dark">
      <Card.Body>
        <Card.Title>
          <h3 style={{ textAlign: "center", color: "#fff" }}>
            Mid Eastern Classics & Antiques
          </h3>
        </Card.Title>
      </Card.Body>
      <Link to="/classics">
        <Card.Img
          variant="top"
          src="/assets/general-images/redVW.jpg"
          style={{ height: "18rem", objectFit: "cover" }}
        />
      </Link>
    </Card>
  );
};

export default TrucksPageEntrance;
