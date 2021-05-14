import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import InputField from "../../Core/Input/InputField";
import Product from "../Product/Product";
import "./styleProductList.css";

const ProductList = ({ products, quickAddToCart }) => {
  const [search, setSearch] = useState("");
  return (
    <>
      <InputField search={search} setSearch={setSearch}></InputField>

      <Row>
        {products
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(search.toLowerCase()) ||
              val.name.toUpperCase().includes(search.toUpperCase()) ||
              val.sku.toLowerCase().includes(search.toLowerCase()) ||
              val.sku.toUpperCase().includes(search.toUpperCase()) ||
              val.description.toLowerCase().includes(search.toLowerCase()) ||
              val.description.toUpperCase().includes(search.toUpperCase())
            ) {
              return val;
            }
          })
          .map((product, key) => {
            return (
              <>
                <Col
                  className="centering"
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  key={key}
                >
                  <Product
                    product={product}
                    quickAddToCart={quickAddToCart}
                  ></Product>
                </Col>
              </>
            );
          })}
      </Row>
    </>
  );
};

export default ProductList;
