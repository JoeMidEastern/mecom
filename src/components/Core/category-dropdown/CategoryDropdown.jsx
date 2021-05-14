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
    </>
  );
};

export default CategoryDropDown;
