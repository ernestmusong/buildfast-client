"use client"

import { Typography, Card, CardContent, Button, Box, Stack, Grid } from "@mui/material";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import TransactionVolumeChart from "@/components/dashboard/charts/TransactionVolumeChart";
   
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

 

 
export default async function DashboardPage() {

  const STATS_CARDS = [
    {
      title: "Total Revenue",
      value: "$142,384.50",
      growth: "+12.4%",
      icon: <RevenueIcon sx={{ fontSize: 28, color: "primary.main" }} />,
    },
    {
      title: "Active Users",
      value:  "12,482",
      growth: "+5.8",
      icon: <UsersIcon sx={{ fontSize: 28, color: "success.main" }} />,
    },
    {
      title: "Total Orders",
      value:  "12,482",
      growth: "+5.8",
      icon: <OrdersIcon sx={{ fontSize: 28, color: "warning.main" }} />,
    },
  ];


 

  return (
    <>
     
    <Stack spacing={4}
    >
       
      <Stack
       direction={{ xs: "column", sm: "row" }}
       sx={{
        justifyContent:"space-between",
        alignItems: "center"
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

      
      <Grid container spacing={3} >
        {STATS_CARDS.map((card) => (
          <Grid key={card.title} size={{ xs: 12, md: 4 }}>
            <Card
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
      <TransactionVolumeChart /> 

       <RecentTransactions />
       <AnalyticsChart /> 
    </Stack>
    
    </>
  );
}
