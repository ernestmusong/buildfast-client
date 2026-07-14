"use client";

import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";

export default function FlowSection() {
  return (
    <Container maxWidth="md">
      <Box
      sx={{
        py:10
      }}
      >
        <Typography
          variant="h3"
           
          sx={{
            mb:6,
            textAlign:"center",
            fontWeight:800
          }}
        >
          How Collections Work
        </Typography>

        <Paper
          sx={{
            p: 5,
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <Typography>
            Customer
          </Typography>

          <Typography sx={{my:2}}>
            ↓
          </Typography>

          <Typography>
            BuildFast Collections API
          </Typography>

          <Typography sx={{my:2}}>
            ↓
          </Typography>

          <Typography>
            MTN Mobile Money
          </Typography>

          <Typography>
            or
          </Typography>

          <Typography>
            Orange Money
          </Typography>

          <Typography sx={{my:2}}>
            ↓
          </Typography>

          <Typography>
            Merchant Account
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}