import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

import OnboardingCard from "@/components/dashboard/onboarding/OnboardingCard";

export default function VerifyEmailPage() {
  return (
    <Box sx={{py:8}}>
      <Box
      sx={{
        maxWidth:600, 
        mx:"auto"
      }}
      >
        <OnboardingCard>
          <Stack spacing={4}>
            <Box sx={{textAlign:"center"}}>
              <MarkEmailReadIcon
                color="primary"
                sx={{
                  fontSize: 64,
                  mb: 2,
                }}
              />

              <Typography
                variant="h4"
               sx={{fontWeight:700}}
              >
                Verify Your Email
              </Typography>

              <Typography
                color="text.secondary"
                sx={{mt:1}}
              >
                We sent a verification code to
              </Typography>

              <Typography sx={{fontWeight:600}}>
                merchant@example.com
              </Typography>
            </Box>

            <Stack
              direction="row"
              spacing={2}
              sx={{justifyContent:"center"}}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <TextField
                  key={n}
                  sx={{ width: 60 }}
                />
              ))}
            </Stack>

            <Typography
             
             sx={{ color:"text.secondary",  textAlign:"center"}}
            >
              Didn't receive a code?
            </Typography>

            <Button variant="text">
              Resend Code
            </Button>

            <Button
              variant="contained"
              size="large"
            >
              Verify Email
            </Button>
          </Stack>
        </OnboardingCard>
      </Box>
    </Box>
  );
}