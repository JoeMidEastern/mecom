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
import React, { useState, useEffect } from "react";
import CustomTextFields from "../CustomTextFields/CustomTextFields";
import ShippingCountrySelect from "./ShippingCountrySelect";
import ShippingSubdivisionSelect from "./ShippingSubdivisionSelect";
import ShippingOptionsSelect from "./ShippingOptionsSelect";

const AddressForm = ({ checkoutToken }) => {
  // @ useState hooks
  // shipping countries
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  // shipping subdivisions
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  // shipping options
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  // Shipping Countries
  // @ to turn country codes into array and map over
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  // fetch shipping countries
  const getStaticShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const handleShippingCountryChange = (e) => {
    setShippingCountry(e.target.value);
  };

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  // Shipping Subdivisions

  // @ to turn subdivisions into array and map over
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );

  // fetch shipping subdivisions
  const getStaticShippingSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const handleShippingSubdivisionChange = (e) => {
    setShippingSubdivision(e.target.value);
  };

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  // Shipping options

  const options = shippingOptions.map((eachShippingOption) => ({
    id: eachShippingOption.id,
    label: `${eachShippingOption.description} - (${eachShippingOption.price.formatted_with_symbol})`,
  }));

  const getStaticShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  const handleShippingOptionsChange = (e) => {
    setShippingOptions(e.target.value);
  };
  console.log(shippingOptions);
  //////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
  // fetching with useEffect hooks

  useEffect(() => {
    getStaticShippingCountries(checkoutToken.id);
  }, []);
  useEffect(() => {
    if (shippingCountry) getStaticShippingSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      getStaticShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

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

            <ShippingCountrySelect
              checkoutToken={checkoutToken}
              shippingCountries={shippingCountries}
              shippingCountry={shippingCountry}
              countries={countries}
              handleShippingCountryChange={handleShippingCountryChange}
            />
            <ShippingSubdivisionSelect
              shippingCountry={shippingCountry}
              shippingSubdivision={shippingSubdivision}
              subdivisions={subdivisions}
              handleShippingSubdivisionChange={handleShippingSubdivisionChange}
            />
            <ShippingOptionsSelect
              options={options}
              shippingOption={shippingOption}
              handleShippingOptionsChange={handleShippingOptionsChange}
            />
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
