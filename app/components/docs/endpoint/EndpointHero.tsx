"use client";

import {
  Stack,
  Typography,
} from "@mui/material";

import EndpointMethod from "./EndpointMethod";

interface Props {
  title: string;
  method:
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE";
  endpoint: string;
}

export default function EndpointHero({
  title,
  method,
  endpoint,
}: Props) {
  return (
    <Stack spacing={2}
    sx={{
        mb:6
    }}
    >
      <Typography
        variant="h3"
      >
        {title}
      </Typography>

      <Stack
        direction="row"
        spacing={2}
      >
        <EndpointMethod
          method={method}
        />

        <Typography
          variant="h6"
          sx={{
            fontFamily:"monospace"
          }}
        >
          {endpoint}
        </Typography>
      </Stack>
    </Stack>
  );
}