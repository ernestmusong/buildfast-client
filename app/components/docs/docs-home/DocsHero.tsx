"use client";

import Link from "next/link";

import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import ApiRoundedIcon from "@mui/icons-material/ApiRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import WebhookRoundedIcon from "@mui/icons-material/WebhookRounded";

const features = [
  {
    icon: <ApiRoundedIcon fontSize="small" />,
    label: "REST API",
  },
  {
    icon: <WebhookRoundedIcon fontSize="small" />,
    label: "Webhooks",
  },
  {
    icon: <BoltRoundedIcon fontSize="small" />,
    label: "Sandbox",
  },
  {
    icon: <SecurityRoundedIcon fontSize="small" />,
    label: "Secure Authentication",
  },
];

export default function DocsHero() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={5}>
          {/* Badge */}

          <Chip
            color="primary"
            icon={<RocketLaunchRoundedIcon />}
            label="BuildFast Developer Documentation"
            sx={{
              alignSelf: "flex-start",
              fontWeight: 600,
            }}
          />

          {/* Heading */}

          <Typography
            variant="h2"
            sx={{
               textAlign: "left"
              
            }}
          >
            Build Mobile Money
            <br />
            Experiences with
            <Box
              component="span"
              color="primary.main"
            >
              {" "}
              BuildFast APIs
            </Box>
          </Typography>

          {/* Description */}

          <Typography
           variant="subtitle1"
            color="text.secondary"
          >
            Integrate MTN Mobile Money and Orange Money
            collections, payouts, payment links and bulk
            disbursements using secure REST APIs, webhooks and
            SDKs.
          </Typography>

          {/* Buttons */}

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
          >
            <Button
              component={Link}
              href="/docs/introduction"
              variant="contained"
              size="large"
              startIcon={<MenuBookRoundedIcon />}
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              Get Started
            </Button>

            <Button
              component={Link}
              href="/docs/collections/create"
              variant="outlined"
              size="large"
              startIcon={<ApiRoundedIcon />}
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              Explore APIs
            </Button>
          </Stack>

          {/* Feature Chips */}

          <Stack
            direction="row"
            spacing={1.5}
            sx={{
                flexWrap:"wrap"
            }}
          >
            {features.map((feature) => (
              <Chip
                key={feature.label}
                icon={feature.icon}
                label={feature.label}
                variant="outlined"
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}