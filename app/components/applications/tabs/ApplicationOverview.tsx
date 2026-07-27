import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function ApplicationOverview({
  application,
}: any) {
  return (
    <Grid container spacing={3}>

      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          <CardContent>
            <Typography>
              Balance
            </Typography>

            <Typography variant="h5">
              {application.balance.toLocaleString()} XAF
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          <CardContent>
            <Typography>
              Available
            </Typography>

            <Typography variant="h5">
              {application.availableBalance.toLocaleString()} XAF
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Card>
          <CardContent>
            <Typography>
              Pending
            </Typography>

            <Typography variant="h5">
              {application.pendingBalance.toLocaleString()} XAF
            </Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
}