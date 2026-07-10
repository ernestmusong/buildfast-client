"use client";

import Link from "next/link";

import {
  Button,
  Stack,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

export default function HeroButtons() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      sx={{
        width: "100%",
        alignItems: {
          xs: "stretch",
          sm: "center",
        },
      }}
    >
      {/* Primary CTA */}

      <Button
        component={Link}
        href="/register"
        variant="contained"
        endIcon={<ArrowForwardRoundedIcon />}
        size="large"
        sx={{
          px: 4,
          height: 56,
          minWidth: 210,

          borderRadius: 3,

          fontSize: ".98rem",
          fontWeight: 700,
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
        Get API Key
      </Button>

      {/* Secondary CTA */}

      <Button
        component={Link}
        href="/docs"
        variant="outlined"
        startIcon={<MenuBookRoundedIcon />}
        size="large"
        sx={{
          px: 4,
          height: 56,
          minWidth: 210,

          borderRadius: 3,

          fontSize: ".98rem",
          fontWeight: 600,
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
        Explore Docs
      </Button>
    </Stack>
  );
}