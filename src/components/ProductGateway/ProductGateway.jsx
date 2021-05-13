import { commerce } from "../../lib/commerce";
import React, { useState, useEffect } from "react";
import ProductList from "../Products/ProductList/ProductList";

const ProductGateway = () => {
  //@useState hooks
  const [products, setProducts] = useState([]);

  // fetchProducts
  const getStaticProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  console.log("products logged in ProductGateway.jsx", products);

  useEffect(() => {
    getStaticProducts();
  }, []);
  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
};

export default ProductGateway;
