"use client";

import {
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function EnvironmentSwitcher({
  value,
  onChange,
}: Props) {
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={(_, v) =>
        v && onChange(v)
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
  );
}