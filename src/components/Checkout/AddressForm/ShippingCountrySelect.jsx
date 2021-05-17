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

const ShippingCountrySelect = () => {
  // @ useState hooks
  // shipping countries
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");

  return (
    <Grid item xs={12} sm={6} style={{ marginLeft: "1rem", marginTop: "2rem" }}>
      <InputLabel>Shipping Country</InputLabel>
      <Select value={""} fullWidth onChange={""}>
        <MenuItem></MenuItem>
      </Select>
    </Grid>
  );
};

export default ShippingCountrySelect;
