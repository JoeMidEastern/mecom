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
import AddressForm from "../AddressForm/AddressForm";
import PaymentForm from "../PaymentForm/PaymentForm";
import Confirmation from "../Confirmation/Confirmation";
import useStyles from "./styles";
import "./styleCheckoutForm.css";

// the steps of the checkout process to be rendered on the Paper component
const steps = ["Shipping Address", "Payment Details"];

const CheckoutForm = () => {
  // @ useState hooks
  // steps
  const [activeStep, setActiveStep] = useState(0);

  // @ forms depending on step
  const TwoForms = () =>
    activeStep === 0 ? (
      <AddressForm></AddressForm>
    ) : (
      <PaymentForm></PaymentForm>
    );
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper} style={{ color: "#ffd800" }}>
          <Typography
            variant="h4"
            align="center"
            style={{
              textShadow:
                "-1px 0 #c74747, 0 1px #c74747, 1px 0 #c74747, 0 -1px #c74747",
              letterSpacing: "0.2rem",
            }}
          >
            Checkout
          </Typography>
          <Stepper
            aciveStep={0}
            className={classes.stepper}
            style={{ color: "#ffd800" }}
          >
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>
                  <h5
                    style={{
                      color: "#ffd800",
                      textShadow:
                        "-1px 0 #c74747, 0 1px #c74747, 1px 0 #c74747, 0 -1px #c74747",
                      letterSpacing: "0.2rem",
                    }}
                  >
                    {step}
                  </h5>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {/*  // activeStep(0) === address form; activeStep(1) === payment form; activeStep(2) === confirmation */}
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
