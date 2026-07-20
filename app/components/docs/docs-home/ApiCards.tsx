"use client";

import {
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";

import ApiCard from "./ApiCard";

const apis = [
  {
    title: "Collections API",

    description:
      "Accept MTN Mobile Money and Orange Money payments directly from your customers using secure collection endpoints.",

    href: "/docs/collections",

    icon: <PaymentsRoundedIcon fontSize="medium" />,

    color: "primary" as const,

    endpoints: 8,

    features: [
      "Collections",
      "Status",
      "Callbacks",
      "Webhooks",
    ],
  },

  {
    title: "Payouts API",

    description:
      "Transfer funds securely to customer mobile wallets with support for status tracking and retries.",

    href: "/docs/payouts",

    icon: (
      <AccountBalanceWalletRoundedIcon fontSize="medium" />
    ),

    color: "success" as const,

    endpoints: 7,

    features: [
      "Single Payout",
      "Status",
      "History",
      "Retries",
    ],
  },

  {
    title: "Payment Links",

    description:
      "Generate secure hosted payment pages that customers can pay without integrating a checkout flow.",

    href: "/docs/payment-links",

    icon: <LinkRoundedIcon fontSize="medium" />,

    color: "secondary" as const,

    endpoints: 5,

    features: [
      "Hosted Pages",
      "QR Codes",
      "Branding",
      "Expiry",
    ],
  },

  {
    title: "Mass Payouts",

    description:
      "Send thousands of payouts in a single batch using bulk upload or the Mass Payouts API.",

    href: "/docs/mass-payouts",

    icon: <GroupsRoundedIcon fontSize="medium" />,

    color: "warning" as const,

    endpoints: 6,

    features: [
      "Bulk Transfers",
      "CSV Upload",
      "Batch Status",
      "Reports",
    ],
  },
];

export default function ApiCards() {
  return (
    <Box
     sx={{
         py:{
        xs: 8,
        md: 10,
      }
     }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* Section Header */}

          <Box>
            <Chip
              label="API Reference"
              color="primary"
              sx={{ mb: 2 }}
            />

            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight:700
              }}
              
            >
              Explore the BuildFast APIs
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
            >
              Every API is fully documented with endpoint
              references, request and response examples,
              interactive playgrounds, authentication guides,
              error responses and SDK examples.
            </Typography>
          </Box>

          {/* Cards */}

          <Grid container spacing={3}>
            {apis.map((api) => (
              <Grid
                key={api.title}
                size={{
                  xs: 12,
                  sm: 6,
                  xl: 3,
                }}
              >
                <ApiCard
                  {...api}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}