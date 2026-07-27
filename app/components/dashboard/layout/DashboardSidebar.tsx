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
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Storefront as MerchantIcon,
  AccountBalanceWallet as WalletIcon,
  ReceiptLong as TransactionsIcon,
  Apps as ApplicationsIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

// Explicit interface property typing mapping parameters
interface DashboardSidebarProps {
  width: number;
}

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
        // Hidden automatically on mobile viewports—managed completely by the layout shell framework
        display: { xs: "none", lg: "block" },
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
          backgroundColor: "var(--mui-palette-background-paper)",
          borderRight: "1px solid",
          borderColor: "var(--mui-palette-divider)",
        },
      }}
    >
      {/* Structural Offset clear space pushing links safely directly below the fixed Header height */}
      <Box sx={{ height: "80px" }} />

      <Box sx={{ overflowY: "auto", py: 2, px: 1.5 }}>
        <List disablePadding>
          <ListItem disablePadding sx={{ px: 2, mb: 1.5 }}>
            <Typography 
              variant="caption" 
              sx={{ 
                fontWeight: 700, 
                color: "var(--mui-palette-text-secondary)",
                letterSpacing: "0.5px"
              }}
            >
              CORE MANAGEMENT
            </Typography>
          </ListItem>

          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;

            return (
              <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  selected={isActive}
                  sx={{
                    borderRadius: 2,
                    py: 1,
                    px: 2,
                    // Interactive states powered cleanly by your CSS variables theme provider
                    "&.Mui-selected": {
                      backgroundColor: "var(--mui-palette-action-selected)",
                      color: "var(--mui-palette-primary-main)",
                      "& .MuiListItemIcon-root": {
                        color: "var(--mui-palette-primary-main)",
                      },
                    },
                    "&:hover": {
                      backgroundColor: "var(--mui-palette-action-hover)",
                    }
                  }}
                >
                  <ListItemIcon 
                    sx={{ 
                      color: isActive ? "var(--mui-palette-primary-main)" : "var(--mui-palette-text-secondary)",
                      minWidth: 36 // Strictly matches MUI v9 horizontal list alignment standards
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
