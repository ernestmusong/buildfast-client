"use client";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

const prerequisites = [
  {
    icon: <PersonAddAltRoundedIcon color="primary" />,
    title: "Create a BuildFast Account",
    description:
      "Sign up for a BuildFast merchant account to access the developer dashboard and API services.",
  },
  {
    icon: <VerifiedUserRoundedIcon color="primary" />,
    title: "Verify Your Business",
    description:
      "Complete business verification to unlock production access and comply with payment regulations.",
  },
  {
    icon: <AppsRoundedIcon color="primary" />,
    title: "Create an Application",
    description:
      "Register an application in the dashboard to obtain credentials and configure callbacks.",
  },
  {
    icon: <KeyRoundedIcon color="primary" />,
    title: "Generate API Keys",
    description:
      "Create Sandbox and Production API keys for authenticating every request.",
  },
  {
    icon: <ScienceRoundedIcon color="primary" />,
    title: "Use the Sandbox",
    description:
      "Test your integration in the Sandbox before processing live customer payments.",
  },
  {
    icon: <CodeRoundedIcon color="primary" />,
    title: "Basic REST Knowledge",
    description:
      "You should be comfortable making HTTPS requests and working with JSON APIs.",
  },
];

export default function Prerequisites() {
  return (
    <Box
    sx={{
        py:2
    }}
    >
      <Container maxWidth="lg">
        <Stack spacing={5}>
          <Box>
            <Chip
              label="Before You Start"
              color="primary"
              sx={{ mb: 2 }}
            />

            <Typography
              variant="h4"
               sx={{
                         fontWeight:700
                       }}
            >
              Prerequisites
            </Typography>

            <Typography
              variant="subtitle1"
            color="text.secondary"
            >
              Before making your first API request, ensure your
              BuildFast account and development environment are
              ready. Completing these steps will make your
              integration process smooth and secure.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {prerequisites.map((item) => (
              <Grid
                key={item.title}
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 4,
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    transition: "all .25s ease",

                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: (theme) =>
                        theme.shadows[4],
                    },
                  }}
                >
                  <CardContent>
                    <Stack spacing={2}>
                      <Box>{item.icon}</Box>

                      <Typography
                        variant="h6"
                       sx={{
                         fontWeight:700
                       }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                       sx={{
                         color:"text.secondary",
                        lineHeight:1.8
                       }}
                      >
                        {item.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}