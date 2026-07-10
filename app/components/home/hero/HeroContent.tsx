
import { Box, Chip, Stack, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

import HeroButtons from "./HeroButtons";
import HeroTrustIndicators from "./HeroTrustIndicators";

export default function HeroContent() {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        maxWidth: 560,
        py: {
          xs: 6,
          md: 8,
          lg: 10,
        },
      }}
    >
      {/* Badge */}

      <Chip
        icon={<PublicIcon fontSize="small" />}
        label="Powering payments for Africa"
        color="primary"
        variant="filled"
        sx={{
          borderRadius: "999px",
          px: 1,
          height: 38,
          fontWeight: 600,
          bgcolor: "primary.50",
          color: "primary.main",
          "& .MuiChip-icon": {
            color: "primary.main",
          },
        }}
      />

      {/* Heading */}

      <Typography
        component="h1"
        sx={{
          mt: 4,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          color: "text.primary",

          fontSize: {
            xs: "2.8rem",
            sm: "3.4rem",
            md: "4.3rem",
            lg: "4.8rem",
          },
        }}
      >
        Modern{" "}

        <Box
          component="span"
          sx={{
            color: "primary.main",
          }}
        >
          payment
        </Box>

        <br />

        infrastructure for

        <br />

        African businesses
      </Typography>

      {/* Description */}

      <Typography
        sx={{
          mt: 4,
          color: "text.secondary",
          fontSize: "1.15rem",
          lineHeight: 1.9,
          maxWidth: 520,
        }}
      >
        Accept payments, send payouts, and manage your business
        finance with a single API.

        Built for developers.

        Trusted by thousands of businesses across Africa.
      </Typography>

      {/* Buttons */}

      <Box
      sx={{
        mt: 4,
      }}
      >
        <HeroButtons />
      </Box>

      {/* Trust indicators */}

      <Box
      sx={{
        mt: 5,
      }}
      >
        <HeroTrustIndicators />
      </Box>

      {/* Small customer avatars */}

      <Stack
        // component='div'
        direction="row"
        spacing={2}
        sx={{
          mt: 6,
        }}
      >
        {/* <Stack direction="row" spacing={-1.2}>
          {[1, 2, 3, 4].map((item) => (
            <Box
              key={item}
              sx={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                border: "3px solid",
                borderColor: "background.paper",
                bgcolor: `primary.${item * 100}`,
              }}
            />
          ))}
        </Stack> */}

        <Stack direction="row" spacing={-1.2}>
  {["light", "main", "dark", "contrastText"].map((shade, index) => (
    <Box
      key={index}
      sx={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        border: "3px solid",
        borderColor: "background.paper",
        bgcolor: `primary.${shade}`, // Resolves perfectly to clean strings
      }}
    />
  ))}
</Stack>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: ".95rem",
          }}
        >
          Trusted by <strong>5,000+</strong> businesses
        </Typography>
      </Stack>
    </Box>
  );
}