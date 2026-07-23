"use client";

import Link from "next/link";

import {
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

interface AuthFooterProps {
  question: string;
  actionLabel: string;
  href: string;

  showLegalLinks?: boolean;
}

export default function AuthFooter({
  question,
  actionLabel,
  href,
  showLegalLinks = true,
}: AuthFooterProps) {
  return (
    <Box
    sx={{
        mt: 5
    }}
    >
      <Divider sx={{ mb: 3 }} />

      <Stack
        spacing={2}
        sx={{
            alignItems:"center"
        }}
      >
        {/* Auth Navigation */}
        <Stack
  direction="row"
  spacing={0.5}
  useFlexGap
 sx={{
     justifyContent:"center",
  flexWrap:"wrap"
 }}
>
  <Typography variant="body2" color="text.secondary">
    {question}
  </Typography>

  <Typography
    component={Link}
    href={href}
    variant="body2"
    color="primary"
    
    sx={{
      textDecoration: "none",
      fontWeight: 600,
      "&:hover": {
        textDecoration: "underline",
      },
    }}
  >
    {actionLabel}
  </Typography>
</Stack>

        {/* Legal Links */}

        {showLegalLinks && (
          <Stack
            direction="row"
            spacing={2}
            divider={
              <Typography
                color="divider"
              >
                •
              </Typography>
            }
            sx={{
                 flexWrap: 'wrap',
                 justifyContent:"center"
                }}
          >
            <Typography
              component={Link}
              href="/terms"
              variant="caption"
              color="text.secondary"
              sx={{
                textDecoration: "none",

                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Terms
            </Typography>

            <Typography
              component={Link}
              href="/privacy"
              variant="caption"
              color="text.secondary"
              sx={{
                textDecoration: "none",

                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Privacy
            </Typography>

            <Typography
              component={Link}
              href="/docs"
              variant="caption"
              color="text.secondary"
              sx={{
                textDecoration: "none",

                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Documentation
            </Typography>
          </Stack>
        )}
      </Stack>
    </Box>
  );
}