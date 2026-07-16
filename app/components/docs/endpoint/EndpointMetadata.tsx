"use client";

import {
  Paper,
  Grid,
  Typography,
} from "@mui/material";

interface Props {
  environment: string;
  authentication: string;
  rateLimit?: string;
  sdkSupport?: string;
}

export default function EndpointMetadata({
  environment,
  authentication,
  rateLimit,
  sdkSupport,
}: Props) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 4,
        mb: 4,
      }}
    >
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="caption"
          >
            Environment
          </Typography>

          <Typography>
            {environment}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="caption"
          >
            Authentication
          </Typography>

          <Typography>
            {authentication}
          </Typography>
        </Grid>

        {rateLimit && (
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Typography
              variant="caption"
            >
              Rate Limit
            </Typography>

            <Typography>
              {rateLimit}
            </Typography>
          </Grid>
        )}

        {sdkSupport && (
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Typography
              variant="caption"
            >
              SDK Support
            </Typography>

            <Typography>
              {sdkSupport}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}