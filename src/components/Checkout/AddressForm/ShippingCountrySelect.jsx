import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";

const ShippingCountrySelect = ({
  checkoutToken,
  shippingCountries,
  shippingCountry,
  countries,
  handleShippingCountryChange,
}) => {
  console.log(
    "checkoutToken logged from ShippingCountrySelect.jsx",
    checkoutToken
  );

  return (
    <Grid item xs={12} sm={6} style={{ marginTop: "2rem", padding: "1rem" }}>
      <InputLabel>Shipping Country</InputLabel>
      <Select
        value={shippingCountry}
        fullWidth
        onChange={handleShippingCountryChange}
      >
        {countries.map((country) => (
          <MenuItem key={country.id} value={country.id}>
            {country.label}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};

export default ShippingCountrySelect;
