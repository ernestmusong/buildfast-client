import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";

import TaskAltIcon from "@mui/icons-material/TaskAlt";

import OnboardingCard from "@/components/dashboard/onboarding/OnboardingCard";

export default function SubmittedPage() {
  return (
    <Box sx={{py:10}}>
      <Box
        sx={{maxWidth:650,
        mx:"auto"}}
      >
        <OnboardingCard>
          <Stack
            spacing={4}
            sx={{
              alignItems:"center",
            textAlign:"center"
        }}
          >
            <TaskAltIcon
              color="success"
              sx={{
                fontSize: 100,
              }}
            />

            <Typography
              variant="h3"
             sx={{ fontWeight:700}}
            >
              Application Submitted
            </Typography>

            <Typography
              color="text.secondary"
            >
              Your verification request
              has been received.
            </Typography>

            <Typography
              variant="h6"
            >
              Review Time:
              24 - 48 Hours
            </Typography>

            <Button
              variant="contained"
              size="large"
            >
              Go To Dashboard
            </Button>
          </Stack>
        </OnboardingCard>
      </Box>
    </Box>
  );
}