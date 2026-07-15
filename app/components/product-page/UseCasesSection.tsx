"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

type UseCases = {
  cases: string[]
}

export default function UseCasesSection({cases}: UseCases) {
  return (
    <Container maxWidth="lg"
      sx={{
        mb:12
      }}
    >
      <Box
       sx={{
        mt:2
       }}
      >
        <Typography
          variant="h2"
          color="text.secondary"
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