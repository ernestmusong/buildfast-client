import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import ReviewCard from "@/components/dashboard/onboarding/ReviewCard";

export default function ReviewPage() {
  return (
    <Box sx={{py:6}}>
      <Stack spacing={4}>
        <Typography
          variant="h4"
          sx={{fontWeight:700}}
        >
          Review Application
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <ReviewCard
              title="Business Information"
              items={[
                {
                  label: "Business Name",
                  value: "BuildFast Ltd",
                },
                {
                  label: "Business Type",
                  value: "Limited Company",
                },
                {
                  label: "Industry",
                  value: "Fintech",
                },
              ]}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <ReviewCard
              title="Website Information"
              items={[
                {
                  label: "Website",
                  value: "buildfast.africa",
                },
                {
                  label: "Instagram",
                  value: "@buildfast",
                },
              ]}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <ReviewCard
              title="Documents"
              items={[
                {
                  label: "Government ID",
                  value: "Uploaded",
                },
                {
                  label: "Business Registration",
                  value: "Uploaded",
                },
                {
                  label: "Proof of Address",
                  value: "Uploaded",
                },
              ]}
            />
          </Grid>
        </Grid>

        <Stack
          direction="row"
          spacing={2}
          
          sx={{justifyContent:"flex-end"}}
        >
          <Button variant="outlined">
            Edit Information
          </Button>

          <Button
            variant="contained"
            size="large"
          >
            Submit Application
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}