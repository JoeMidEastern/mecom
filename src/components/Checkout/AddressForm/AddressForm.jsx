import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { commerce } from "../../../lib/commerce";
import CustomTextFields from "../CustomTextFields/CustomTextFields";
import ShippingCountrySelect from "./ShippingCountrySelect";
import ShippingSubdivisionSelect from "./ShippingSubdivisionSelect";
import ShippingOptionsSelect from "./ShippingOptionsSelect";

const AddressForm = ({ checkoutToken }) => {
  //@ react-hook-form enable
  const methods = useForm();

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          margin: "1rem 0",
          textAlign: "center",
          letterSpacing: "0.2rem",
          textShadow:
            "-1px 0 #c74747, 0 1px #c74747, 1px 0 #c74747, 0 -1px #c74747",
        }}
      >
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={""}>
          <Grid container spacing={3}>
            <CustomTextFields required name="firstName" label="First name" />
            <CustomTextFields required name="lastName" label="Last name" />
            <CustomTextFields required name="address1" label="Address" />
            <CustomTextFields required name="email" label="Email" />
            <CustomTextFields required name="city" label="City" />
            <CustomTextFields
              required
              name="zipcode"
              label="Zip / Postal code"
            />

            <ShippingCountrySelect checkoutToken={checkoutToken} />
            <ShippingSubdivisionSelect />
            <ShippingOptionsSelect />
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
