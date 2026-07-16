"use client";

import {
  Paper,
  Stack,
} from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export default function FieldCard({
  children,
}: Props) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 3,
      }}
    >
      <Stack spacing={3}>
        {children}
      </Stack>
    </Paper>
  );
}