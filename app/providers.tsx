'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';

export const theme = createTheme({
  // Enables CSS variables support for smooth dark/light mode switches
  cssVariables: true, 
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
    fontFamily: "var(--font-sans), sans-serif", // Hook into Next.js font if applicable
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