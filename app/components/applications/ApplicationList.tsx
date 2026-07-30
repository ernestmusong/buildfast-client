"use client";

import { useState } from "react";
import { Card, CardContent, Typography, Button, Stack, Chip, Box } from "@mui/material";
import { Apps as DefaultAppIcon } from "@mui/icons-material";
import { Application } from "@/types/application/aplication";
import CardActionArea from '@mui/material/CardActionArea';
import Link from "next/link";

interface ApplicationListProps {
  applications: Application[];
  selected: Application;
  onSelect: (id: string) => void;
  onCreate: () => void;
}

export default function ApplicationList({
  applications,
  selected,
  onSelect,
  onCreate
}: ApplicationListProps) {

  // Safe semantic color-mix mapper for variable environment chips
  const getChipColor = (env: string) => {
    switch (env.toLowerCase()) {
      case "production":
        return "success" as const;
      case "staging":
        return "warning" as const;
      default:
        return "default" as const;
    }
  };

  return (
    <Box>
      
      <Box>
        <Stack sx={{ mb: 3 }}>
          <Typography 
          variant="h6"
          sx={{textAlign: "center"}}
          >
            Applications
          </Typography>
          <Button 
          variant="contained" 
          disableElevation
         onClick={onCreate}
          >
            + New Application
          </Button>
        </Stack>
        
        <Stack spacing={2}>
          {applications.map((app) => (
            <Card
              key={app.id}
              // variant={selected?.id === app.id ? "outlined" : undefined}
              sx={{ cursor: "pointer" }}
              
            >
              <CardActionArea
              onClick={() => {
                console.log("selected app", app.id)
                onSelect(app.id)
              }}
               data-active={selected.id === app.id ? '' : undefined}
            sx={{
    
    // borderColor: "transparent",
    

    "&[data-active]": {
      border: "1.5px solid",
      borderColor: "primary.main",
      // backgroundColor: "action.selected",
    },

    "&:hover": {
      backgroundColor: "action.hover",
    },
  }}
              >
                   <CardContent>
                {/* Upper Sub-Flex Row Section wrapping the branding elements */}
                <Stack direction="row" spacing={1.5} sx={{ mb: 1, alignItems:"center"  }}>
                  <Box 
                    sx={{ 
                      p: 1, 
                      borderRadius: 1.5, 
                      backgroundColor: "var(--mui-palette-action-hover)",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <DefaultAppIcon sx={{ fontSize: 20, color: "var(--mui-palette-text-secondary)" }} />
                  </Box>
                  
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontWeight: 600 }}>{app.name}</Typography>
                  </Box>
                  
                  {/* Colored Environment UI Chip Layer */}
                  <Chip 
                    label={app.environment} 
                    color={getChipColor(app.environment)}
                    size="small" 
                    variant="outlined" // Sleek semi-transparent appearance native to MUI v9
                    sx={{ fontWeight: 600 }}
                  />
                </Stack>
                
                {/* Retained currency format mapping synchronously */}
                <Stack 
                direction="row"
                 sx={{
                  alignItems: "center",
                  justifyContent: "space-between"
                 }}
                
                 >

                <Typography sx={{ mt: 1 }}>
                  {app.balance.toLocaleString()} XAF
                </Typography>
                {app.environment === "sandbox" && (
                   <Typography
                   component={Link}
                   href='/merchant/onboarding'
                    sx={{
                  color:"orange",
                  textDecoration: "none",
                  textTransform: "capitalize"

                 }}
                   >
                    verify
                </Typography>
                )}
               
                </Stack>
              </CardContent>
              </CardActionArea>
            
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
