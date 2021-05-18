import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { commerce } from "../../../lib/commerce";

const ShippingSubdivisionSelect = ({ shippingCountry }) => {
  // @ useState hooks
  // shipping subdivisions
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");

  // @ to turn subdivisions into array and map over
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );

  // fetch shipping subdivisions
  const getStaticShippingSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  useEffect(() => {
    if (shippingCountry) getStaticShippingSubdivisions(shippingCountry);
  }, [shippingCountry]);

  return (
    <Grid item xs={12} sm={6} style={{ marginTop: "2rem", padding: "1rem" }}>
      <InputLabel>Shipping Subdivision</InputLabel>
      <Select
        value={shippingSubdivision}
        fullWidth
        onChange={(e) => setShippingSubdivision(e.target.value)}
      >
        {subdivisions.map((subdivision) => (
          <MenuItem key={subdivision.id} value={subdivision.id}>
            {subdivision.label}
          </MenuItem>
        ))}
        <MenuItem></MenuItem>
      </Select>
    </Grid>
  );
};

export default ShippingSubdivisionSelect;
