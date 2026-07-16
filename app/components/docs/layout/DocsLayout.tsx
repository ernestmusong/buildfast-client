

 "use client";

import { Grid } from "@mui/material";
import DocsSidebar from "./DocsSidebar";
import DocsPlayground from "./DocsPlayground";

interface Props {
  children: React.ReactNode;
}

export default function DocsLayout({
  children,
}: Props) {
  return (
    <Grid container>
      {/* Sidebar */}

      <Grid
        size={{ md: 2.5 }}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <DocsSidebar />
      </Grid>

      {/* Content */}

      <Grid
        size={{ xs: 12, md: 6.5 }}
        sx={{
          minHeight: "100vh",
          px: {
            xs: 2,
            md: 5,
          },
          py: 4,
        }}
      >
        {children}
      </Grid>

      {/* Playground */}

      <Grid
        size={{ md: 3 }}
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        <DocsPlayground />
      </Grid>
    </Grid>
  );
}