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
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const features = [
  {
    title: "Accept payments",
    description:  "Accept MTN Mobile Money and Orange Money payments through a simple and reliable API.",
    icon: PaymentsOutlinedIcon,
  },
  {
    title:  "Instant Payouts",
    description: "Send money to customers, suppliers, and partners instantly with secure disbursement APIs.",
    icon: AccountBalanceWalletOutlinedIcon,
  },
  {
    title: "Enterprise Security",
    description:  "Protect your business with API keys, IP whitelisting, phone whitelisting, and advanced security controls.",
    icon: SecurityOutlinedIcon,
  },
  {
    title: "Developer First",
    description: "Get started quickly with sandbox testing, SDKs, comprehensive documentation, and API examples.",
    icon: CodeOutlinedIcon,
  },
  {
    title: "Real-time Insights",
    description: "Monitor transactions, balances, API activity, and generate detailed financial reports from your dashboard.",
    icon: InsightsOutlinedIcon,
  },
  {
    icon: NotificationsNoneOutlinedIcon,
    title: "Webhooks & Events",
    description:
      "Receive real-time notifications whenever deposits, withdrawals, refunds, or account events occur.",
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
        <Container maxWidth="xl"
        sx={{
            margin: "0 auto",
            maxWidth: {lg: 700},
            textAlign: "center",
            marginBottom: 4
        }}
          
        >
          <Box
            component='span'
          sx={{
            letterSpacing: 2,
            fontWeight: 700,
            color: "primary.main",
            margin: "0 auto"
          }}
          >
            WHY BUILDFAST
          </Box>
          <Typography
            variant='h2'
            sx={{
                color: "text.primary",
            }}
          >
             Everything you need to build powerful payment experiences
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
                color: "text.secondary",
            }}
            >
            Build secure payment flows, automate transactions, and
            scale your business using APIs designed for modern developers.
          </Typography>
        </Container>
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
                  lg: 3,
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