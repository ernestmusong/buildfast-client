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
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import { ProductData } from "@/types/product";


interface HeroProps {
  heroTitle:string
   heroDescription:string
   badge:string
}
const HeroSection: React.FC<HeroProps> = ({heroTitle, heroDescription, badge}) => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Chip
              label={badge}
              variant="filled"
              sx={{
          borderRadius: "999px",
          px: 1,
          height: 38,
          fontWeight: 600,
          mb: 3,
          textAlign: {sx: "center"},
          color: "primary.main",
          "& .MuiChip-icon": {
            color: "primary.main",
          },
            }}

            />

            <Typography
               component="h1"
               variant="h1"
            >
               {heroTitle}
            </Typography>

            <Typography
              gutterBottom
              sx={{
        //   mb: 4,
          color: "text.secondary",
          fontSize: "1.15rem",
          lineHeight: 1.9,
          maxWidth: 520,
        }}
            >
               {heroDescription}
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
              component={Link}
              href="/docs"
                size="large"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                 sx={{
          textTransform: "none",
          boxShadow: (theme) =>
            `0 12px 30px ${theme.palette.primary.main}33`,

          transition: "all .25s ease",

          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: (theme) =>
              `0 18px 40px ${theme.palette.primary.main}55`,
          },

          "& .MuiButton-endIcon": {
            transition: ".25s",
          },

          "&:hover .MuiButton-endIcon": {
            transform: "translateX(3px)",
          },
        }}
              >
                Start Integrating
              </Button>

              <Button
                component={Link}
                href="/docs"
                size="large"
                variant="outlined"
                startIcon={<MenuBookRoundedIcon />}
                sx={{
          textTransform: "none",

          borderWidth: 1.5,

          color: "text.primary",
          borderColor: "divider",
          backgroundColor: "background.paper",

          transition: "all .25s ease",

          "&:hover": {
            borderWidth: 1.5,
            borderColor: "primary.main",
            color: "primary.main",
            backgroundColor: "background.paper",
            transform: "translateY(-2px)",
          },
        }}
              >
                View API Docs
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 4,
                borderRadius: 4,
              }}
            >
              <Typography variant="h6">
                Payment Request
              </Typography>

              <Box
                component="pre"
                sx={{
                  overflow: "auto",
                  mt: 2,
                }}
              >
{`{
  "amount": 5000,
  "currency": "XAF",
  "phone": "677123456"
}`}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection