"use client";

import { useState } from "react";

import {
  Paper,
  Box,
} from "@mui/material";

import CodeBlock from "../code/CodeBlock";

import JsonTree from "./JsonTree";
import JsonToolbar from "./JsonToolbar";
import JsonViewToggle from "./JsonViewToggle";

import { FieldDefinition } from "@/types/endpoint/Field";

interface Props {

  body: Record<string, unknown>;
}

export default function RequestVisualizer({
  body,
}: Props) {

  const json = JSON.stringify(
    body,
    null,
    2
  );

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
            display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        mb:3
        }}
      >
        <JsonToolbar
          title="Request Body"
          json={json}
        />

      </Box>

        <CodeBlock language="json" code={json} />
    </Paper>
  );
}