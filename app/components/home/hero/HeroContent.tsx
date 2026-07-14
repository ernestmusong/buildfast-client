
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
        mt:2
      }}
    >
      {/* Badge */}

      <Chip
        icon={<PublicIcon fontSize="small" />}
        label="Powering payments for Cameroon"
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

      {/* Heading */}

      <Typography
        component="h1"
        variant="h1"
      >
        Fast{ ' '}
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

        businesses in Cameroon
      </Typography>

      {/* Description */}

      <Typography
        variant="subtitle1"
        sx={{
          color: "text.secondary",
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
        bgcolor: `primary.${shade}`,
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