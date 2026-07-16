"use client";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";

interface CTAProps {
 ctaTitle: string;
  ctaDescription: string;
}

export default function CTASection({ctaTitle, ctaDescription}: CTAProps) {
  return (
    <Box
     sx={{
        mb:12
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
                color: "text.primary",
            }}
        >
          {ctaTitle}
        </Typography>

        <Typography
          color="text.secondary"
           variant="subtitle1"
        >
          {ctaDescription}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent:"center",
            mt:4

          }}
        >
          <Button
            variant="contained"
            size="large"
          >
            Create Account
          </Button>

          <Button
            variant="outlined"
            size="large"
          >
            Contact Sales
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}