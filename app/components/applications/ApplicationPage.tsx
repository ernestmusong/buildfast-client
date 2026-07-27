"use client";

import { useState } from "react";
import { Box, Grid } from "@mui/material";

import ApplicationList from "./ApplicationList";
import ApplicationWorkspace from "./ApplicationWorkspace";

import { applications } from "@/data/applications/mockData";

export default function ApplicationPage() {
  const [selectedApp, setSelectedApp] =
    useState(applications[0]);

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <ApplicationList
          applications={applications}
          selected={selectedApp}
          onSelect={setSelectedApp}
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