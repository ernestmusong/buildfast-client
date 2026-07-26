"use client";

import { ReactNode, useState } from "react";
import { Box, Toolbar } from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardDrawer from "./DashboardDrawer";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DRAWER_WIDTH = 280;

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      
      {/* 1. Global Navigation Top Bar Component */}
      <DashboardHeader onMenuClick={handleDrawerToggle} />

      {/* 2. Permanent Desktop Sidebar (Strictly hidden on smaller breakpoints via CSS display engine) */}
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <DashboardSidebar width={DRAWER_WIDTH} />
      </Box>

      {/* 3. Mobile Navigation Sheet Dropdown Panel Overlays */}
      <DashboardDrawer
        width={DRAWER_WIDTH}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      />

      {/* 4. Primary Content Base Canvas View Section */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          // Applies the exact offset shift required to balance out the width of the sidebar
          // pl: { lg: `${DRAWER_WIDTH}px` }, 
          width: "100%",
        }}
      >
        {/* Generates structural padding offsets underneath the sticky header element */}
        <Toolbar />
        
        {/* Main Operational Child Layout View Engine */}
        <Box sx={{ flex: 1, p: { xs: 2, md: 3, lg: 4 } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}