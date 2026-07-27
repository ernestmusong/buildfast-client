"use client";

import { Card, CardContent, Typography, Button, Stack, Chip, Box } from "@mui/material";
import { Apps as DefaultAppIcon } from "@mui/icons-material";

// Declared explicit type interfaces replacing 'any' parameters for production safety
interface Application {
  id: string;
  name: string;
  environment: "Production" | "Staging" | "Development" | string;
  balance: number;
}

interface ApplicationListProps {
  applications: Application[];
  selected: Application;
  onSelect: (app: Application) => void;
}

export default function ApplicationList({
  applications,
  selected,
  onSelect,
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
    <Card>
      <CardContent>
        <Stack sx={{ mb: 3 }}>
          <Typography variant="h6">Applications</Typography>
          <Button variant="contained" disableElevation>
            + New Application
          </Button>
        </Stack>
        
        <Stack spacing={2}>
          {applications.map((app) => (
            <Card
              key={app.id}
              variant={selected?.id === app.id ? "outlined" : undefined}
              sx={{ cursor: "pointer" }}
              onClick={() => onSelect(app)}
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
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        fontFamily: "monospace", 
                        color: "var(--mui-palette-text-secondary)" 
                      }}
                    >
                      ID: {app.id}
                    </Typography>
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
                <Typography sx={{ mt: 1 }}>
                  {app.balance.toLocaleString()} XAF
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
