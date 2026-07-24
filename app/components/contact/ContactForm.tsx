"use client";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import SendRoundedIcon from "@mui/icons-material/SendRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

const departments = [
  "Sales",
  "Technical Support",
  "Merchant Verification",
  "Billing",
  "Partnerships",
  "General Enquiry",
];

const highlights = [
  {
    icon: EmailOutlinedIcon,
    title: "Quick Responses",
    description: "Most enquiries receive a response within one business day.",
  },
  {
    icon: SupportAgentOutlinedIcon,
    title: "Technical Experts",
    description:
      "Speak directly with engineers familiar with the BuildFast APIs.",
  },
  {
    icon: VerifiedOutlinedIcon,
    title: "Merchant Success",
    description:
      "We'll guide you through sandbox setup and production onboarding.",
  },
  {
    icon: AccessTimeOutlinedIcon,
    title: "Business Hours",
    description:
      "Monday - Friday • 8:00 AM - 6:00 PM (GMT+1)",
  },
];

export default function ContactForm() {
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
        <Grid
          container
          spacing={6}
          sx={{
            alignItems:"stretch"
          }}
        >
          {/* LEFT */}

          <Grid
            size={{
              xs: 12,
              lg: 5,
            }}
          >
            <Stack spacing={4}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 2,
                    fontWeight:800
                  }}
                >
                  Send us a message
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.9,
                    fontSize: "1.05rem",
                  }}
                >
                  Whether you're integrating MTN Mobile Money,
                  Orange Money, or exploring enterprise payment
                  infrastructure, our team is here to help.
                </Typography>
              </Box>

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <Paper
                    key={item.title}
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      border: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2.5}
                      sx={{
                        alignItems:"flex-start"
                      }}
                    >
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: 3,
                          bgcolor: "primary.main",
                          color: "primary.contrastText",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon />
                      </Box>

                      <Box>
                        <Typography
                         sx={{
                             fontWeight:700,
                             mb:0.5
                         }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          color="text.secondary"
                          sx={{
                            lineHeight:1.7
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                );
              })}
            </Stack>
          </Grid>

          {/* RIGHT */}

          <Grid
            size={{
              xs: 12,
              lg: 7,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: {
                  xs: 3,
                  md: 5,
                },
                borderRadius: 5,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
              }}
            >
              <Grid container spacing={3}>
                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Full Name"
                    placeholder="John Doe"
                  />
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Company"
                    placeholder="ABC Ltd"
                  />
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Business Email"
                    type="email"
                    placeholder="john@company.com"
                  />
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Phone Number"
                    placeholder="+237 6XX XXX XXX"
                  />
                </Grid>

                <Grid size={12}>
                  <FormControl fullWidth>
                    <TextField
                      select
                      label="Department"
                      defaultValue=""
                    >
                      {departments.map((department) => (
                        <MenuItem
                          key={department}
                          value={department}
                        >
                          {department}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Grid>

                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    placeholder="How can we help?"
                  />
                </Grid>

                <Grid size={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="Message"
                    placeholder="Tell us more about your project..."
                  />
                </Grid>

                <Grid size={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I agree to the Privacy Policy and consent to BuildFast contacting me regarding my enquiry."
                  />
                </Grid>

                <Grid size={12}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<SendRoundedIcon />}
                    sx={{
                      height: 56,
                      px: 5,
                      borderRadius: 3,
                      fontWeight: 700,
                      textTransform: "none",
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}