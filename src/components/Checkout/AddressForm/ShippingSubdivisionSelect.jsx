import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";

const ShippingSubdivisionSelect = ({
  shippingSubdivision,
  subdivisions,
  handleShippingSubdivisionChange,
}) => {
  return (
    <Grid item xs={12} sm={6} style={{ marginTop: "2rem", padding: "1rem" }}>
      <InputLabel>Shipping Subdivision</InputLabel>
      <Select
        value={shippingSubdivision}
        fullWidth
        onChange={handleShippingSubdivisionChange}
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
