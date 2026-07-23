"use client";

import Link from "next/link";

import {
  Avatar,
  Box,
  Stack,
  Typography,
} from "@mui/material";

import BoltRoundedIcon from "@mui/icons-material/BoltRounded";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  logo?: React.ReactNode;
  logoHref?: string;
}

export default function AuthHeader({
  title,
  subtitle,
  logoHref = "/",
  logo
}: AuthHeaderProps) {
  return (
    <Box
    sx={{
        mb: 5
    }}
    >
      <Stack
        spacing={3}
        // alignItems="center"
        // textAlign="center"
      >
        {/* Logo */}

        <Box
          component={Link}
          href={logoHref}
          sx={{
            textDecoration: "none",
          }}
        >
          {logo ? (logo) : (
            <Avatar
            sx={{
              width: 64,
              height: 64,
              bgcolor: "primary.main",
            }}
          >
            <BoltRoundedIcon
              sx={{
                fontSize: 34,
              }}
            />
          </Avatar>
          )}
        </Box>

        {/* Brand */}

        <Typography
          variant="h5"
         sx={{
             fontWeight: 800
         }}
        >
          BuildFast
        </Typography>

        {/* Heading */}

        <Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
                fontWeight: 700
            }}
          >
            {title}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 420,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}