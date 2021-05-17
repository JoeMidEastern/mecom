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
import useStyles from "./styles";
import "./styleCheckoutForm.css";

// the steps of the checkout process to be rendered on the Paper component
const steps = ["Shipping Address", "Payment Details"];

const CheckoutForm = () => {
  // @ useState hooks
  // steps
  const [activeStep, setActiveStep] = useState(0);

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
        </Paper>
      </main>
    </Container>
  );
};

export default CheckoutForm;
