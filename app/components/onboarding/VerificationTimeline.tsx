import {
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";

const steps = [
  "Application Submitted",
  "Compliance Review",
  "Approved",
];

export default function VerificationTimeline() {
  return (
    <Stepper
      activeStep={1}
      orientation="vertical"
    >
      {steps.map((step) => (
        <Step key={step}>
          <StepLabel>
            {step}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}