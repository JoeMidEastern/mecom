import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";

const ShippingOptionsSelect = ({
  options,
  ShippingOption,
  handleShippingOptionsChange,
}) => {
  //@ useState hooks

  return (
    <Grid item xs={12} sm={6} style={{ marginTop: "2rem", padding: "1rem" }}>
      <InputLabel>Shipping Options</InputLabel>
      <Select
        value={ShippingOption}
        fullWidth
        onChange={handleShippingOptionsChange}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};

export default ShippingOptionsSelect;
