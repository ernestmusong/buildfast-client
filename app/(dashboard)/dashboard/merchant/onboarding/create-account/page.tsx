// app/merchant/onboarding/create-account/page.tsx

import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import OnboardingCard from "@/components/onboarding/OnboardingCard";

export default function CreateAccountPage() {
  const benefits = [
    "Secure Merchant Dashboard",
    "API Access",
    "Webhooks",
    "Instant Settlement",
    "Transaction Reports",
  ];

  return (
    <Box
     sx={{
        py:8
 }}
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 7 }}>
          <OnboardingCard>
            <Stack spacing={3}>
              <Typography
                variant="h4"
                 sx={{
                    fontWeight:700
                 }}
              >
                Create Account
              </Typography>

              <TextField
                label="Business Email"
                fullWidth
              />

              <TextField
                label="Password"
                type="password"
                fullWidth
              />

              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
              />

              <Button
                size="large"
                variant="contained"
              >
                Create Account
              </Button>
            </Stack>
          </OnboardingCard>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <OnboardingCard>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                 sx={{
                    fontWeight:700
                 }}
              >
                What you'll get
              </Typography>

              {benefits.map((benefit) => (
                <Stack
                  key={benefit}
                  direction="row"
                  spacing={2}
                >
                  <CheckCircleIcon
                    color="success"
                  />
                  <Typography>
                    {benefit}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </OnboardingCard>
        </Grid>
      </Grid>
    </Box>
  );
}