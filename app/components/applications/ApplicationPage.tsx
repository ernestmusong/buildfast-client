"use client";

import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import ApplicationList from "./ApplicationList";
import ApplicationWorkspace from "./ApplicationWorkspace";
import { Application } from "@/types/application/aplication";
import CreateApplicationDialog, { CreateApplicationForm } from "./dialogs/CreateApplicationDialog";
import DepositDialog from "./dialogs/DepositDialog";

import { applications } from "@/data/applications/mockData";
import { DepositForm } from "./dialogs/DepositDialog";



export default function ApplicationPage() {

  const [selectedApp, setSelectedApp] = useState<Application>(applications[0]);
  const [depositOpen, setDepositOpen] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

   

  const handleDeposit = (
    data: DepositForm
  ) => {
    console.log(data);

    setDepositOpen(false);
  };

const handleCreateApplication = (
  application: CreateApplicationForm
) => {
  console.log(application);

  setCreateDialogOpen(false);
};

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <ApplicationList
          applications={applications}
          selected={selectedApp}
          onSelect={() => setSelectedApp(selectedApp)}
           onCreate={() =>
        setCreateDialogOpen(true)
      }
        />
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <ApplicationWorkspace
          application={selectedApp}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
       <CreateApplicationDialog
  open={createDialogOpen}
  onClose={() =>
    setCreateDialogOpen(false)
  }
  onCreate={handleCreateApplication}
/>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
       <DepositDialog
  open={depositOpen}
  applicationName={selectedApp.name}
  currentBalance={selectedApp.balance}
  onClose={() => setDepositOpen(false)}
  onDeposit={handleDeposit}
/>
      </Grid>
    </Grid>
  );
}