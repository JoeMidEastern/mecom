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
    <Grid item xs={12} sm={6} style={{ marginLeft: "1rem", marginTop: "2rem" }}>
      <InputLabel>Subdivision</InputLabel>
      <Select value={""} fullWidth onChange={""}>
        <MenuItem></MenuItem>
      </Select>
    </Grid>
  );
};

export default ShippingSubdivisionSelect;
