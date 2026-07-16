"use client";

import {
  Stack,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface Props {
  title: string;
  json: string;
}

export default function JsonToolbar({
  title,
  json,
}: Props) {
  return (
    <Stack
      direction="row"
     sx={{
         justifyContent:"space-between",
      alignItems:"center",
      mb:2
     }}
    >
      <Typography
        variant="h6"
        sx={{
            fontWeight:700
        }}
      >
        {title}
      </Typography>

      <Tooltip title="Copy JSON">
        <IconButton
          onClick={() =>
            navigator.clipboard.writeText(
              json
            )
          }
        >
          <ContentCopyIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}