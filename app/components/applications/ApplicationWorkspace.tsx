"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
  Tabs,
  Chip,
  Tab,
  Box,
  Stack,
  Button,
  Typography,
} from "@mui/material";

import ApplicationOverview from "./tabs/ApplicationOverview";
import ApplicationWalletTab from "./tabs/ApplicationWalletTab";
import ApplicationSecurityTab from "./tabs/ApplicationSecurityTab";
import ApplicationApiKeysTab from "./tabs/ApplicationApiKeysTab";
import ApplicationWebhookTab from "./tabs/ApplicationWebhookTab";
import ApplicationSettingsTab from "./tabs/ApplicationSettingsTab";
import ApplicationDangerZoneTab from "./tabs/ApplicationDangerZoneTab";
import { Application } from "@/types/application/aplication";
import { DepositForm } from "./dialogs/DepositDialog";
import DepositDialog from "./dialogs/DepositDialog";
import { Apps as DefaultAppIcon } from "@mui/icons-material";

interface ApplicationListProps {
  application: Application;
}

export default function ApplicationWorkspace({
  application,
}: ApplicationListProps) {

  const [tab, setTab] = useState(0);

  const [depositOpen, setDepositOpen] =
    useState(false);

  const handleDeposit = (
    data: DepositForm
  ) => {
    console.log(data);

    setDepositOpen(false);
  };


  return (
    <>
    <Card>
      <CardContent>

        <Stack
          direction="row"
         sx={{ justifyContent:"space-between", mb:3}}
           
        >
          <Box>
            <Typography variant="h5">
              {application.name}
            </Typography>

            <Typography color="text.secondary">
              {application.environment}
            </Typography>
          </Box>

           

          <Stack direction="row" spacing={2}>
            <Button 
            variant="contained"
             disableElevation
             onClick={() => setDepositOpen(true)}
             >
              Deposit
            </Button>

            <Button variant="outlined" disableElevation>
              Withdraw
            </Button>

            <Button variant="outlined" disableElevation>
              Transfer
            </Button>
          </Stack>
        </Stack>

        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
        scrollButtons="auto"
         allowScrollButtonsMobile
        aria-label="application tabs"
          sx={{
            overflowX: "auto"
          }}
        >
          <Tab label="Overview" />
          <Tab label="Wallet" />
          <Tab label="Security" />
          <Tab label="API Keys" />
          <Tab label="Webhooks" />
          <Tab label="Settings" />
          <Tab label="Danger Zone" />
        </Tabs>

        <Box sx={{mt:3}}>
          {tab === 0 && (
            <ApplicationOverview
              application={application}
            />
          )}

          {tab === 1 && (
            <ApplicationWalletTab
               
            />
          )}

          {tab === 2 && (
            <ApplicationSecurityTab
              application={application}
            />
          )}

          {tab === 3 && (
            <ApplicationApiKeysTab
              application={application}
            />
          )}

          {tab === 4 && (
            <ApplicationWebhookTab
              application={application}
            />
          )}

          {tab === 5 && (
            <ApplicationSettingsTab
              application={application}
            />
          )}

          {tab === 6 && (
            <ApplicationDangerZoneTab
               
            />
          )}
        </Box>

      </CardContent>
    </Card>
    <DepositDialog
        open={depositOpen}
        applicationName={application.name}
        currentBalance={application.balance}
        onClose={() =>
          setDepositOpen(false)
        }
        onDeposit={handleDeposit}
      />
    </>
  );
}