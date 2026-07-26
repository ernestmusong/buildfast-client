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

interface DashboardSidebarProps {
  width: number;
}

// Configured navigation routing mapping registry
const NAV_ITEMS = [
  { text: "Overview", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Merchant Hub", icon: <MerchantIcon />, path: "/dashboard/merchant" },
  { text: "Applications", icon: <ApplicationsIcon />, path: "/dashboard/applications" },
  { text: "Transactions", icon: <TransactionsIcon />, path: "/dashboard/transactions" },
  { text: "Wallet", icon: <WalletIcon />, path: "/dashboard/wallet" },
  { text: "Settings", icon: <SettingsIcon />, path: "/dashboard/settings" },
];

export default function DashboardSidebar({ width }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: width,
        flexShrink: 0,
        // Aligns with the modern nested custom structural classes in MUI v9
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
          backgroundColor: "background.paper",
          borderRight: "1px solid",
          borderColor: "divider",
        },
      }}
    >
      {/* Structural Top Offset Anchor mirroring the Main AppBar block height */}
      <Toolbar>
        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "text.secondary", px: 1 }}>
          CORE MANAGEMENT
        </Typography>
      </Toolbar>
      
      <Divider />

      <Box sx={{ overflow: "auto", py: 2 }}>
        <List disablePadding>
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
                    // Active list background modifications utilizing CSS native theme states
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
                  {/* Complies with MUI v9 36px default item spacing boundaries natively */}
                  <ListItemIcon 
                    sx={{ 
                      color: isActive ? "primary.main" : "text.secondary" 
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
