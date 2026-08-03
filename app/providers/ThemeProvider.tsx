'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type {} from '@mui/x-charts/themeAugmentation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const baseTheme = createTheme();

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data', // Injects values cleanly using [data-mui-color-scheme]
  },
   
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#2563eb",      // BuildFast Blue
          light: "#60a5fa",
          dark: "#1d4ed8",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#7c3aed",      // Deep Accent Purple
        },
        background: {
          default: "#ffffff",
          paper: "#ffffff",
        },
        text: {
          primary: "#111827",   // Slate Dark Grey
          secondary: "#6b7280", // Muted Grey
        },
        divider: "#eeeeee",
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#3b82f6",      // Slightly brighter blue for dark mode readability
          light: "#93c5fd",
          dark: "#1d4ed8",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#a78bfa",
        },
        background: {
          default: "#0f172a",   // Rich Midnight Navy
          paper: "#1e293b",     // Slightly lighter panel card backgrounds
        },
        text: {
          primary: "#f9fafb",   // Soft off-white
          secondary: "#9ca3af", // Muted dark mode grey
        },
        divider: "#334155",
      },
    },
  },

  typography: {
    h2: {
      fontSize: 32,
      fontWeight: 700,
      textAlign: "center",
      margin: "1rem 0",
      textTransform:"capitalize"
    },
    h1: {
          mt: 4,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          color: "#111827",
          fontSize: '2rem',
      '@media (min-width:922px)': {
        fontSize: '2.2rem',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: '2.5rem',
      },
        },
        // subtitle1: {
        //   fontSize: "1.15rem",
        //   lineHeight: 1.9,
        //   maxWidth: 520,
        // },
  },

  components: {
    MuiChartsAxis: {
      styleOverrides: {
        root: {
          // Directs axis vectors to read theme dividers and text configurations
          "& .MuiChartsAxis-line, & .MuiChartsAxis-tick": {
            stroke: "var(--mui-palette-divider)",
          },
          "& .MuiChartsAxis-tickLabel": {
            fill: "var(--mui-palette-text-secondary)",
          },
        },
      },
    },
    MuiChartsLegend: {
      styleOverrides: {
        root: {
          "& .MuiChartsLegend-label": {
            fill: "var(--mui-palette-text-primary)",
          },
        },
      },
    },
    MuiChartsGrid: {
      styleOverrides: {
        line: {
          stroke: "var(--mui-palette-divider)",
          strokeDasharray: "4 4", // Neat dashed alignment lines layout rule
        },
      },
    },
  },
   
});

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}