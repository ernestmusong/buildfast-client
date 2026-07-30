import {
  Alert,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

export default function PendingPage() {
  return (
    <Box sx={{py:6}}>
      <Stack spacing={4}>
        <Alert severity="warning">
          Limited account access until
          verification is complete.
        </Alert>

        <Card>
          <CardContent>
            <Stack spacing={3}>
              <Typography
                variant="h4"
                sx={{fontWeight:700}}
              >
                Verification In Progress
              </Typography>

              <Typography>
                Current Status:
                Pending Review
              </Typography>

              <Typography>
                Expected Completion:
                1 - 2 Business Days
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}