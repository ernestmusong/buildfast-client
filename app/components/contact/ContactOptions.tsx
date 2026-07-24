"use client";

import Link from "next/link";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

const contactOptions = [
  {
    title: "Sales",
    description:
      "Learn about pricing, enterprise solutions, custom integrations, and product demonstrations.",
    icon: BusinessCenterOutlinedIcon,
    button: "Talk to Sales",
  },
  {
    title: "Technical Support",
    description:
      "Need help integrating the API, using the sandbox, or troubleshooting production issues?",
    icon: SupportAgentOutlinedIcon,
    button: "Get Support",
  },
  {
    title: "Partnerships",
    description:
      "Interested in partnering with BuildFast? Let's build innovative payment experiences together.",
    icon: HandshakeOutlinedIcon,
    button: "Partner With Us",
  },
  {
    title: "Media & Press",
    description:
      "For interviews, press inquiries, speaking engagements, and media resources.",
    icon: CampaignOutlinedIcon,
    button: "Contact Media",
  },
];

export default function ContactOptions() {
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
          mb:7
          }}
        >
          <Typography
            variant="h3"
            sx={{
                fontWeight:700,
              fontSize: {
                xs: "2rem",
                md: "2.8rem",
              },
            }}
          >
            How can we help?
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 700,
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            Choose the team that best matches your request.
            We'll make sure you reach the right people quickly.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <Grid
                key={option.title}
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 3,
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
                    transition: "all .3s ease",

                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: "primary.main",
                      boxShadow: (theme) =>
                        `0 18px 45px ${theme.palette.primary.main}20`,
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
                        width: 68,
                        height: 68,
                        borderRadius: 4,
                        bgcolor: "primary.main",
                        color: "primary.contrastText",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        mb: 3,
                      }}
                    >
                      <Icon sx={{ fontSize: 34 }} />
                    </Box>

                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                    fontWeight:700
                  }}
                    >
                      {option.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.8,
                        flexGrow: 1,
                        mb: 4,
                      }}
                    >
                      {option.description}
                    </Typography>

                    <Button
                      component={Link}
                      href="/contact"
                      endIcon={<ArrowForwardRoundedIcon />}
                      variant="text"
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
                      {option.button}
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