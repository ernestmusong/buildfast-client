import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

export default function RejectedPage() {
  return (
    <Box sx={{py:6}}>
      <Stack spacing={4}>
        <Alert severity="error">
          Verification could not be
          completed.
        </Alert>

        <Card>
          <CardContent>
            <Stack spacing={3}>
              <Typography
                variant="h4"
                sx={{ fontWeight:700}}
              >
                Additional Information Required
              </Typography>

              <Typography>
                Our compliance team
                was unable to verify
                your submitted documents.
              </Typography>

              <Typography
               sx={{ fontWeight:600}}
              >
                Reason
              </Typography>

              <Typography>
                Government ID image
                is blurry and cannot
                be verified.
              </Typography>

              <Typography
                sx={{fontWeight:600}}
              >
                Next Steps
              </Typography>

              <Typography>
                Upload a clearer copy
                of your ID document.
              </Typography>

              <Stack
                direction="row"
                spacing={2}
              >
                <Button
                  variant="contained"
                >
                  Re-upload Documents
                </Button>

                <Button
                  variant="outlined"
                >
                  Contact Support
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}