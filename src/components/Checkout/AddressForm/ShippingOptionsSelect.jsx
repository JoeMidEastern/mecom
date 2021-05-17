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

const ShippingOptionsSelect = () => {
  //@ useState hooks
  // shipping options
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  return (
    <Grid item xs={12} sm={6} style={{ marginLeft: "1rem", marginTop: "2rem" }}>
      <InputLabel>Shipping Options</InputLabel>
      <Select value={""} fullWidth onChange={""}>
        <MenuItem></MenuItem>
      </Select>
    </Grid>
  );
};

export default ShippingOptionsSelect;