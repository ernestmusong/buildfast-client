"use client";

import { useState } from "react";
import Link from "next/link";

import {
   
  Button,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";

import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack spacing={3}>
      <TextField
        fullWidth
        type="email"
        label="Email Address"
        placeholder="Your email"
        autoComplete="email"
        slotProps={{
         input: {
             startAdornment: (
            <InputAdornment position="start">
              <EmailOutlinedIcon />
            </InputAdornment>
          ),
         }
        }}
      />

      <TextField
        fullWidth
        label="Password"
        placeholder="Your password"
        type={showPassword ? "text" : "password"}
        autoComplete="new-password"
        slotProps={{
          input: {
            startAdornment: (
            <InputAdornment position="start">
              <LockOutlinedIcon />
            </InputAdornment>
          ),
           endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
              >
                {showPassword ? (
                  <VisibilityOffRoundedIcon />
                ) : (
                  <VisibilityRoundedIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
          }

         
        }}
      />
      <Button
        fullWidth
        size="large"
        variant="contained"
        endIcon={<ArrowForwardRoundedIcon />}
        sx={{
          py: 1.5,
          fontWeight: 600,
        }}
      >
        Login
      </Button>
    </Stack>
  );
}