"use client";

import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import SafetyCheckOutlinedIcon from '@mui/icons-material/SafetyCheckOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';

const securityFeatures = [
  {
    icon: KeyOutlinedIcon,
    title: "Secure API Authentication",
    description:
      "Protect every request using API keys, secret keys, signature validation, and controlled access permissions.",
  },
  {
    icon: LanguageOutlinedIcon,
    title: "IP Whitelisting",
    description:
      "Restrict API access to approved server IP addresses and prevent unauthorized requests.",
  },
  {
    icon: PhoneAndroidOutlinedIcon,
    title: "Phone Whitelisting",
    description:
      "Control which phone numbers can initiate deposits and withdrawals from your application.",
  },
  {
    icon: SafetyCheckOutlinedIcon,
    title: "Fraud Protection",
    description:
      "Monitor suspicious activities, apply transaction rules, and maintain detailed audit records.",
  },
  {
    icon: VerifiedOutlinedIcon,
    title: "Business Verification",
    description:
      "Merchants undergo verification before receiving production API credentials and live access.",
  },
  {
    icon: FactCheckOutlinedIcon,
    title: "Complete Audit Trails",
    description:
      "Track API requests, logins, configuration changes, and payment events in real time.",
  },
];

import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export default function Security() {
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
            SECURITY & TRUST
          </Box>
          <Typography
            variant='h2'
            sx={{
                color: "text.primary",
            }}
          >
              Enterprise-grade security built into every transaction
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
                color: "text.secondary",
            }}
            >
           BuildFast provides the controls businesses need to manage
            payments safely, protect customer funds, and monitor every
            activity on the platform.
          </Typography>
        </Container>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {securityFeatures.map((feature) => {
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