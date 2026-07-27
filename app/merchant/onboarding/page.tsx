import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";

import BoltIcon from "@mui/icons-material/Bolt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import OnboardingCard from "@/components/dashboard/onboarding/OnboardingCard";

export default function WelcomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: 8,
      }}
    >
      <Box 
       sx={{
        width:"100%",
         maxWidth:720
    }}
      >
        <OnboardingCard>
          <Stack spacing={4}>
            <Box>
              <BoltIcon
                color="primary"
                sx={{
                  fontSize: 48,
                  mb: 2,
                }}
              />

              <Typography
                variant="h3"
                sx={{
                    fontWeight:700
                }}
              >
                Welcome to BuildFast
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ mt: 2 }}
              >
                Start accepting Mobile Money,
                Bank Transfers and Card Payments
                across Africa.
              </Typography>
            </Box>

            <Stack spacing={2}>
              {[
                "Mobile Money Collections",
                "Bank Transfers",
                "Card Payments",
                "Developer APIs",
                "Instant Settlements",
              ].map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={2}
                   sx={{
                    alignItems:"center"
                }}
                  
                >
                  <CheckCircleIcon
                    color="success"
                  />

                  <Typography>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Estimated setup time
              </Typography>

              <Typography
                variant="h6"
                 sx={{
                    fontWeight:700
                }}
              >
                5 Minutes
              </Typography>
            </Box>

            <Button
              size="large"
              variant="contained"
              fullWidth
            >
              Start Setup
            </Button>
          </Stack>
        </OnboardingCard>
      </Box>
    </Box>
  );
}