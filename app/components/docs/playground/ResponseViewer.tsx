"use client";

import {
  Paper,
  Typography,
} from "@mui/material";

import CodeBlock from "../code/CodeBlock";

interface Props {
  response: object;
}

export default function ResponseViewer({
  response,
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
        Response
      </Typography>

      <CodeBlock
        language="json"
        code={JSON.stringify(
          response,
          null,
          2
        )}
      />
    </Paper>
  );
}