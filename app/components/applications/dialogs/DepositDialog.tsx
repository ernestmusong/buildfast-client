"use client";

import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export interface DepositForm {
  amount: number;
  currency: string;
  paymentMethod: "mtn" | "orange";
  phoneNumber: string;
  reference: string;
  description: string;
}

interface DepositDialogProps {
  open: boolean;
  applicationName: string;
  currentBalance: number;
  currency?: string;
  onClose: () => void;
  onDeposit: (data: DepositForm) => void;
}

export default function DepositDialog({
  open,
  applicationName,
  currentBalance,
  currency = "XAF",
  onClose,
  onDeposit,
}: DepositDialogProps) {
  const [form, setForm] = useState<DepositForm>({
    amount: 0,
    currency,
    paymentMethod: "mtn",
    phoneNumber: "",
    reference: "",
    description: "",
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      currency,
    }));
  }, [currency]);

  const handleChange = <
    K extends keyof DepositForm
  >(
    key: K,
    value: DepositForm[K]
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleClose = () => {
    setForm({
      amount: 0,
      currency,
      paymentMethod: "mtn",
      phoneNumber: "",
      reference: "",
      description: "",
    });

    onClose();
  };

  const handleSubmit = () => {
    onDeposit(form);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
        }}
      >
        Deposit Funds
      </DialogTitle>

      <DialogContent dividers>
        <Stack spacing={3}>
          <Alert severity="info">
            Funds will be deposited into{" "}
            <strong>{applicationName}</strong>.
          </Alert>

          <Stack spacing={0.5}>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
              }}
            >
              Current Balance
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
              }}
            >
              {currentBalance.toLocaleString(
                "en-US"
              )}{" "}
              {currency}
            </Typography>
          </Stack>

          <Divider />

          <TextField
            label="Amount"
            type="number"
            fullWidth
            value={
              form.amount === 0
                ? ""
                : form.amount
            }
            onChange={(e) =>
              handleChange(
                "amount",
                Number(e.target.value)
              )
            }
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    {currency}
                  </InputAdornment>
                ),
              },
            }}
          />

          <TextField
            select
            label="Payment Method"
            fullWidth
            value={form.paymentMethod}
            onChange={(e) =>
              handleChange(
                "paymentMethod",
                e.target.value as
                  | "mtn"
                  | "orange"
              )
            }
          >
            <MenuItem value="mtn">
              MTN Mobile Money
            </MenuItem>

            <MenuItem value="orange">
              Orange Money
            </MenuItem>
          </TextField>

          <TextField
            label="Phone Number"
            fullWidth
            placeholder="670123456"
            value={form.phoneNumber}
            onChange={(e) =>
              handleChange(
                "phoneNumber",
                e.target.value
              )
            }
          />

          <TextField
            label="Reference"
            fullWidth
            value={form.reference}
            onChange={(e) =>
              handleChange(
                "reference",
                e.target.value
              )
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
        </Stack>
      </DialogContent>

      <DialogActions
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <Button
          color="inherit"
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          disableElevation
          onClick={handleSubmit}
          disabled={
            form.amount <= 0 ||
            form.phoneNumber.trim() === ""
          }
        >
          Deposit Funds
        </Button>
      </DialogActions>
    </Dialog>
  );
}