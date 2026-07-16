"use client";

import {
  Stack,
  Chip,
} from "@mui/material";

interface Props {
  values?: string[];
}

export default function AcceptedValues({
  values,
}: Props) {
  if (!values?.length) return null;

  return (
    <Stack
      direction="row"
      spacing={1}
      useFlexGap
      sx={{
        flexWrap:"wrap"
      }}
    >
      {values.map((value) => (
        <Chip
          key={value}
          size="small"
          label={value}
        />
      ))}
    </Stack>
  );
}