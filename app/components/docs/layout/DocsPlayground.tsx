"use client";

import {
  Box,
  Paper,
  Typography,
  Divider,
  Chip,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { useState } from "react";

export default function DocsPlayground() {
  const [environment, setEnvironment] =
    useState("sandbox");

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        height: "100vh",
        overflowY: "auto",
        borderLeft: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        p: 2,
      }}
    >
      <Typography
        variant="h6"
       sx={{
         fontWeight:700,
        mb:2
       }}
      >
        API Playground
      </Typography>

      <Paper
        variant="outlined"
        sx={{ p: 2, mb: 2 }}
      >
        <Typography
          variant="subtitle2"
          gutterBottom
        >
          Environment
        </Typography>

        <ToggleButtonGroup
          exclusive
          value={environment}
          onChange={(_, value) =>
            value &&
            setEnvironment(value)
          }
          fullWidth
          size="small"
        >
          <ToggleButton value="sandbox">
            Sandbox
          </ToggleButton>

          <ToggleButton value="production">
            Production
          </ToggleButton>
        </ToggleButtonGroup>
      </Paper>

      <Paper
        variant="outlined"
        sx={{ p: 2, mb: 2 }}
      >
        <Typography
          variant="subtitle2"
          gutterBottom
        >
          API Health
        </Typography>

        <Chip
          label="Operational"
          color="success"
          size="small"
        />

        <Typography
          variant="body2"
          sx={{
            mb:2  
          }}
        >
          Latency: 95ms
        </Typography>

        <Typography
          variant="body2"
        >
          Success Rate: 99.99%
        </Typography>
      </Paper>

      <Paper
        variant="outlined"
        sx={{ p: 2, mb: 2 }}
      >
        <Typography
          variant="subtitle2"
          gutterBottom
        >
          Request Builder
        </Typography>

        <TextField
          label="Authorization"
          size="small"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Amount"
          size="small"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Phone"
          size="small"
          fullWidth
          margin="normal"
        />

        <Button
          fullWidth
          variant="contained"
          startIcon={
            <PlayArrowIcon />
          }
          sx={{ mt: 2 }}
        >
          Send Request
        </Button>
      </Paper>

      <Paper
        variant="outlined"
        sx={{ p: 2 }}
      >
        <Typography
          variant="subtitle2"
          gutterBottom
        >
          Response Viewer
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Box
          component="pre"
          sx={{
            fontSize: 12,
            overflow: "auto",
            p: 2,
            borderRadius: 2,
            bgcolor: "action.hover",
          }}
        >
{`{
  "status": "success",
  "reference": "COL_12345",
  "message": "Collection initiated"
}`}
        </Box>
      </Paper>
    </Box>
  );
}