"use client"

import { Typography, Card, CardContent, Button, Box, Stack, Grid } from "@mui/material";
   
import {
  TrendingUp as RevenueIcon,
  People as UsersIcon,
  ShoppingCart as OrdersIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";

// Mock interface representation simulating database data payload structures
interface DashboardMetrics {
  totalRevenue: string;
  activeUsers: string;
  totalOrders: string;
  revenueGrowth: string;
  userGrowth: string;
  orderGrowth: string;
}

async function getDashboardData(): Promise<DashboardMetrics> {
  // Simulates an enterprise backend server-side fetch latency block
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        totalRevenue: "$142,384.50",
        activeUsers: "12,482",
        totalOrders: "3,120",
        revenueGrowth: "+12.4%",
        userGrowth: "+8.2%",
        orderGrowth: "+5.1%",
      });
    }, 100)
  );
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  const STATS_CARDS = [
    {
      title: "Total Revenue",
      value: data.totalRevenue,
      growth: data.revenueGrowth,
      icon: <RevenueIcon sx={{ fontSize: 28, color: "primary.main" }} />,
    },
    {
      title: "Active Users",
      value: data.activeUsers,
      growth: data.userGrowth,
      icon: <UsersIcon sx={{ fontSize: 28, color: "success.main" }} />,
    },
    {
      title: "Total Orders",
      value: data.totalOrders,
      growth: data.orderGrowth,
      icon: <OrdersIcon sx={{ fontSize: 28, color: "warning.main" }} />,
    },
  ];

  return (
    <Stack spacing={4}>
      {/* Welcome Title Banner Block Section */}
      <Stack
       direction={{ xs: "column", sm: "row" }}
       sx={{
        justifyContent:"space-between",
        alignItems:{ xs: "flex-start", sm: "center" }
       }}  spacing={2}>
        <Stack spacing={0.5}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 800, letterSpacing: "-1px" }}>
            Welcome back, Ernest
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Here is an overview look at your BuildFast merchant activities.
          </Typography>
        </Stack>
        <Button variant="contained" endIcon={<ArrowIcon />} sx={{ borderRadius: 2.5, px: 3, py: 1, fontWeight: 600, textTransform: "none" }}>
          View Reports
        </Button>
      </Stack>

      {/* Grid Layout Core Wrapper */}
      <Grid container spacing={3}>
        {STATS_CARDS.map((card) => (
          <Grid key={card.title} size={{ xs: 12, md: 4 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: (theme) => `0 12px 24px -10px ${theme.palette.divider}`,
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack
                
                 direction="row" 
                 sx={{
                     mb: 2,
                     justifyContent:"space-between",
                     alignItems:"flex-start"
                    }}
                 
                 >
                  <Stack spacing={1}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "text.secondary", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      {card.title}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700, letterSpacing: "-0.5px" }}>
                      {card.value}
                    </Typography>
                  </Stack>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      // Uses fluid color-mix formatting mapping models native to MUI v9 core builds
                      backgroundColor: "action.hover",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {card.icon}
                  </Box>
                </Stack>
                <Stack direction="row" spacing={1} sx={{alignItems:"center"}}>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: card.growth.startsWith("+") ? "success.main" : "error.main" }}>
                    {card.growth}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 500 }}>
                    vs last 30 days
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Placeholder Workspace Area for Tables/Charts Integration Layer */}
      <Card elevation={0} sx={{ borderRadius: 3, border: "1px solid", borderColor: "divider", minHeight: 300, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "background.paper", p: 4 }}>
        <Stack spacing={1}  sx={{ textAlign: "center", alignItems:"center" }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Activity Analytics Canvas
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: 400 }}>
            Ready to integrate charts or summary metric logs. Connect an internal data table layout module here to monitor live transactions.
          </Typography>
        </Stack>
      </Card>
    </Stack>
  );
}
