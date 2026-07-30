import {
  Alert,
  Button,
  Stack,
} from "@mui/material";

export default function ApplicationDangerZoneTab() {
  return (
    <Stack spacing={3}>

      <Alert severity="warning">
        These actions cannot be undone.
      </Alert>

      <Button color="warning">
        Archive Application
      </Button>

      <Button color="error">
        Delete Application
      </Button>

      <Button color="error">
        Regenerate Secrets
      </Button>

    </Stack>
  );
}