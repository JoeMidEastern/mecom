import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import React, { useState } from "react";

const CategoryDropDown = ({ products }) => {
  // @useState hook
  const [search, setSearch] = useState("");

  console.log("products logged from CategoryDropdown.jsx", products);

  return (
    <>
      <DropdownButton id="dropdown-item-button" title="Categories">
        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
        <Dropdown.Item
          as="button"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        >
          Action
        </Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
      </DropdownButton>
      {/************************************************************* */}
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
                  {product.name}
                </Col>
              </>
            );
          })}
      </Row>
    </>
  );
};

export default CategoryDropDown;
