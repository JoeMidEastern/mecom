import { Container, Image } from "react-bootstrap";
import React, { useEffect } from "react";
import ProductList from "../../components/Products/ProductList/ProductList";
import Loader1 from "../../components/Core/Loaders/Loader1/Loader1";
//import CategoryDropdown from "../../components/Core/category-dropdown/CategoryDropdown";

const RvHomeScreen = ({ products, fetchProductsBySlug, quickAddToCart }) => {
  console.log("products logged from RvHomeScreen.jsx", products);
  useEffect(() => {
    fetchProductsBySlug("rv");
  }, []);

  return (
    <>
      <Container className="my-5" style={{ backgroundColor: "#ffffff" }}>
        <Image
          src="/assets/general-images/rv_vector.png"
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
        <ProductList
          products={products}
          quickAddToCart={quickAddToCart}
        ></ProductList>
      </Container>
    </>
  );
};

export default RvHomeScreen;
