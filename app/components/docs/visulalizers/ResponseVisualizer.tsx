"use client";

import { useState } from "react";

import { Box, Paper } from "@mui/material";

import { FieldDefinition } from "@/types/endpoint/Field";

import CodeBlock from "../code/CodeBlock";
import JsonToolbar from "./JsonToolbar";
import JsonTree from "./JsonTree";
import JsonViewToggle from "./JsonViewToggle";

interface ResponseVisualizerProps {

  response: Record<string, unknown>;

  title?: string;
}

export default function ResponseVisualizer({
  response,
  title = "Response Body",
}: ResponseVisualizerProps) {
  

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

        
      </Box>
<CodeBlock
          language="json"
          code={json}
        />
      
    </Paper>
  );
}