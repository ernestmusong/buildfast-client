"use client";

import { Paper } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export default function SectionCard({
  children,
}: Props) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 4,
        mb: 4,
        borderRadius: 3,
      }}
    >
      {children}
    </Paper>
  );
}