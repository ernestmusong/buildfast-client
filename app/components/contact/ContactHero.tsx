"use client";

import Link from "next/link";

import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

export default function ContactHero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",
        py: {
          xs: 10,
          md: 14,
        },
      }}
    >
      {/* Background Glow */}

      <Box
        sx={{
          position: "absolute",
          top: -200,
          right: -250,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,.12), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <Container maxWidth="xl">
        <Grid
          container
          spacing={8}
          sx={{
            alignItems:"center"
          }}
        >
          {/* Left */}

          <Grid
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <Chip
              icon={<EmailOutlinedIcon />}
              label="We're here to help"
              color="primary"
              sx={{
                borderRadius: 20,
                fontWeight: 600,
              }}
            />

            <Typography
              component="h1"
              sx={{
                mt: 4,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "text.primary",

                fontSize: {
                  xs: "2.8rem",
                  md: "4rem",
                  lg: "4.7rem",
                },
              }}
            >
              Let's build something{" "}

              <Box
                component="span"
                sx={{
                  color: "primary.main",
                }}
              >
                great
              </Box>

              <br />

              together.
            </Typography>

            <Typography
              sx={{
                mt: 4,
                maxWidth: 560,
                color: "text.secondary",
                lineHeight: 1.9,
                fontSize: "1.1rem",
              }}
            >
              Whether you're integrating the BuildFast API,
              exploring enterprise pricing, or need technical
              assistance, our team is ready to help you build
              faster and scale confidently.
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              sx={{
                mt: 5,
              }}
            >
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  height: 56,
                  px: 4,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                Contact Sales
              </Button>

              <Button
                component={Link}
                href="/docs"
                variant="outlined"
                size="large"
                startIcon={<MenuBookRoundedIcon />}
                sx={{
                  height: 56,
                  px: 4,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                API Documentation
              </Button>
            </Stack>

            {/* Quick Stats */}

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={4}
              sx={{
                mt: 6,
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight:800
                  }}
                >
                  24/7
                </Typography>

                <Typography color="text.secondary">
                  Developer Support
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight:800
                  }}
                >
                  &lt;24h
                </Typography>

                <Typography color="text.secondary">
                  Average Response
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight:800
                  }}
                >
                  99.9%
                </Typography>

                <Typography color="text.secondary">
                  API Availability
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Right */}

          <Grid
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 6,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "0 20px 60px rgba(0,0,0,.08)",
              }}
            >
              <Typography
                variant="h5"
                 sx={{
                    fontWeight:700
                  }}
              >
                Contact the BuildFast Team
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  mb: 4,
                  color: "text.secondary",
                }}
              >
                Choose the department that best matches your
                request.
              </Typography>

              <Stack spacing={2.5}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2.5,
                    borderRadius: 4,
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <BusinessOutlinedIcon color="primary" />

                    <Box>
                      <Typography
                       sx={{
                    fontWeight:700
                  }}
                      >
                        Sales & Partnerships
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        Enterprise pricing, partnerships,
                        and product demonstrations.
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>

                <Paper
                  variant="outlined"
                  sx={{
                    p: 2.5,
                    borderRadius: 4,
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <SupportAgentOutlinedIcon color="primary" />

                    <Box>
                      <Typography
                       sx={{
                    fontWeight:700
                  }}
                      >
                        Technical Support
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        API integration, sandbox,
                        production access and troubleshooting.
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>

                <Paper
                  variant="outlined"
                  sx={{
                    p: 2.5,
                    borderRadius: 4,
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <EmailOutlinedIcon color="primary" />

                    <Box>
                      <Typography
                       sx={{
                    fontWeight:700
                  }}
                      >
                        General Enquiries
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        Questions about BuildFast,
                        merchant onboarding,
                        billing and more.
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}