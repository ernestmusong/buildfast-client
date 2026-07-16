"use client";

import {
  Paper,
  Typography,
  Stack,
  Chip,
} from "@mui/material";

import { FieldDefinition } from "@/types/endpoint/Field";

interface Props {
  field: FieldDefinition;
  onSelect?: (
    field: FieldDefinition
  ) => void;
}

export default function JsonNode({
  field,
  onSelect,
}: Props) {
  return (
    <Paper
      variant="outlined"
      onClick={() =>
        onSelect?.(field)
      }
      sx={{
        p: 2,
        cursor: "pointer",
        mb: 1,
        transition: ".2s",

        "&:hover": {
          bgcolor: "action.hover",
        },
      }}
    >
      <Stack
        direction="row"
        sx={{
            justifyContent:"space-between",
        alignItems:"center"
        }}
      >
        <Typography
          sx={{
            fontFamily:"monospace"
          }}
        >
          {field.name}
        </Typography>

        <Chip
          label={field.type}
          size="small"
        />
      </Stack>
    </Paper>
  );
}