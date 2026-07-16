"use client";

import { Box } from "@mui/material";

import JsonNode from "./JsonNode";

import { FieldDefinition } from "@/types/endpoint/Field";

interface Props {
  fields: FieldDefinition[];

  onSelect?: (
    field: FieldDefinition
  ) => void;
}

export default function JsonTree({
  fields,
  onSelect,
}: Props) {
  return (
    <Box>
      {fields?.map((field) => (
        <JsonNode
          key={field.id}
          field={field}
          onSelect={onSelect}
        />
      ))}
    </Box>
  );
}