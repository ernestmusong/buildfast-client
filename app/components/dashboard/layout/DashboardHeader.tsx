"use client";

import { useState, MouseEvent } from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  // Menu anchors state management
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isProfileMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
     sx={{
    backgroundColor: "background.paper",
    color: "text.primary",
    borderBottom: "1px solid",
    borderColor: "divider",
    zIndex: (theme) => theme.zIndex.drawer + 1,
     
    // Automatically applies a left spacing offset on desktop breakpoints to align text perfectly
    pl: { lg: "20px" },
  }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        
        {/* Left Section: Nav Trigger and Brand Identity */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            variant="h6"
            component={Link}
            href="/"
            noWrap
  
             sx={{
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "text.primary",
                textDecoration: "none",
                flexGrow: { xs: 1, md: 0 },
              }}
          >
            BuildFast
          </Typography>
        </Box>

        {/* Right Section: Core Utility Icons & Avatar Controls */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="inherit" aria-label="show 4 new mails">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit" aria-label="show 17 new notifications">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit" aria-label="settings configuration">
            <SettingsIcon />
          </IconButton>

          <Tooltip title="Account settings">
            <IconButton
              onClick={handleProfileMenuOpen}
              size="small"
              sx={{ ml: 1 }}
              aria-controls={isProfileMenuOpen ? "profile-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={isProfileMenuOpen ? "true" : undefined}
            >
              <Avatar
                sx={{ width: 36, height: 36, bgcolor: "primary.main" }}
                alt="Musong Ernest"
              >
                ME
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>

        {/* Profile Navigation Dropdown Menu Overlay */}
        <Menu
          anchorEl={anchorEl}
          id="profile-menu"
          open={isProfileMenuOpen}
          onClose={handleProfileMenuClose}
          onClick={handleProfileMenuClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          sx={{zIndex: 1000,}}
          
          // Complies with modern unified slotProps syntax required by MUI v9 core APIs
          // slotProps={{
          //   paper: {
          //     elevation: 2,
          //     sx: {
          //       mt: 1.5,
          //       minWidth: 180,
          //       borderRadius: 2,
          //       border: "1px solid",
          //       borderColor: "divider",
          //     },
          //   },
          // }}
        >
          <MenuItem onClick={handleProfileMenuClose}>My Profile</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Merchant Account</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Billing & Plans</MenuItem>
          <MenuItem sx={{ color: "error.main" }} onClick={handleProfileMenuClose}>
            Sign Out
          </MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  );
}
