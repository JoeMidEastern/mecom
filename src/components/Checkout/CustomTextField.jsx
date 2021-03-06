import { TextField, Grid } from "@material-ui/core";
import { configure } from "@testing-library/dom";
import { useFormContext, Controller } from "react-hook-form";

const CutomTextField = ({ name, label, value, required }) => {
  const { control } = useFormContext();
  const isError = false;
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Controller
          as={TextField}
          name={name}
          control={control}
          label={label}
          fullWidth
          required={required}
        />
      </Grid>
    </>
  );
};

export default CutomTextField;
