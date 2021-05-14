import { Container } from "react-bootstrap";
import MECarousel from "../../components/Core/MECarousel/MECarousel";
import PagesDisplay from "../../components/Core/pages-display/PagesDisplay";

const HomeScreen = ({ products, quickAddToCart }) => {
  console.log("products logged from HomeScreen.jsx", products);
  return (
    <Container>
      <MECarousel></MECarousel>
      <PagesDisplay products={products}></PagesDisplay>
    </Container>
  );
};

export default HomeScreen;
