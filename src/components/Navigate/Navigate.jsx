import { Navbar, Nav, Badge, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

const Navigate = ({ cartItems, totalCost }) => {
  const location = useLocation();

  return (
    <Navbar className="my-2" bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              alt="Mid Eastern Chrome Stop"
              src="/assets/logos/navLogo.png"
              style={{ height: "auto", width: "14rem" }}
              className="ml-3"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {location.pathname === "/cart" ? (
              <div>
                <h3 style={{ color: "white" }}>Total Cost: {totalCost}</h3>
              </div>
            ) : (
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart mr-3">
                    <Badge
                      className="p-1"
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "#c74747",
                      }}
                      variant="light"
                    >
                      {cartItems}
                    </Badge>
                  </i>
                  Cart
                </Nav.Link>
              </LinkContainer>
            )}

            <LinkContainer to="/login">
              <Nav.Link>
                <i className="fa fa-user"></i>Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigate;
