"use client";

import {
  Stack,
  Typography,
  Box,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const indicators = [
  {
    icon: LockOutlinedIcon,
    title: "Bank-grade Security",
  },
  {
    icon: BoltOutlinedIcon,
    title: "99.9% API Uptime",
  },
  {
    icon: SupportAgentOutlinedIcon,
    title: "24/7 Developer Support",
  },
];

export default function HeroTrustIndicators() {
  return (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing={{
        xs: 2,
        md: 4,
      }}
      sx={{
        mt: 1,
        alignItems: {
          xs: "flex-start",
          sm: "center",
        },
      }}
    >
      {indicators.map((item) => {
        const Icon = item.icon;

        return (
          <Stack
          component='div'
            key={item.title}
            direction="row"
            spacing={1.25}
            sx={{
              transition: "all .25s ease",

              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                // bgcolor: "primary.main",

                color: "primary.main",

                flexShrink: 0,

                boxShadow: (theme) =>
                  `0 8px 20px ${theme.palette.primary.main}25`,
              }}
            >
              <Icon fontSize="small" />
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              {item.title}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
}