"use client";

import Link from "next/link";

import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

export default function CTASection() {
  return (
    <Box
      component="section"
      sx={{
        py: {
          xs: 8,
          md: 12,
        },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            position: "relative",
            overflow: "hidden",

            px: {
              xs: 4,
              md: 8,
            },

            py: {
              xs: 6,
              md: 8,
            },

            borderRadius: 6,

            color: "primary.contrastText",

            background: (theme) =>
              `linear-gradient(135deg,
                ${theme.palette.primary.dark} 0%,
                ${theme.palette.primary.main} 55%,
                ${theme.palette.primary.light} 100%)`,

            boxShadow: (theme) =>
              `0 30px 80px ${theme.palette.primary.main}40`,
          }}
        >
          {/* Decorative Glow */}

          <Box
            sx={{
              position: "absolute",
              top: -180,
              right: -150,
              width: 420,
              height: 420,
              borderRadius: "50%",
              background: "rgba(255,255,255,.10)",
              filter: "blur(30px)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: -140,
              left: -120,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "rgba(255,255,255,.08)",
              filter: "blur(40px)",
            }}
          />

          <Stack
            spacing={3}
            sx={{
                 alignItems: "center",
            textAlign: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Chip
              icon={<RocketLaunchRoundedIcon />}
              label="Start Building Today"
              sx={{
                bgcolor: "rgba(255,255,255,.18)",
                color: "#fff",
                backdropFilter: "blur(10px)",
                fontWeight: 700,

                "& .MuiChip-icon": {
                  color: "#fff",
                },
              }}
            />

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                lineHeight: 1.15,

                fontSize: {
                  xs: "2.2rem",
                  md: "3.4rem",
                },

                maxWidth: 760,
              }}
            >
              Ready to integrate MTN Mobile Money
              and Orange Money into your business?
            </Typography>

            <Typography
              sx={{
                maxWidth: 720,
                fontSize: "1.1rem",
                lineHeight: 1.9,
                opacity: 0.9,
              }}
            >
              Create a free sandbox account, test every API,
              and go live when your business is verified.
              BuildFast provides secure collections, payouts,
              webhooks, and developer tools designed for
              businesses across Cameroon.
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2.5}
              sx={{
                mt: 2,
              }}
            >
              <Button
                component={Link}
                href="/register"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  bgcolor: "#fff",
                  color: "primary.main",

                  px: 5,
                  height: 58,

                  borderRadius: 3,

                  fontWeight: 700,
                  textTransform: "none",

                  "&:hover": {
                    bgcolor: "grey.100",
                  },
                }}
              >
                Create Sandbox Account
              </Button>

              <Button
                component={Link}
                href="/docs"
                variant="outlined"
                size="large"
                startIcon={<MenuBookRoundedIcon />}
                sx={{
                  px: 5,
                  height: 58,

                  borderRadius: 3,

                  textTransform: "none",

                  fontWeight: 700,

                  color: "#fff",

                  borderColor: "rgba(255,255,255,.4)",

                  "&:hover": {
                    borderColor: "#fff",
                    bgcolor: "rgba(255,255,255,.08)",
                  },
                }}
              >
                Explore API Docs
              </Button>
            </Stack>

            <Stack
              direction={{
                xs: "column",
                md: "row",
              }}
              spacing={5}
              sx={{
                mt: 5,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  opacity: .9,
                }}
              >
                ✓ Free Sandbox Environment
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  opacity: .9,
                }}
              >
                ✓ Production API Access
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  opacity: .9,
                }}
              >
                ✓ Merchant Verification Support
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  opacity: .9,
                }}
              >
                ✓ Developer-first Documentation
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}