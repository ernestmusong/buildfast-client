"use client";

import {
  Stack,
  Typography,
} from "@mui/material";

interface Props {
  label: string;
  children: React.ReactNode;
}

export default function FieldRow({
  label,
  children,
}: Props) {
  return (
    <Stack spacing={0.5}>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {label}
      </Typography>

      {children}
    </Stack>
  );
}