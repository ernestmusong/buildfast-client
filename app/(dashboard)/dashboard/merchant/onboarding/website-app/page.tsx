import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import OnboardingCard from "@/components/onboarding/OnboardingCard";

export default function WebsiteAppPage() {
  return (
    <Box sx={{py:6}}>
      <OnboardingCard>
        <Stack spacing={3}>
          <Typography
            variant="h4"
            sx={{fontWeight:700}}
          >
            Website & App Information
          </Typography>

          <TextField
            label="Website URL"
            fullWidth
          />

          <TextField
            label="Mobile App URL"
            fullWidth
          />

          <TextField
            label="Facebook Page"
            fullWidth
          />

          <TextField
            label="Instagram Page"
            fullWidth
          />

          <TextField
            label="Business Description"
            multiline
            rows={6}
            fullWidth
          />

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