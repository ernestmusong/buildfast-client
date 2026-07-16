"use client";

import {
  Button,
  Paper,
  Typography,
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function EndpointTester() {
  return (
    <Paper
      variant="outlined"
      sx={{ p: 3 }}
    >
      <Typography
        variant="h6"
        gutterBottom
      >
        Endpoint Tester
      </Typography>

      <Button
        fullWidth
        variant="contained"
        startIcon={
          <PlayArrowIcon />
        }
      >
        Send Request
      </Button>
    </Paper>
  );
}