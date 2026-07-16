"use client";

import { ProductFlowStep } from "@/types/products/product";

import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";

type FlowSteps = {
  steps: ProductFlowStep[]
}

export default function FlowSection({steps}:FlowSteps) {
  return (
    <Container maxWidth="md">
      <Box
      sx={{
        mb:12
      }}
      >
        <Typography
          variant="h2"
          color="text.secondary"
        >
          {steps[0].label}
        </Typography>

        <Paper
          sx={{
            p: 5,
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <Typography>
            {steps[1].label}
          </Typography>

          <Typography sx={{my:2}}>
            ↓
          </Typography>

          <Typography>
            {steps[2].label}
          </Typography>

          <Typography sx={{my:2}}>
            ↓
          </Typography>

          <Typography>
            {steps[3].label}
          </Typography>

          <Typography sx={{my:2}}>
            ↓
          </Typography>

          <Typography>
            {steps[4].label}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}