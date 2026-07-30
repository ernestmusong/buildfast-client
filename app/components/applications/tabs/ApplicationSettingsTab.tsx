import {
  Stack,
  TextField,
} from "@mui/material";

export default function ApplicationSettingsTab({
  application,
}: any) {
  return (
    <Stack spacing={3}>
      <TextField
        label="Application Name"
        value={application.name}
      />

      <TextField
        label="Success URL"
        value={application.successUrl}
      />

      <TextField
        label="Failure URL"
        value={application.failureUrl}
      />

      <TextField
        label="Cancel URL"
        value={application.cancelUrl}
      />
    </Stack>
  );
}