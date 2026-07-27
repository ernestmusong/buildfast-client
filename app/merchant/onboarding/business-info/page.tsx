import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";

import OnboardingCard from "@/components/dashboard/onboarding/OnboardingCard";

export default function BusinessInfoPage() {
  return (
    <Box sx={{py:6}}>
      <OnboardingCard>
        <Stack spacing={4}>
          <Typography
            variant="h4"
            sx={{fontWeight:700}}
          >
            Business Information
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="Business Name"
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                select
                label="Business Type"
                fullWidth
              >
                <MenuItem value="sole">
                  Sole Proprietorship
                </MenuItem>

                <MenuItem value="llc">
                  Limited Company
                </MenuItem>
              </TextField>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                label="Industry"
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="Country"
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="City"
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                label="Business Address"
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="Support Email"
                fullWidth
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="Phone Number"
                fullWidth
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            size="large"
          >
            Continue
          </Button>
        </Stack>
      </OnboardingCard>
    </Box>
  );
}