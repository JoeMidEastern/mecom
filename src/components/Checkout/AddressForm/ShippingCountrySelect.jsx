import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { commerce } from "../../../lib/commerce";
import React, { useState, useEffect } from "react";
import { FaBimobject } from "react-icons/fa";

const ShippingCountrySelect = ({ checkoutToken }) => {
  // @ useState hooks
  // shipping countries
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");

  // fetch shipping countries
  const getStaticShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  useEffect(() => {
    getStaticShippingCountries(checkoutToken.id);
  }, []);

  console.log(
    "checkoutToken logged from ShippingCountrySelect.jsx",
    checkoutToken
  );

  console.log(shippingCountries);
  console.log(shippingCountry);
  return (
    <Grid item xs={12} sm={6} style={{ marginTop: "2rem", padding: "1rem" }}>
      <InputLabel>Shipping Country</InputLabel>
      <Select
        value={shippingCountry}
        fullWidth
        onChange={(e) => setShippingCountry(e.target.value)}
      >
        <MenuItem></MenuItem>
      </Select>
    </Grid>
  );
};

export default ShippingCountrySelect;
