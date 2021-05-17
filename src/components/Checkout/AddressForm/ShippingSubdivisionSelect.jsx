import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import React, { useState } from "react";

const ShippingSubdivisionSelect = () => {
  // @ useState hooks
  // shipping subdivisions
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");

  return (
    <Grid item xs={12} sm={6} style={{ marginTop: "2rem", padding: "1rem" }}>
      <InputLabel>Shipping Subdivision</InputLabel>
      <Select value={""} fullWidth onChange={""}>
        <MenuItem></MenuItem>
      </Select>
    </Grid>
  );
};

export default ShippingSubdivisionSelect;
