"use client";

import { FieldDefinition } from "@/types/endpoint/Field";

import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface ParametersTableProps {
  title?: string;

  description?: string;

  fields: FieldDefinition[];

  selectedField?: FieldDefinition | null;

  onFieldSelect?: (
    field: FieldDefinition
  ) => void;

  showLocation?: boolean;
}

export default function FieldsTable({
  title = "Parameters",
  description = "Parameters accepted by this endpoint.",
  fields,
  selectedField,
  onFieldSelect,
  showLocation = false,
}: ParametersTableProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        overflow: "hidden",
        borderRadius: 3,
      }}
    >
      {/* Header */}

      <Box
        sx={{
          px: 3,
          py: 2,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Typography
          variant="h6"
        sx={
            {fontWeight:700}
        }
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt:0.5
          }}
        >
          {description}
        </Typography>
      </Box>

      <TableContainer>

        <Table stickyHeader>

          <TableHead>

            <TableRow>

              <TableCell width="22%">
                Name
              </TableCell>

              <TableCell width="14%">
                Type
              </TableCell>

              <TableCell width="14%">
                Required
              </TableCell>

              {showLocation && (
                <TableCell width="14%">
                  Location
                </TableCell>
              )}

              <TableCell width="18%">
                Example
              </TableCell>

              <TableCell>
                Description
              </TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {fields?.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={
                    showLocation ? 6 : 5
                  }
                  align="center"
                  sx={{
                    py: 5,
                  }}
                >
                  <Typography
                    color="text.secondary"
                  >
                    No parameters available.
                  </Typography>
                </TableCell>
              </TableRow>
            )}

            {fields?.map((field) => {

              const active =
                selectedField?.id === field.id;

              return (
                <TableRow
                  key={field.id}
                  hover
                  selected={active}
                  onClick={() =>
                    onFieldSelect?.(field)
                  }
                  sx={{
                    cursor: "pointer",
                    transition: ".2s",

                    "&:hover": {
                      bgcolor:
                        "action.hover",
                    },
                  }}
                >
                  <TableCell>

                    <Typography
                     sx={{
                         fontWeight:600,
                      fontFamily:"monospace"
                     }}
                    >
                      {field.name}
                    </Typography>

                  </TableCell>

                  <TableCell>

                    <Chip
                      label={field.type}
                      size="small"
                      variant="outlined"
                      color="primary"
                    />

                  </TableCell>

                  <TableCell>

                    <Chip
                      label={
                        field.required
                          ? "Required"
                          : "Optional"
                      }
                      color={
                        field.required
                          ? "success"
                          : "default"
                      }
                      size="small"
                    />

                  </TableCell>

                  {showLocation && (

                    <TableCell>

                      <Chip
                        size="small"
                        label={
                          field.location
                        }
                        variant="outlined"
                      />

                    </TableCell>

                  )}

                  <TableCell>

                    <Typography
                      variant="body2"
                     sx={{
                         fontFamily:"monospace"
                     }}
                    >
                      {field.example}
                    </Typography>

                  </TableCell>

                  <TableCell>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {field.description}
                    </Typography>

                  </TableCell>

                </TableRow>
              );

            })}

          </TableBody>

        </Table>

      </TableContainer>

    </Paper>
  );
}