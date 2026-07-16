"use client";

import { useState } from "react";

import { Box, Paper } from "@mui/material";

import { FieldDefinition } from "@/types/endpoint/Field";

import CodeBlock from "../code/CodeBlock";
import JsonToolbar from "./JsonToolbar";
import JsonTree from "./JsonTree";
import JsonViewToggle from "./JsonViewToggle";

interface ResponseVisualizerProps {
  fields: FieldDefinition[];

  response: Record<string, unknown>;

  onFieldSelect?: (
    field: FieldDefinition
  ) => void;

  title?: string;
}

export default function ResponseVisualizer({
  fields,
  response,
  onFieldSelect,
  title = "Response Body",
}: ResponseVisualizerProps) {
  const [view, setView] = useState<
    "schema" | "json"
  >("schema");

  const json = JSON.stringify(
    response,
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
          title={title}
          json={json}
        />

        <JsonViewToggle
          value={view}
          onChange={setView}
        />
      </Box>

      {view === "schema" ? (
        <JsonTree
          fields={fields}
          onSelect={onFieldSelect}
        />
      ) : (
        <CodeBlock
          language="json"
          code={json}
        />
      )}
    </Paper>
  );
}