"use client";

import { Chip } from "@mui/material";

interface Props {
  method:
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE";
}

const colors = {
  GET: "success",
  POST: "primary",
  PUT: "warning",
  PATCH: "secondary",
  DELETE: "error",
} as const;

export default function EndpointMethod({
  method,
}: Props) {
  return (
    <Chip
      label={method}
      color={colors[method]}
      sx={{
        fontWeight: 700,
      }}
    />
  );
}