"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const cases = [
  "E-commerce",
  "Schools",
  "NGOs",
  "Utilities",
  "Subscriptions",
  "Logistics",
];

export default function UseCasesSection() {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography
          variant="h3"
        >
          Built For Businesses
        </Typography>

        <Grid container spacing={3}>
          {cases.map((item) => (
            <Grid
              key={item}
              size={{ xs: 12, sm: 6, md: 4 }}
            >
              <Card>
                <CardContent>
                  <Typography
                    variant="h6"
                
                  >
                    {item}
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