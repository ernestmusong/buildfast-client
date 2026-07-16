"use client";

import {
  Paper,
  Typography,
} from "@mui/material";

export default function InspectorEmptyState() {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 4,
        borderRadius: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h6">
        Field Inspector
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
            mt:1
        }}
      >
        Click any header, parameter,
        request field or response field
        to inspect it.
      </Typography>
    </Paper>
  );
}