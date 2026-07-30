import {
  TextField,
  Stack,
} from "@mui/material";

export default function ApplicationWebhookTab({
  application,
}: any) {
  return (
    <Stack spacing={3}>
      <TextField
        label="Transaction Webhook"
        value={
          application.transactionWebhook
        }
      />

      <TextField
        label="Settlement Webhook"
        value={
          application.settlementWebhook
        }
      />

      <TextField
        label="Payout Webhook"
        value={
          application.payoutWebhook
        }
      />
    </Stack>
  );
}