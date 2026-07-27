"use client";

import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import ApplicationList from "./ApplicationList";
import ApplicationWorkspace from "./ApplicationWorkspace";
import { Application } from "@/types/application/aplication";

import { applications } from "@/data/applications/mockData";

export default function ApplicationPage() {
  const [selectedApp, setSelectedApp] = useState<Application>(applications[0]);

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <ApplicationList
          applications={applications}
          selected={selectedApp}
          onSelect={() => setSelectedApp(selectedApp)}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <ApplicationWorkspace
          application={selectedApp}
        />
      </Grid>
    </Grid>
  );
}