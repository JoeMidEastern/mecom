import { Container } from "react-bootstrap";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container>
      <footer className="mx-1 my-3">
        <p>All &copy; Rights Reserved To Mid Eastern Chrome Stop {year}</p>
        <a
          href="https://www.facebook.com/MidEasternChromeStop/"
          className="fb-icon"
        >
          <ImFacebook2 style={{ color: "#4267B2" }} />
        </a>
      </footer>
    </Container>
  );
};

export default Footer;
