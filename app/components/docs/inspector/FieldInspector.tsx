"use client";

import {
  Typography,
  Stack,
} from "@mui/material";

import FieldCard from "./FieldCard";
import FieldRow from "./FieldRow";
import FieldTypeChip from "./FieldTypeChip";
import RequiredChip from "./RequiredChip";
import AcceptedValues from "./AcceptedValues";
import InspectorEmptyState from "./InspectorEmptyState";

import { FieldDefinition } from "@/types/endpoint/Field";

interface Props {
  field?: FieldDefinition | null;
}

export default function FieldInspector({
  field,
}: Props) {
  if (!field) {
    return <InspectorEmptyState />;
  }

  return (
    <FieldCard>

      <Stack
        sx={{
            justifyContent:"space-between",
        alignItems:"center"
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight:700,
            fontFamily:"monospace",
          }}
        >
          {field.name}
        </Typography>
          
        <RequiredChip
          required={field.required}
        />

      </Stack>

      <FieldRow label="Type">
        <FieldTypeChip
          type={field.type}
        />
      </FieldRow>

      <FieldRow label="Location">
        <Typography>
          {field.location}
        </Typography>
      </FieldRow>

      <FieldRow label="Description">
        <Typography>
          {field.description}
        </Typography>
      </FieldRow>

      <FieldRow label="Example">
        <Typography
          sx={{
            fontFamily:"monospace"
          }}
        >
          {field.example}
        </Typography>
      </FieldRow>

      <FieldRow label="Accepted Values">
        <AcceptedValues
          values={
            field.acceptedValues
          }
        />
      </FieldRow>

      {field.defaultValue && (
        <FieldRow label="Default">
          <Typography>
            {field.defaultValue}
          </Typography>
        </FieldRow>
      )}

      {field.source && (
        <FieldRow label="Source">
          <Typography>
            {field.source}
          </Typography>
        </FieldRow>
      )}

      <Stack
        direction="row"
        spacing={1}
      >
        {field.nullable && (
          <RequiredChip
            required={false}
          />
        )}

        {field.readOnly && (
          <FieldTypeChip type="Read Only" />
        )}

        {field.deprecated && (
          <FieldTypeChip type="Deprecated" />
        )}
      </Stack>

    </FieldCard>
  );
}