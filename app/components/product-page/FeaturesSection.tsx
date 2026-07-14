"use client";

import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";

const features = [
  {
    title: "Instant Collections",
    description:
      "Collect payments from MTN Mobile Money and Orange Money wallets.",
  },
  {
    title: "Payment Verification",
    description:
      "Verify payment status before delivering services.",
  },
  {
    title: "Webhook Events",
    description:
      "Receive real-time notifications when payments complete.",
  },
  {
    title: "Single API",
    description:
      "Integrate once and access multiple mobile money providers.",
  },
];

export default function FeaturesSection() {
  return (
    <Container maxWidth="lg">
      <Box
      sx={{
        py: 12
      }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 6,
            fontWeight: 700,
          }}
           
        >
          Collect Mobile Money Payments
        </Typography>

        <Grid container spacing={3}>
          {features.map((feature) => (
            <Grid
              key={feature.title}
              size={{ xs: 12, md: 6 }}
            >
              <Card>
                <CardContent>
                  <Typography
                    variant="h6"
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                   
                    
                    sx={{
                       color:"text.secondary",
                       mt:"1rem"
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}