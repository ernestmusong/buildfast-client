"use client";

import {
  Box,
  LinearProgress,
  Typography,
} from "@mui/material";

export default function MobileProgressHeader() {
  return (
    <Box
      sx={{
        p: 3,
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Typography sx={{mb:2}}>
        Step 4 of 7
      </Typography>

      <LinearProgress
        value={57}
        variant="determinate"
      />
    </Box>
  );
}