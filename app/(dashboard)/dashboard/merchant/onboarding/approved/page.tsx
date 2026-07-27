import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ApprovedPage() {
  return (
    <Box sx={{py:6}}>
      <Stack spacing={4}>
        <Card>
          <CardContent>
            <Stack
              spacing={3}
              sx={{alignItems:"center",
              textAlign:"center"}}
            >
              <CheckCircleIcon
                color="success"
                sx={{
                  fontSize: 90,
                }}
              />

              <Typography
                variant="h3"
                sx={{fontWeight:700}}
              >
                Account Approved
              </Typography>

              <Typography>
                Your merchant account
                is now active.
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                Merchant ID Ready
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                API Keys Ready
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                Collections Enabled
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          size="large"
        >
          Go To Dashboard
        </Button>
      </Stack>
    </Box>
  );
}