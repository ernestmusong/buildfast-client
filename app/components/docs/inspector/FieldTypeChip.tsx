"use client";

import Chip from "@mui/material/Chip";

interface Props {
  type: string;
}

export default function FieldTypeChip({
  type,
}: Props) {
  return (
    <Chip
      size="small"
      color="primary"
      variant="outlined"
      label={type}
    />
  );
}