import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  Form,
  Card,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Loader1 from "../../components/Core/Loaders/Loader1/Loader1";
import EmptyBanner from "../../components/Core/EmptyBanner/EmptyBanner";
import "./styleCartScreen.css";

const CartScreen = ({
  cartData,
  updateProduct,
  handleEmptyCart,
  removeProductFromCart,
  totalCost,
}) => {
  const [loading, setLoading] = useState(true);
  console.log("cart data logged from cart screen", cartData);

  const load = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    if (loading) {
      return <Loader1 />;
    }
    return <EmptyBanner />;
  };

  if (!cartData.line_items || !cartData.line_items.length) return load();
  return (
    <Container fluid>
      <Row>
        <Col style={{ textAlign: "center" }} md={8}>
          <h1 className="my-3 p-1">Shopping Cart</h1>

          <ListGroup variant="flush">
            {cartData.line_items.map((product) => {
              return (
                <ListGroup.Item
                  className="my-3"
                  style={{ borderBottom: "1px solid #ffd800" }}
                  key={product.id}
                >
                  <Row>
                    <Col md={2}>
                      <Image
                        src={product.media.source}
                        style={{ width: "8rem" }}
                      />
                    </Col>
                    <Col md={2}>
                      <h6 className="white-letters p-3 ">{product.name}</h6>
                    </Col>
                    <Col md={2}>
                      <h5 className="white-letters">
                        {product.price.formatted_with_code}
                      </h5>
                    </Col>
                    <Col md={2}>
                      <Button
                        style={{ border: "1px solid #ffffff" }}
                        className="my-2 mx-3"
                        type="button"
                        variant="dark"
                        onClick={() =>
                          updateProduct(product.id, product.quantity + 1)
                        }
                      >
                        <i className="fas fa-plus"></i>
                      </Button>
                    </Col>
                    <Col md={2}>
                      <Button
                        style={{ border: "1px solid #ffffff" }}
                        className="my-2 mx-3"
                        type="button"
                        variant="dark"
                        onClick={() =>
                          updateProduct(product.id, product.quantity - 1)
                        }
                      >
                        <i className="fas fa-minus"></i>
                      </Button>
                    </Col>
                    <Col md={2}>
                      <Button
                        style={{ border: "1px solid #ffffff" }}
                        className="my-2 mx-3"
                        variant="dark"
                        onClick={() => removeProductFromCart(product.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>

          <Col>
            <Card className="my-3">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h4 style={{ color: "#ffffff" }}>Subtotal: {totalCost}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/checkout">
                    <Button type="button" className="btn-block my-4">
                      Proceed To Checkout
                    </Button>
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <ListGroup.Item>
            <Col sm={12}>
              <i
                style={{ color: "#ffffff" }}
                variant="danger"
                type="button"
                className="btn-block my-4"
                className="far fa-trash-alt fa-4x ml-auto"
                onClick={() => handleEmptyCart()}
              ></i>
              <p style={{ color: "#ffffff" }}>Empty Cart</p>
            </Col>
          </ListGroup.Item>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
