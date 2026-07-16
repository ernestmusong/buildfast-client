"use client";

import { Typography } from "@mui/material";

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          {subtitle}
        </Typography>
      )}
    </>
  );
}