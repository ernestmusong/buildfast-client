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

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

const contactCards = [
  {
    title: "Business Address",
    value: "Douala, Cameroon",
    description: "Head Office",
    icon: LocationOnOutlinedIcon,
  },
  {
    title: "Email",
    value: "support@buildfast.io",
    description: "General enquiries",
    icon: EmailOutlinedIcon,
  },
  {
    title: "Phone",
    value: "+237 XXX XXX XXX",
    description: "Monday - Friday",
    icon: PhoneOutlinedIcon,
  },
  {
    title: "Business Hours",
    value: "08:00 - 18:00",
    description: "GMT+1",
    icon: ScheduleOutlinedIcon,
  },
];

export default function OfficeInformation() {
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
            alignItems:"center"
          }}
        >
          {/* Left */}

          <Grid
            size={{
              xs: 12,
              lg: 5,
            }}
          >
            <Chip
              icon={<BusinessOutlinedIcon />}
              label="BuildFast Headquarters"
              color="primary"
              sx={{
                borderRadius: 20,
                mb: 3,
                fontWeight: 600,
              }}
            />

            <Typography
              variant="h3"
              sx={{
                mb: 3,
                fontWeight: 800,
                fontSize: {
                  xs: "2rem",
                  md: "2.8rem",
                },
              }}
            >
              Visit or contact our team
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.9,
                mb: 4,
                maxWidth: 520,
              }}
            >
              BuildFast helps businesses across Cameroon integrate
              MTN Mobile Money and Orange Money through secure,
              developer-friendly APIs.

              Whether you're just getting started or already in
              production, our team is available to help.
            </Typography>

            <Stack spacing={2}>
              <Typography
                variant="body1"
                color="text.secondary"
              >
                ✓ Enterprise merchant onboarding
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
              >
                ✓ Dedicated technical support
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
              >
                ✓ Secure payment infrastructure
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
              >
                ✓ Production integration assistance
              </Typography>
            </Stack>
          </Grid>

          {/* Right */}

          <Grid
            size={{
              xs: 12,
              lg: 7,
            }}
          >
            <Grid container spacing={3}>
              {contactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <Grid
                    key={card.title}
                    size={{
                      xs: 12,
                      sm: 6,
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
                          transform: "translateY(-6px)",
                          borderColor: "primary.main",
                          boxShadow: (theme) =>
                            `0 18px 45px ${theme.palette.primary.main}20`,
                        },
                      }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: 3,
                            bgcolor: "primary.main",
                            color: "primary.contrastText",

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",

                            mb: 3,
                          }}
                        >
                          <Icon />
                        </Box>

                        <Typography
                          variant="h6"
                          gutterBottom
                          sx={{
                            fontWeight:700,
                          }}
                        >
                          {card.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          {card.value}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {card.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}