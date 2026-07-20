"use client";

import Link from "next/link";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

interface ApiCardProps {
  title: string;

  description: string;

  href: string;

  icon: React.ReactNode;

  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info";

  features: string[];

  endpoints: number;

  comingSoon?: boolean;
}

export default function ApiCard({
  title,
  description,
  href,
  icon,
  color = "primary",
  features,
  endpoints,
  comingSoon = false,
}: ApiCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        borderRadius: 4,
        transition: "all .25s ease",

        display: "flex",
        flexDirection: "column",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: (theme) => theme.shadows[6],
          borderColor: `${color}.main`,
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Stack
          spacing={3}
          sx={{
            height:"100%"
          }}
        >
          {/* Header */}

          <Stack
            direction="row"
            sx={{
                justifyContent:"space-between",
            alignItems:"flex-start"
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: `${color}.main`,
                color: "white",
              }}
            >
              {icon}
            </Box>

            {comingSoon && (
              <Chip
                size="small"
                color="warning"
                label="Coming Soon"
              />
            )}
          </Stack>

          {/* Title */}

          <Box>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight:700
              }}
            >
              {title}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight:1.8
              }}
            >
              {description}
            </Typography>
          </Box>

          {/* Endpoint Count */}

          <Chip
            label={`${endpoints} Endpoints`}
            color={color}
            variant="outlined"
            sx={{
              alignSelf: "flex-start",
            }}
          />

          {/* Features */}

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{
                flexWrap:"wrap"
            }}
          >
            {features.map((feature) => (
              <Chip
                key={feature}
                label={feature}
                size="small"
                variant="outlined"
              />
            ))}
          </Stack>

          <Box sx={{flexGrow:1}} />

          {/* Button */}

          <Button
            component={Link}
            href={href}
            variant="contained"
            color={color}
            endIcon={
              <ArrowForwardRoundedIcon />
            }
            fullWidth
          >
            Read Documentation
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}