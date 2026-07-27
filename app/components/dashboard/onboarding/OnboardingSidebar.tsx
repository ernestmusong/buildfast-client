"use client";

import {
  Box,
  Stack,
  Typography,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const steps = [
  "Welcome",
  "Account",
  "Verify Email",
  "Business Info",
  "Website/App",
  "KYC",
  "Review",
];

export default function OnboardingSidebar() {
  return (
    <Box
      sx={{
        width: 320,
        borderRight: 1,
        borderColor: "divider",
        p: 4,
      }}
    >

      <Stack spacing={3}>
        {steps.map((step) => (
          <Stack
            key={step}
            direction="row"
            spacing={2}
            sx={{alignItems:"center"}}
          >
            <RadioButtonUncheckedIcon />

            <Typography>
              {step}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}