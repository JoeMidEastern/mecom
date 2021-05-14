import { Container, Row, Col } from "react-bootstrap";
import TrucksPageEntrance from "../trucks-page-entrance/TrucksPageEntrance";
import ClassicPageEntrance from "../classics-page-entrance/ClassicsPageEntrance";
import RvPageEntrance from "../rv-page-entrance/RvPageEntrance";
import "./stylePageDisplay.css";

const PagesDisplay = ({ products }) => {
  return (
    <section style={{ marginTop: "3rem" }}>
      <Container fluid>
        <Row>
          <Col className="my-3" sm={12} md={4}>
            <TrucksPageEntrance
              className="make-height"
              products={products}
            ></TrucksPageEntrance>
          </Col>
          <Col className="my-3" sm={12} md={4}>
            <ClassicPageEntrance></ClassicPageEntrance>
          </Col>
          <Col className="my-3" sm={12} md={4}>
            <RvPageEntrance></RvPageEntrance>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PagesDisplay;
