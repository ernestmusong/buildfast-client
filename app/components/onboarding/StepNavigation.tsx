"use client";

import {
  Button,
  Stack,
} from "@mui/material";

interface Props {
  backLabel?: string;
  nextLabel?: string;
}

export default function StepNavigation({
  backLabel = "Back",
  nextLabel = "Continue",
}: Props) {
  return (
    <Stack
      direction="row"
      spacing={2}
     sx={{ justifyContent:"space-between"}}
    >
      <Button variant="outlined">
        {backLabel}
      </Button>

      <Button variant="contained">
        {nextLabel}
      </Button>
    </Stack>
  );
}