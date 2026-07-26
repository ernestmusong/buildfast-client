"use client";

import { ReactNode, useState } from "react";
import {
  Box,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardDrawer from "./DashboardDrawer";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DRAWER_WIDTH = 280;

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(
    theme.breakpoints.up("lg")
  );

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      
      {/* 1. Desktop Sidebar (Controlled strictly via pure CSS display tokens) */}
      <Box component="nav" sx={{ width: { lg: DRAWER_WIDTH }, flexShrink: { lg: 0 }, display: { xs: "none", lg: "block" } }}>
        <DashboardSidebar width={DRAWER_WIDTH} />
      </Box>

      {/* 2. Mobile Drawer Popover Sheet */}
      <DashboardDrawer
        width={DRAWER_WIDTH}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      />

      {/* 3. Main View Frame Section Container */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          // Reserves a fixed spacing margin exclusively on desktop devices to prevent overlapping
          ml: { lg: `${DRAWER_WIDTH}px` }, 
          width: { lg: `calc(100% - ${DRAWER_WIDTH}px)` }
        }}
      >
        {/* Global Toolbar Header Block */}
        <DashboardHeader onMenuClick={handleDrawerToggle} />
        
        {/* Offset Spacing to clear the fixed AppBar position elevation layer */}
        <Toolbar />
        
        {/* Page Inner Content Port */}
        <Box sx={{ flex: 1, p: { xs: 2, md: 3, lg: 4 } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}