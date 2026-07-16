"use client";

import {
  Typography,
  Paper,
} from "@mui/material";

interface Props {
  description: string;
}

export default function EndpointDescription({
  description,
}: Props) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 4,
        mb: 4,
      }}
    >
      <Typography
        variant="body1"
        sx={{
            lineHeight:1.8
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
}