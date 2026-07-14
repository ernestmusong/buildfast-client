"use client";

import { Box, Container, Grid } from "@mui/material";

import DashboardPreview from "../../dashboard/dashboard-preview/DashboardPreview";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroFeatures from "./HeroFeatures";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",

        // pt: {
        //   xs: 6,
        //   md: 10,
        //   lg: 12,
        // },

        pb: {
          xs: 4,
          md: 6,
          lg: 8,
        },
      }}
    >
      {/* Decorative Background */}
      <HeroBackground />

      {/* Hero */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid
          container
          spacing={{
            xs: 6,
            md: 8,
          }}
        >
          {/* Left Content */}
          <Grid
            size={{
              xs: 12,
              lg: 5,
            }}
          >
            <HeroContent />
          </Grid>

          {/* Right Dashboard */}
          <Grid
            size={{
              xs: 12,
              lg: 7,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  lg: "flex-end",
                },
                alignItems: "center",

                position: "relative",
                zIndex: 2,
              }}
            >
              <DashboardPreview />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Floating Feature Cards */}
      <HeroFeatures />
    </Box>
  );
}