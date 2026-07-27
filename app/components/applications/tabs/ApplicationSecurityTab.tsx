import {
  Switch,
  Typography,
  Stack,
  Chip,
} from "@mui/material";

export default function ApplicationSecurityTab({
  application,
}: any) {
  return (
    <Stack spacing={3}>

      <Stack direction="row" spacing={2}>
        <Typography>
          Accept Payments
        </Typography>

        <Switch
          checked={
            application.acceptPayments
          }
        />
      </Stack>

      <Typography variant="h6">
        IP Whitelist
      </Typography>

      <Stack direction="row" spacing={1}>
        {application.ipWhitelist.map(
          (ip: string) => (
            <Chip
              key={ip}
              label={ip}
            />
          )
        )}
      </Stack>

      <Typography variant="h6">
        Phone Whitelist
      </Typography>

      <Stack direction="row" spacing={1}>
        {application.phoneWhitelist.map(
          (phone: string) => (
            <Chip
              key={phone}
              label={phone}
            />
          )
        )}
      </Stack>

    </Stack>
  );
}