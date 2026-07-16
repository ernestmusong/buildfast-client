"use client";

import {
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

interface Props {
  value: "schema" | "json";
  onChange: (
    value: "schema" | "json"
  ) => void;
}

export default function JsonViewToggle({
  value,
  onChange,
}: Props) {
  return (
    <ToggleButtonGroup
      exclusive
      size="small"
      value={value}
      onChange={(_, v) => {
        if (v) onChange(v);
      }}
    >
      <ToggleButton value="schema">
        Schema
      </ToggleButton>

      <ToggleButton value="json">
        JSON
      </ToggleButton>
    </ToggleButtonGroup>
  );
}