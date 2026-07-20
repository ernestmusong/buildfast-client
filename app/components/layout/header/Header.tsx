"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DocsSidebar from "@/components/docs/layout/DocsSidebar";

// Navigation Data Configuration
const NAV_ITEMS = [
 {
    label: "Products",
    children: [
      { label: "Collections API", href: "/products/collections" },
      { label: "Payout API", href: "/products/payouts" },
      { label: "Payment Links", href: "/products/payment-links" },
      { label: "Checkout", href: "/products/checkout" },
    ],
  },
  {
    label: "Developers",
    children: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api-reference" },
      { label: "Sandbox", href: "/sandbox" },
      { label: "API Status", href: "/status" },
    ],
  },
  {
    label: "Trust Center",
    children: [
      { label: "Security", href: "/trust/security" },
      { label: "Compliance", href: "/trust/compliance" },
      { label: "System Status", href: "/status" },
      { label: "Incident History", href: "/trust/incidents" },
      { label: "Responsible Disclosure", href: "/trust/disclosure" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    children: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

const isDocs = pathname.startsWith("/docs");

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          height: 80,
          bgcolor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid",
          borderColor: "divider",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "between" }}>
            
            {/* Logo */}
            <Typography
              component={Link}
              href="/"
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

            {/* Desktop Navigation */}
            <Box
              component="nav"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 4,
                ml: 6,
                flexGrow: 1,
              }}
            >
              {NAV_ITEMS.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    position: "relative",
                    "&:hover .dropdown-menu": { display: "flex" },
                  }}
                >
                  {item.children ? (
                    <Button
                      endIcon={<KeyboardArrowDownIcon fontSize="small" />}
                      sx={{
                        color: "text.secondary",
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1rem",
                        p: 0,
                        "&:hover": { color: "primary.main", bg: "transparent" },
                      }}
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <Typography
                      component={Link}
                      href={item.href || "#"}
                      sx={{
                        color: "text.secondary",
                        fontWeight: 500,
                        textDecoration: "none",
                        fontSize: "1rem",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      {item.label}
                    </Typography>
                  )}

                  {/* Dropdown Menu Overlay */}
                  {item.children && (
                    <Box
                      className="dropdown-menu"
                      sx={{
                        display: "none",
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        pt: 2,
                        width: 220,
                        flexDirection: "column",
                        zIndex: 1000,
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "background.paper",
                          borderRadius: 3,
                          p: 1,
                          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.12)",
                          border: "1px solid",
                          borderColor: "divider",
                        }}
                      >
                        {item.children.map((child) => (
                          <Box
                            key={child.label}
                            component={Link}
                            href={child.href}
                            sx={{
                              display: "block",
                              p: 1.5,
                              borderRadius: 2,
                              color: "text.primary",
                              textDecoration: "none",
                              fontSize: "0.95rem",
                              "&:hover": { bgcolor: "action.hover" },
                            }}
                          >
                            {child.label}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            {/* Desktop Actions */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                component={Link}
                href="/login"
                sx={{
                  color: "text.primary",
                  fontWeight: 600,
                  textTransform: "none",
                }}
              >
                Sign In
              </Button>
              <Button
                component={Link}
                href="/register"
                variant="contained"
                color="primary"
                sx={{
                  px: 3,
                  py: 1.2,
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": { boxShadow: "none" },
                }}
              >
                Get API Key
              </Button>
              <IconButton color="default" size="small">
                <DarkModeIcon fontSize="small" />
              </IconButton>
            </Box>

            {/* Mobile Hamburger Toggle */}
            <IconButton
              color="default"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" }, color: "text.primary" }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Nav Drawer */}
      <Drawer
       anchor="right"
  open={mobileOpen}
  onClose={handleDrawerToggle}
  keepMounted // Move this here directly onto the Drawer
  slotProps={{
    paper: {
      sx: { width: 300, p: 3, boxSizing: "border-box" },
    },
  }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>

        {isDocs ? <DocsSidebar/> : (
               <Box component="nav">
          {NAV_ITEMS.map((item) => (
            <Box key={item.label} sx={{ mb: 3 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "text.secondary",
                  fontWeight: 700,
                  mb: 1,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {item.label}
              </Typography>
              {item.children ? (
                <List disablePadding>
                  {item.children.map((child) => (
                    <ListItem key={child.label} disableGutters sx={{ py: 0.5 }}>
                      <Typography
                        component={Link}
                        href={child.href}
                        onClick={handleDrawerToggle}
                        sx={{
                          textDecoration: "none",
                          color: "text.primary",
                          width: "100%",
                          "&:hover": { color: "primary.main" },
                        }}
                      >
                        {child.label}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography
                  component={Link}
                  href={item.href || "#"}
                  onClick={handleDrawerToggle}
                  sx={{
                    textDecoration: "none",
                    color: "text.primary",
                    display: "block",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item.label}
                </Typography>
              )}
            </Box>
          ))}

          <Divider sx={{ my: 3 }} />

          <List disablePadding sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              component={Link}
              href="/login"
              fullWidth
              onClick={handleDrawerToggle}
              sx={{
                color: "text.primary",
                fontWeight: 600,
                justifyContent: "center",
                textTransform: "none",
              }}
            >
              Sign In
            </Button>
            <Button
        component={Link}
        href="/register"
        variant="contained"
        endIcon={<ArrowForwardRoundedIcon />}
        onClick={handleDrawerToggle}
        size="large"
         sx={{
          textTransform: "none",
          boxShadow: (theme) =>
            `0 12px 30px ${theme.palette.primary.main}33`,

          transition: "all .25s ease",

          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: (theme) =>
              `0 18px 40px ${theme.palette.primary.main}55`,
          },

          "& .MuiButton-endIcon": {
            transition: ".25s",
          },

          "&:hover .MuiButton-endIcon": {
            transform: "translateX(3px)",
          },
        }}
      >
        Get API Key
      </Button>
          </List>
        </Box>
        )}
      </Drawer>
    </>
  );
}