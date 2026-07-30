"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

export interface CreateApplicationForm {
  name: string;
  description: string;
  environment: "sandbox" | "production";
  testMode: boolean;
  acceptPayments: boolean;
  acceptPayouts: boolean;
  successUrl: string;
  failureUrl: string;
  cancelUrl: string;
  transactionWebhook: string;
  settlementWebhook: string;
  payoutWebhook: string;
}

interface CreateApplicationDialogProps {
  open: boolean;
  onClose: () => void;
  onCreate: (application: CreateApplicationForm) => void;
}

const initialState: CreateApplicationForm = {
  name: "",
  description: "",
  environment: "sandbox",
  testMode: true,
  acceptPayments: true,
  acceptPayouts: false,
  successUrl: "",
  failureUrl: "",
  cancelUrl: "",
  transactionWebhook: "",
  settlementWebhook: "",
  payoutWebhook: "",
};

export default function CreateApplicationDialog({
  open,
  onClose,
  onCreate,
}: CreateApplicationDialogProps) {
  const [form, setForm] =
    useState<CreateApplicationForm>(initialState);

  const handleChange = (
    field: keyof CreateApplicationForm,
    value: string | boolean
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCreate = () => {
    onCreate(form);
    setForm(initialState);
    onClose();
  };

  const handleClose = () => {
    setForm(initialState);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
        }}
      >
        Create Application
      </DialogTitle>

      <DialogContent dividers>
        <Stack spacing={3}>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
            }}
          >
            Create a new application to start
            accepting payments and managing API
            credentials.
          </Typography>

          <TextField
            label="Application Name"
            fullWidth
            value={form.name}
            onChange={(e) =>
              handleChange("name", e.target.value)
            }
          />

          <TextField
            label="Description"
            multiline
            minRows={3}
            fullWidth
            value={form.description}
            onChange={(e) =>
              handleChange(
                "description",
                e.target.value
              )
            }
          />

          <TextField
            select
            label="Environment"
            fullWidth
            value={form.environment}
            onChange={(e) =>
              handleChange(
                "environment",
                e.target.value as
                  | "sandbox"
                  | "production"
              )
            }
          >
            <MenuItem value="sandbox">
              Sandbox
            </MenuItem>

            <MenuItem value="production">
              Production
            </MenuItem>
          </TextField>

          <Stack spacing={1}>
            <FormControlLabel
              control={
                <Switch
                  checked={form.testMode}
                  onChange={(e) =>
                    handleChange(
                      "testMode",
                      e.target.checked
                    )
                  }
                />
              }
              label="Enable Test Mode"
            />

            <FormControlLabel
              control={
                <Switch
                  checked={
                    form.acceptPayments
                  }
                  onChange={(e) =>
                    handleChange(
                      "acceptPayments",
                      e.target.checked
                    )
                  }
                />
              }
              label="Accept Payments"
            />

            <FormControlLabel
              control={
                <Switch
                  checked={
                    form.acceptPayouts
                  }
                  onChange={(e) =>
                    handleChange(
                      "acceptPayouts",
                      e.target.checked
                    )
                  }
                />
              }
              label="Enable Payouts"
            />
          </Stack>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
            }}
          >
            Redirect URLs
          </Typography>

          <TextField
            label="Success URL"
            fullWidth
            value={form.successUrl}
            onChange={(e) =>
              handleChange(
                "successUrl",
                e.target.value
              )
            }
          />

          <TextField
            label="Failure URL"
            fullWidth
            value={form.failureUrl}
            onChange={(e) =>
              handleChange(
                "failureUrl",
                e.target.value
              )
            }
          />

          <TextField
            label="Cancel URL"
            fullWidth
            value={form.cancelUrl}
            onChange={(e) =>
              handleChange(
                "cancelUrl",
                e.target.value
              )
            }
          />

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
            }}
          >
            Webhooks
          </Typography>

          <TextField
            label="Transaction Webhook"
            fullWidth
            value={
              form.transactionWebhook
            }
            onChange={(e) =>
              handleChange(
                "transactionWebhook",
                e.target.value
              )
            }
          />

          <TextField
            label="Settlement Webhook"
            fullWidth
            value={
              form.settlementWebhook
            }
            onChange={(e) =>
              handleChange(
                "settlementWebhook",
                e.target.value
              )
            }
          />

          <TextField
            label="Payout Webhook"
            fullWidth
            value={form.payoutWebhook}
            onChange={(e) =>
              handleChange(
                "payoutWebhook",
                e.target.value
              )
            }
          />
        </Stack>
      </DialogContent>

      <DialogActions
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <Button
          onClick={handleClose}
          color="inherit"
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          disableElevation
          onClick={handleCreate}
        >
          Create Application
        </Button>
      </DialogActions>
    </Dialog>
  );
}