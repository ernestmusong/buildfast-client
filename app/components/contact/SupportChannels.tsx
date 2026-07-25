"use client";

import Link from "next/link";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import MonitorHeartRoundedIcon from "@mui/icons-material/MonitorHeartRounded";
import BugReportRoundedIcon from "@mui/icons-material/BugReportRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const channels = [
  {
    title: "API Documentation",
    description:
      "Comprehensive guides, authentication, code examples, SDKs, and testing tools.",
    icon: MenuBookRoundedIcon,
    href: "/docs",
    button: "Read Docs",
  },
  {
    title: "System Status",
    description:
      "Check BuildFast platform availability, uptime, maintenance, and incidents.",
    icon: MonitorHeartRoundedIcon,
    href: "/status",
    button: "View Status",
  },
  {
    title: "Report an Issue",
    description:
      "Found a bug or experiencing unexpected API behaviour? Let us know.",
    icon: BugReportRoundedIcon,
    href: "/contact",
    button: "Report Issue",
  },
  {
    title: "Developer Community",
    description:
      "Join discussions, share solutions, and connect with other BuildFast developers.",
    icon: ForumRoundedIcon,
    href: "/community",
    button: "Join Community",
  },
  {
    title: "Developer Guides",
    description:
      "Step-by-step tutorials for collections, payouts, webhooks, and integrations.",
    icon: AutoStoriesRoundedIcon,
    href: "/guides",
    button: "Explore Guides",
  },
  {
    title: "API Changelog",
    description:
      "Stay informed about new endpoints, improvements, and breaking changes.",
    icon: UpdateRoundedIcon,
    href: "/changelog",
    button: "View Changelog",
  },
];

export default function SupportChannels() {
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
      <Container maxWidth="xl">
        <Stack
          spacing={2}
         sx={{
             alignItems:"center",
          textAlign:"center",
          mb: 7
         }}
        >
          <Chip
            color="primary"
            label="Developer Resources"
            sx={{
              borderRadius: 20,
              fontWeight: 600,
            }}
          />

          <Typography
            variant="h3"
            
            sx={{
                fontWeight: 800,
              fontSize: {
                xs: "2rem",
                md: "2.8rem",
              },
            }}
          >
            Get help when you need it
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: 760,
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            Everything you need to successfully integrate and operate
            with BuildFast—from documentation and API health to
            tutorials, community support, and release updates.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {channels.map((channel) => {
            const Icon = channel.icon;

            return (
              <Grid
                key={channel.title}
                size={{
                  xs: 12,
                  md: 6,
                  lg: 4,
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 5,
                    border: "1px solid",
                    borderColor: "divider",
                    bgcolor: "background.paper",
                    transition: ".3s",

                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: "primary.main",
                      boxShadow: (theme) =>
                        `0 20px 45px ${theme.palette.primary.main}20`,
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 4,
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 3,
                      }}
                    >
                      <Icon sx={{ fontSize: 34 }} />
                    </Box>

                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                          fontWeight: 700
                      }}
                    >
                      {channel.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.8,
                        flexGrow: 1,
                        mb: 3,
                      }}
                    >
                      {channel.description}
                    </Typography>

                    <Button
                      component={Link}
                      href={channel.href}
                      endIcon={<ArrowForwardRoundedIcon />}
                      sx={{
                        alignSelf: "flex-start",
                        textTransform: "none",
                        fontWeight: 700,
                        px: 0,

                        "&:hover": {
                          background: "transparent",
                        },
                      }}
                    >
                      {channel.button}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}