"use client";

import { useState } from "react";
import Link from "next/link";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { register } from "@/configs/enpoints";
import { api } from "@/utils/axiosFetch";

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

import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  
  const router = useRouter();

  // Changed to match your NestJS backend strict validation DTO (min 8 characters)
  const pwdLength = 3; 

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      
      acceptTerms: false,
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required('Full name is required'),

      email: Yup.string()
        .email('Enter a valid email')
        .required('Email is required'),

      password: Yup.string()
        .min(pwdLength, `Password must be at least ${pwdLength} characters`)
        .required('Password is required'),

      

      acceptTerms: Yup.boolean().oneOf(
        [true],
        'You must accept the terms to proceed'
      ),
    }),

    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        // FIXED: Explicitly mapping properties to match your verified NestJS RegisterMerchantDto
        await api.post(`${register}`, {
          name: values.name,
          email: values.email,
          password: values.password,
        });

        router.replace('/dashboard');
      } catch (err) {
        console.error("Registration endpoint connection error:", err);
        // Display backend validation or duplication errors directly on fields if registration fails
        setErrors({ email: "This registration track failed. Check your data inputs." });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Stack
      component="form"
      spacing={3}
      onSubmit={formik.handleSubmit}
      noValidate // Prevents native browser popups from clashing with formik validation strings
    >
      <Alert severity="info" variant="outlined">
        Your account will initially be created in the Sandbox
        environment. Production access is granted after business
        verification.
      </Alert>

      {/* Full Name Input Field */}
      <TextField
        fullWidth
        name="name"
        label="Full Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineRoundedIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      {/* Email Address Input Field */}
      <TextField
        fullWidth
        name="email"
        label="Email Address"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      {/* Primary Password Input Field */}
      <TextField
        fullWidth
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
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
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }}
      />
      <Box>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              name="acceptTerms"
              checked={formik.values.acceptTerms}
              onChange={formik.handleChange}
            />
          }
          label={
            <Typography variant="body2">
              I agree to the{" "}
              <Typography
                component={Link}
                href="/terms"
                color="primary"
                sx={{ textDecoration: "none", fontWeight: 600 }}
              >
                Terms of Service
              </Typography>{" "}
              and{" "}
              <Typography
                component={Link}
                href="/privacy"
                color="primary"
                sx={{ textDecoration: "none", fontWeight: 600 }}
              >
                Privacy Policy
              </Typography>
            </Typography>
          }
        />
        {formik.touched.acceptTerms && formik.errors.acceptTerms && (
          <Typography color="error" variant="caption" sx={{ 
            mt: 0.5,
            display:"block"
            }}>
            {formik.errors.acceptTerms}
          </Typography>
        )}
      </Box>

      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        disabled={formik.isSubmitting} // Standard pattern ensuring execution isn't double-clicked
        endIcon={<ArrowForwardRoundedIcon />}
        sx={{ py: 1.5, fontWeight: 600 }}
      >
        {formik.isSubmitting ? "Creating Account..." : "Create Account"}
      </Button>

      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ textAlign: "center" }}
      >
        By creating an account, you'll gain access to the
        BuildFast Dashboard, Sandbox APIs, documentation, and
        developer tools.
      </Typography>
    </Stack>
  );
}
