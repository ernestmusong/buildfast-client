"use client";

import { FieldDefinition } from "@/types/endpoint/Field";

import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Stack,
  Box,
} from "@mui/material";

// const headers: FieldDefinition[] = [
//   {
//     id: "authorization",
//     name: "Authorization",
//     type: "string",
//     required: true,
//     description: "Bearer API key.",
//     example: "Bearer sk_test_xxx",
//     source: "Dashboard → API Keys",
//     location: "header",
//   },
// ];

interface HeadersTableProps {
    headers: FieldDefinition[];

    selectedField?: FieldDefinition | null;

    onFieldSelect?: (
        field: FieldDefinition
    ) => void;
}

export default function HeadersTable({
  headers,
   selectedField,
   onFieldSelect
}: HeadersTableProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        mb: 5,
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
          sx={{
            fontWeight:700
          }}
        >
          Request Headers
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt:0.5
          }}
        >
          Headers required when calling this endpoint.
        </Typography>
      </Box>

      <TableContainer>

        <Table stickyHeader>

          <TableHead>

            <TableRow>

              <TableCell width="25%">
                Header
              </TableCell>

              <TableCell width="12%">
                Type
              </TableCell>

              <TableCell width="15%">
                Required
              </TableCell>

              <TableCell width="20%">
                Example
              </TableCell>

              <TableCell>
                Description
              </TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {headers.map((header) => {

              const active =
                selectedField?.id === header.id;

              return (
                <TableRow
                  key={header.name}
                  hover
                  selected={active}
                 onClick={() =>
                   onFieldSelect?.(header)
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
                      {header.name}
                    </Typography>

                  </TableCell>

                  <TableCell>

                    <Chip
                      size="small"
                      label={header.type}
                      variant="outlined"
                    />

                  </TableCell>

                  <TableCell>

                    {header.required ? (
                      <Chip
                        color="success"
                        size="small"
                        label="Required"
                      />
                    ) : (
                      <Chip
                        color="default"
                        size="small"
                        label="Optional"
                      />
                    )}

                  </TableCell>

                  <TableCell>

                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily:"monospace"
                      }}
                    >
                      {header.example}
                    </Typography>

                  </TableCell>

                  <TableCell>

                    <Typography
                      color="text.secondary"
                      variant="body2"
                    >
                      {header.description}
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