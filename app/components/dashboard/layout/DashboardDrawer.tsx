"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Storefront as MerchantIcon,
  AccountBalanceWallet as WalletIcon,
  ReceiptLong as TransactionsIcon,
  Apps as ApplicationsIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

interface DashboardDrawerProps {
  width: number;
  open: boolean;
  onClose: () => void;
}

// Kept synchronous with DashboardSidebar navigation mappings
const NAV_ITEMS = [
  { text: "Overview", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Merchant Hub", icon: <MerchantIcon />, path: "/dashboard/merchant" },
  { text: "Applications", icon: <ApplicationsIcon />, path: "/dashboard/applications" },
  { text: "Transactions", icon: <TransactionsIcon />, path: "/dashboard/transactions" },
  { text: "Wallet", icon: <WalletIcon />, path: "/dashboard/wallet" },
  { text: "Settings", icon: <SettingsIcon />, path: "/dashboard/settings" },
];

export default function DashboardDrawer({ width, open, onClose }: DashboardDrawerProps) {
  const pathname = usePathname();

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Optimizes mobile layout rendering performance on slower devices
      }}
      sx={{
        display: { xs: "block", lg: "none" }, // Hidden automatically on desktop screens
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
          backgroundColor: "background.paper",
        },
      }}
    >
      {/* Structural Offset Matching Header Container Layout */}
      <Toolbar>
        <Typography variant="h6" sx={{ fontWeight: 700, px: 1 }}>
          BuildFast
        </Typography>
      </Toolbar>
      
      <Divider />

      <Box sx={{ overflow: "auto", py: 2 }} onClick={onClose}>
        <List disablePadding>
          <ListItem disablePadding sx={{ px: 2.5, mb: 1 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>
              CORE MANAGEMENT
            </Typography>
          </ListItem>

          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;

            return (
              <ListItem key={item.text} disablePadding sx={{ mb: 0.5, px: 1.5 }}>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  selected={isActive}
                  sx={{
                    borderRadius: 2,
                    py: 1,
                    "&.Mui-selected": {
                      backgroundColor: "action.selected",
                      color: "primary.main",
                      fontWeight: 600,
                      "& .MuiListItemIcon-root": {
                        color: "primary.main",
                      },
                    },
                  }}
                >
                  <ListItemIcon 
                    sx={{ 
                      color: isActive ? "primary.main" : "text.secondary",
                      minWidth: 36 // Strictly matches MUI v9 default spacing standards
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  
                  <ListItemText
                    primary={item.text}
                    slotProps={{
                      primary: {
                        sx: {
                          fontSize: "0.875rem",
                          fontWeight: isActive ? 600 : 500,
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}
