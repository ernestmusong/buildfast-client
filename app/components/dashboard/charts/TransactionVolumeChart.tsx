"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

import {
  Card,
  CardContent,
  CardHeader,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Stack,
} from "@mui/material";
import {
  ChartsContainer,
  BarPlot,
  ChartsXAxis,
  ChartsYAxis,
  ChartsGrid,
  ChartsTooltip,
} from "@mui/x-charts";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useMemo, useState } from "react";
// import { BarChart } from "@mui/x-charts/BarChart";
 

export interface TransactionVolumeData {
  [key: string]: string | number;
  label: string;
  value: number;
}

interface TransactionVolumeChartProps {
  data: TransactionVolumeData[];
  currency?: string;
}

 const transactionVolumeData = [
  { label: "Mon", value: 1200000 },
  { label: "Tue", value: 1750000 },
  { label: "Wed", value: 2100000 },
  { label: "Thu", value: 1850000 },
  { label: "Fri", value: 3250000 },
  { label: "Sat", value: 2900000 },
  { label: "Sun", value: 4100000 },
];

// export default function TransactionVolumeChart({
//   data,
//   currency = "XAF",
// }: TransactionVolumeChartProps) {
//   const [anchorEl, setAnchorEl] =
//     useState<null | HTMLElement>(null);

//   const open = Boolean(anchorEl);

//   const totalVolume = useMemo(
//     () =>
//       data.reduce(
//         (sum, item) => sum + item.value,
//         0
//       ),
//     [data]
//   );

//   const formatter = new Intl.NumberFormat(
//     "en-US"
//   );

//   return (
//     <Card
//       elevation={0}
//       sx={{
//         borderRadius: 3,
//         border: "1px solid",
//         borderColor: "divider",
//       }}
//     >
//       <CardHeader
//         title="Transaction Volume"
//         subheader="Last 7 days"
//         action={
//           <>
//             <IconButton
//               onClick={(e) =>
//                 setAnchorEl(e.currentTarget)
//               }
//             >
//               <MoreVertIcon />
//             </IconButton>

//             <Menu
//               anchorEl={anchorEl}
//               open={open}
//               onClose={() =>
//                 setAnchorEl(null)
//               }
//             >
//               <MenuItem
//                 onClick={() =>
//                   setAnchorEl(null)
//                 }
//               >
//                 Last 7 Days
//               </MenuItem>

//               <MenuItem
//                 onClick={() =>
//                   setAnchorEl(null)
//                 }
//               >
//                 Last 30 Days
//               </MenuItem>

//               <MenuItem
//                 onClick={() =>
//                   setAnchorEl(null)
//                 }
//               >
//                 Last 12 Months
//               </MenuItem>
//             </Menu>
//           </>
//         }
//       />

//       <CardContent>
//         <Stack
//           spacing={0.5}
//           sx={{ mb: 3 }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: 700,
//             }}
//           >
//             {formatter.format(totalVolume)}{" "}
//             {currency}
//           </Typography>

//           <Typography
//             variant="body2"
//             color="text.secondary"
//           >
//             Total processed volume
//           </Typography>
//         </Stack>
         

//         <BarChart
//           height={350}
//           width={1000}
//           sx={{
//             maxWidth: "100vw",
//           }}
//           xAxis={[
//             {
//               scaleType: "band",
//               data: data.map(
//                 (item) => item.label
//               ),
//             },
//           ]}
//           series={[
//             {
//               label: "Volume",
//               data: data.map(
//                 (item) => item.value
//               ),
//             },
//           ]}
//           margin={{
//             left: 20,
//             right: 20,
//             top: 20,
//             bottom: 20,
//           }}
    
//           grid={{
//             horizontal: true,
//           }}
//         />
//       </CardContent>
//     </Card>
//   );
// }


export default function TransactionVolumeChart() {
  return (
    <Box
      
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        width: "100%",
      }}
    >
      <CardHeader
        title="Transaction Volume"
        subheader="Last 7 Days"
      />

      <Box
      sx={{
        width: "100%",
        height:"360px"
      }}
      >
        <ResponsiveContainer
          width="100%"
          height={360}
          
        >
          <BarChart
            data={transactionVolumeData}
            width={350}
            height={350}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="label"
            />

            <YAxis
              tickFormatter={(value) =>
                `$${(value / 1000000).toFixed(1)}M`
              }
            />

            <Tooltip
              formatter={(value) =>
                `$${Number(value).toLocaleString()}`
              }
            />

            <Bar
              dataKey="value"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}