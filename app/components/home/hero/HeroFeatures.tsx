"use client";

import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

const features = [
  {
    title: "Accept Payments",
    description: "Collect MTN MoMo & Orange Money payments.",
    icon: PaymentsOutlinedIcon,
  },
  {
    title: "Send Payouts",
    description: "Transfer funds securely to customers.",
    icon: AccountBalanceWalletOutlinedIcon,
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security and compliance.",
    icon: SecurityOutlinedIcon,
  },
  {
    title: "Developer First",
    description: "Simple APIs with excellent documentation.",
    icon: CodeOutlinedIcon,
  },
  {
    title: "Real-time Insights",
    description: "Track transactions with live analytics.",
    icon: InsightsOutlinedIcon,
  },
];

export default function HeroFeatures() {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 3,
        mt: {
          xs: 6,
          lg: -4,
        },
        pb: {
          xs: 6,
          md: 8,
        },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Grid
                key={feature.title}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 2.4,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",

                    borderRadius: 5,

                    bgcolor: "background.paper",

                    border: "1px solid",

                    borderColor: "divider",

                    transition: "all .3s ease",

                    boxShadow:
                      "0 10px 30px rgba(15,23,42,.05)",

                    "&:hover": {
                      transform: "translateY(-8px)",

                      borderColor: "primary.main",

                      boxShadow:
                        "0 20px 45px rgba(37,99,235,.15)",
                    },
                  }}
                >
                  <Stack spacing={2.5}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,

                        borderRadius: 3,

                        bgcolor: "primary.main",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        color: "primary.contrastText",
                      }}
                    >
                      <Icon fontSize="medium" />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "text.primary",
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}