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
      
      {/* 1. Global Navigation AppBar Header (Uses zIndex offsets to sit safely on top of everything) */}
      <DashboardHeader onMenuClick={handleDrawerToggle} />

      {/* 2. Permanent Desktop Sidebar Column Rail */}
      <Box 
        component="nav" 
        sx={{ 
          width: { lg: DRAWER_WIDTH }, 
          flexShrink: { lg: 0 }, 
          display: { xs: "none", lg: "block" } 
        }}
      >
        <DashboardSidebar width={DRAWER_WIDTH} />
      </Box>

      {/* 3. Mobile Navigation Sheet Slide-Over Popovers */}
      <DashboardDrawer
        width={DRAWER_WIDTH}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      />

      {/* 4. Primary Content Base Canvas View Section (Guarantees zero overlap with layout components) */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          // Applies an explicit left margin shift on desktop screens to clear the side nav rail cleanly
          // ml: { lg: `${DRAWER_WIDTH}px` }, 
          width: { lg: `calc(100% - ${DRAWER_WIDTH}px)` }
        }}
      >
        {/* Generates structural layout padding underneath the sticky header element */}
        <Toolbar />
        
        {/* Main Operational Child Layout View Engine */}
        <Box 
          sx={{ 
            flex: 1, 
            px: { xs: 2, md: 5 }, 
            py: 4 
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
