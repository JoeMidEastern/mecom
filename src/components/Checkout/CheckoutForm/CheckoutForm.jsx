import { Container } from "react-bootstrap";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { commerce } from "../../../lib/commerce";
import React, { useState, useEffect } from "react";
import AdrressForm from "../AddressForm/AddressForm";
import Confirmation from "../Confirmation/Confirmation";
import useStyles from "./styles";
import "./styleCheckoutForm.css";
import AddressForm from "../AddressForm/AddressForm";

// the steps of the checkout process to be rendered on the Paper component
const steps = ["Shipping Address", "Payment Details"];

const CheckoutForm = () => {
  // @ useState hooks
  // steps
  const [activeStep, setActiveStep] = useState(0);

  // @ forms depending on step
  const TwoForms = () =>
    activeStep === 0 ? <AddressForm></AddressForm> : <p>show payment form</p>;
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper
          className={classes.paper}
          style={{ backgroundColor: "#012B36", color: "#ffd800" }}
        >
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper
            aciveStep={0}
            className={classes.stepper}
            style={{ backgroundColor: "#012B36", color: "#ffd800" }}
          >
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>
                  <h5 style={{ color: "#ffd800" }}>{step}</h5>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation></Confirmation>
          ) : (
            <TwoForms></TwoForms>
          )}
        </Paper>
      </main>
    </Container>
  );
};

export default CheckoutForm;
