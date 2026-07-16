"use client";

import Chip from "@mui/material/Chip";

interface Props {
  required: boolean;
}

export default function RequiredChip({
  required,
}: Props) {
  return (
    <Chip
      size="small"
      color={required ? "success" : "default"}
      label={required ? "Required" : "Optional"}
    />
  );
}