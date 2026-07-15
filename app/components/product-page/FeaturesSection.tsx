"use client";

import { ProductFeature } from "@/types/product";

import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";

 type Features = {
  features: ProductFeature[]
 }

export default function FeaturesSection({features}:Features) {
  return (
    <Container maxWidth="lg">
      <Box
      sx={{
        mb:12
      }}
      >
        <Typography
          variant="h2"
          color="text.secondary"
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