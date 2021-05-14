import { Container, Image } from "react-bootstrap";
import React, { useEffect } from "react";
import ProductList from "../../components/Products/ProductList/ProductList";
import CategoryDropdown from "../../components/Core/category-dropdown/CategoryDropdown";
import "./styleTrucksHomeScreen.css";

const TrucksHomeScreen = ({ products, setProducts }) => {
  console.log("products logged from TrucksHomeScreen.jsx", products);

  return (
    <>
      <Container className="my-5" style={{ backgroundColor: "#ffffff" }}>
        <Image
          src="/assets/general-images/truckerLifeClear.jpg"
          style={{
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            width: "18rem",
          }}
          className="my-5 image-center"
        />
      </Container>
      <Container className="my-5">
        {/* <CategoryDropdown products={products}></CategoryDropdown> */}
        <ProductList products={products}></ProductList>
      </Container>
    </>
  );
};

export default TrucksHomeScreen;
