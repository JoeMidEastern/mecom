import { TextField, Grid } from "@material-ui/core";
import { configure } from "@testing-library/dom";
import { useFormContext, Controller } from "react-hook-form";

const CutomTextFields = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;
  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        style={{
          textAlign: "center",
        }}
      >
        <Controller
          render={({ field }) => <TextField {...field} label={label} />}
          as={TextField}
          name={name}
          control={control}
          label={label}
          fullWidth
          required={required}
          error={isError}
        />
      </Grid>
    </>
  );
};

export default CutomTextFields;
