"use client";

import {
  Box,
  Stack,
  Typography,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Link from "next/link";

const steps = [
  {name:"Welcome", href:"/dashboard/merchant/onboarding/"},
  {name:"Verify Email", href:"/dashboard/merchant/onboarding/verify-email"},
  {name:"Account", href:"/dashboard/merchant/onboarding/create-account"},
  {name:"Business Info", href:"/dashboard/merchant/onboarding/business-info"},
  {name:"Website/App", href:"/dashboard/merchant/onboarding/website-app"},
  {name:"KYC", href:"/dashboard/merchant/onboarding/kyc"},
  {name:"Review", href:"/dashboard/merchant/onboarding/review"},  
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
           component={Link}
           href={step.href}
            key={step.name}
            direction="row"
            spacing={2}
            sx={{alignItems:"center", textDecoration:"none"}}
          >
            <RadioButtonUncheckedIcon />

            <Typography>
              {step.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}