import {
  Stack,
  Button,
} from "@mui/material";

export default function ApplicationWalletTab() {
  return (
    <Stack spacing={2}>
      <Button variant="contained">
        Deposit Funds
      </Button>

      <Button variant="outlined">
        Withdraw Funds
      </Button>

      <Button variant="outlined">
        Transfer Funds
      </Button>
    </Stack>
  );
}