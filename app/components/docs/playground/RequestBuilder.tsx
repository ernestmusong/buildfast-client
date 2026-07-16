"use client";

import {
  Paper,
  TextField,
  Typography,
  Stack,
} from "@mui/material";

interface Field {
  name: string;
  label: string;
}

interface Props {
  fields: Field[];
}

export default function RequestBuilder({
  fields,
}: Props) {
  return (
    <Paper
      variant="outlined"
      sx={{ p: 3 }}
    >
      <Typography
        variant="h6"
        gutterBottom
      >
        Request Builder
      </Typography>

      <Stack spacing={2}>
        {fields.map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            fullWidth
            size="small"
          />
        ))}
      </Stack>
    </Paper>
  );
}