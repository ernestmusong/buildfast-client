"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
  Tabs,
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

export default function ApplicationWorkspace({
  application,
}: any) {
  const [tab, setTab] = useState(0);

  return (
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
            <Button variant="contained">
              Deposit
            </Button>

            <Button variant="outlined">
              Withdraw
            </Button>

            <Button variant="outlined">
              Transfer
            </Button>
          </Stack>
        </Stack>

        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
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
  );
}