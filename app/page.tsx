import Hero from "@/components/home/hero/Hero";
import Developer from "@/components/home/developer/Developer";
import Security from "@/components/home/security/Security";
import { Box } from "@mui/material";
import AnalyticsChart from "./components/dashboard/AnalyticsChart";

export default function Home() {
  const analyticsData = [
  { label: "Mon", value: 1200000 },
  { label: "Tue", value: 1750000 },
  { label: "Wed", value: 2100000 },
  { label: "Thu", value: 1850000 },
  { label: "Fri", value: 3250000 },
  { label: "Sat", value: 2900000 },
  { label: "Sun", value: 4100000 },
];
  return (
     <Box
     component="main"
     >
     <Hero/>
     <Developer/>
     <Security/>
      <AnalyticsChart  />
     </Box>
  )
}
