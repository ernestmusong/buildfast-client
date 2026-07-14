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
        py: 14,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{fontWeight: 800}}
        >
          {ctaTitle}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mb:4
          }}
        >
          {ctaDescription}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{justifyContent:"center"}}
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