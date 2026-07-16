"use client";

import { ReactNode } from "react";

import { Grid, Box } from "@mui/material";

interface InspectorLayoutProps {
  children: ReactNode;
  inspector: ReactNode;

  /**
   * Width of the main content column.
   * Defaults to 8/12.
   */
  contentWidth?: number;

  /**
   * Width of the inspector column.
   * Defaults to 4/12.
   */
  inspectorWidth?: number;

  /**
   * Gap between columns.
   */
  spacing?: number;

  /**
   * Optional margin top.
   */
  mt?: number;
}

export default function InspectorLayout({
  children,
  inspector,
  contentWidth = 8,
  inspectorWidth = 4,
  spacing = 3,
  mt = 0,
}: InspectorLayoutProps) {
  return (
    <Box
    sx={{
        mt:{mt}
    }}
    >
      <Grid container spacing={spacing}>
        {/* Main Content */}

        <Grid
          size={{
            xs: 12,
            lg: contentWidth,
          }}
        >
          {children}
        </Grid>

        {/* Inspector */}

        <Grid
          size={{
            xs: 12,
            lg: inspectorWidth,
          }}
        >
          <Box
            sx={{
              position: {
                xs: "static",
                lg: "sticky",
              },

              top: 24,
            }}
          >
            {inspector}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}