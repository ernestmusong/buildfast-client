"use client";

import {
  Box,
  Paper,
  Typography,
  Stack,
} from "@mui/material";

interface Step {
  title: string;
}

interface Props {
  steps: Step[];
}

export default function FlowDiagram({
  steps,
}: Props) {
  return (
    <Paper
      variant="outlined"
      sx={{ p: 4 }}
    >
      <Typography
        variant="h6"
        gutterBottom
      >
        Flow Diagram
      </Typography>

      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={2}
      >
        {steps.map(
          (step, index) => (
            <Box
              key={step.title}
              sx={{
                flex: 1,
                p: 2,
                border: 1,
                borderColor:
                  "divider",
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Typography
               sx={{
                 fontWeight:700
               }}
              >
                {index + 1}
              </Typography>

              <Typography>
                {step.title}
              </Typography>
            </Box>
          )
        )}
      </Stack>
    </Paper>
  );
}