import {
  Chip,
} from "@mui/material";

interface Props {
  status:
    | "saving"
    | "saved"
    | "unsaved";
}

export default function AutosaveIndicator({
  status,
}: Props) {
  return (
    <Chip
      label={
        status === "saving"
          ? "Saving..."
          : status === "saved"
          ? "Saved"
          : "Unsaved Changes"
      }
    />
  );
}