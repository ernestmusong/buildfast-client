import {
  TextField,
  Stack,
  Button,
} from "@mui/material";

export default function ApplicationApiKeysTab({
  application,
}: any) {
  return (
    <Stack spacing={3}>

      <TextField
        fullWidth
        label="Live Public Key"
        value={application.livePublicKey}
      />

      <TextField
        fullWidth
        label="Live Secret Key"
        value={application.liveSecretKey}
      />

      <Button variant="contained">
        Rotate Keys
      </Button>

    </Stack>
  );
}