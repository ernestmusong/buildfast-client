"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";

import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Stack spacing={3}>
      <Alert severity="info" variant="outlined">
        Your account will initially be created in the Sandbox
        environment. Production access is granted after business
        verification.
      </Alert>

      <TextField
        fullWidth
        label="Full Name"
        placeholder="John Doe"
        autoComplete="name"
        slotProps={{
          input: {
            startAdornment: (
            <InputAdornment position="start">
              <PersonOutlineRoundedIcon />
            </InputAdornment>
          ),
          }
        }}
      />

      <TextField
        fullWidth
        type="email"
        label="Email Address"
        placeholder="john@example.com"
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

      <TextField
        fullWidth
        label="Confirm Password"
        type={showConfirmPassword ? "text" : "password"}
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
                  setShowConfirmPassword((prev) => !prev)
                }
              >
                {showConfirmPassword ? (
                  <VisibilityOffRoundedIcon />
                ) : (
                  <VisibilityRoundedIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
          },

          
        }}
      />

      <Box>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label={
            <Typography variant="body2">
              I agree to the{" "}
              <Typography
                component={Link}
                href="/terms"
                color="primary"
                sx={{
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Terms of Service
              </Typography>{" "}
              and{" "}
              <Typography
                component={Link}
                href="/privacy"
                color="primary"
                sx={{
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Privacy Policy
              </Typography>
            </Typography>
          }
        />
      </Box>

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
        Create Account
      </Button>

      <Typography
        variant="caption"
        color="text.secondary"
        sx={{
            textAlign:"center"
        }}
      >
        By creating an account, you'll gain access to the
        BuildFast Dashboard, Sandbox APIs, documentation, and
        developer tools.
      </Typography>
    </Stack>
  );
}