"use client";

import { Card, CardContent, CardHeader, Divider, Typography, Box } from "@mui/material";
import { ScaleLinear } from '@mui/x-charts-vendor/d3-scale';
import { green, red } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import { useYScale, useDrawingArea } from '@mui/x-charts/hooks';
import { LineChart, lineClasses } from '@mui/x-charts/LineChart';

const margin = {left: 0, right: 24, bottom: 0 };
const data = [4000, 3000, -1000, 500, -2100, -250, 3490];
const xData = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

type ColorSwitchProps = {
  threshold: number;
  color1: string;
  color2: string;
  id: string;
};


export default function AnalyticsChart() {
  return (
    <Card elevation={0} sx={{ borderRadius: 3, border: "1px solid", borderColor: "divider", backgroundColor: "background.paper" }}>
      <CardHeader
        title={<Typography variant="h6" sx={{ fontWeight: 700 }}>Revenue Performance Logs</Typography>}
        subheader="Daily graphical timeline monitoring gross incoming currency pipelines"
        sx={{ px: 3, py: 2.5 }}
      />
      <Divider />
      <CardContent sx={{
         p: 2,
         width: "100%",
        }}
      >
         <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
      {/* <LineChart
        xAxis={[{ data: xData, scaleType: 'point' }]}
        yAxis={[{ min: -3000, max: 4000, width: 50 }]}
        series={[{ data, area: true }]}
        height={200}
        width={700}
        margin={margin}
        sx={{
          maxWidth: "100%",
          [`& .${lineClasses.area}`]: {
            fill: 'url(#switch-color-id-1)',
            filter: 'none', // Remove the default filter.
          },
        }}
      >
        <ColorSwitch
          color1="#11B678" // green
          color2="#FF3143" // red
          threshold={0}
          id="switch-color-id-1"
        />
        <rect x={0} y={0} width={5} height="100%" fill="url(#switch-color-id-1)" />
      </LineChart> */}
      <LineChart
        xAxis={[{ data: xData, scaleType: 'point' }]}
        yAxis={[{ min: -3000, max: 4000, width: 50 }]}
        series={[{ data, area: true }]}
        height={200}
        margin={margin}
        sx={{
          [`& .${lineClasses.area}`]: {
            fill: 'url(#switch-color-id-2)',
            filter: 'none', // Remove the default filter.
          },
        }}
      >
        <ColorPalette id="switch-color-id-2" />

        <rect x={0} y={0} width={5} height="100%" fill="url(#switch-color-id-2)" />
      </LineChart>
    </Stack>
      </CardContent>
    </Card>
  );
}






 
function ColorSwitch({ threshold, color1, color2, id }: ColorSwitchProps) {
  const { top, height, bottom } = useDrawingArea();
  const svgHeight = top + bottom + height;

  const scale = useYScale() as ScaleLinear<number, number>; // You can provide the axis Id if you have multiple ones
  const y0 = scale(threshold); // The coordinate of the origin
  const off = y0 !== undefined ? y0 / svgHeight : 0;

  return (
    <defs>
      <linearGradient
        id={id}
        x1="0"
        x2="0"
        y1="0"
        y2={`${svgHeight}px`}
        gradientUnits="userSpaceOnUse" // Use the SVG coordinate instead of the component ones.
      >
        <stop offset={off} stopColor={color1} stopOpacity={1} />
        <stop offset={off} stopColor={color2} stopOpacity={1} />
      </linearGradient>
    </defs>
  );
}

function ColorPalette({ id }: { id: string }) {
  const { top, height, bottom } = useDrawingArea();
  const svgHeight = top + bottom + height;

  const scale = useYScale() as ScaleLinear<number, number>; // You can provide the axis Id if you have multiple ones

  return (
    <defs>
      <linearGradient
        id={id}
        x1="0"
        x2="0"
        y1="0"
        y2={`${svgHeight}px`}
        gradientUnits="userSpaceOnUse" // Use the SVG coordinate instead of the component ones.
      >
        <stop
          offset={scale(5000) / svgHeight}
          stopColor={green[400]}
          stopOpacity={1}
        />
        <stop
          offset={scale(4000) / svgHeight}
          stopColor={green[400]}
          stopOpacity={1}
        />
        <stop
          offset={scale(4000) / svgHeight}
          stopColor={green[300]}
          stopOpacity={1}
        />
        <stop
          offset={scale(3000) / svgHeight}
          stopColor={green[300]}
          stopOpacity={1}
        />
        <stop
          offset={scale(3000) / svgHeight}
          stopColor={green[200]}
          stopOpacity={1}
        />
        <stop
          offset={scale(2000) / svgHeight}
          stopColor={green[200]}
          stopOpacity={1}
        />
        <stop
          offset={scale(2000) / svgHeight}
          stopColor={green[100]}
          stopOpacity={1}
        />
        <stop
          offset={scale(1000) / svgHeight}
          stopColor={green[100]}
          stopOpacity={1}
        />
        <stop
          offset={scale(1000) / svgHeight}
          stopColor={green[50]}
          stopOpacity={1}
        />
        <stop offset={scale(0) / svgHeight} stopColor={green[50]} stopOpacity={1} />
        <stop offset={scale(0) / svgHeight} stopColor={red[100]} stopOpacity={1} />
        <stop
          offset={scale(-1000) / svgHeight}
          stopColor={red[100]}
          stopOpacity={1}
        />
        <stop
          offset={scale(-1000) / svgHeight}
          stopColor={red[200]}
          stopOpacity={1}
        />
        <stop
          offset={scale(-2000) / svgHeight}
          stopColor={red[200]}
          stopOpacity={1}
        />
        <stop
          offset={scale(-3000) / svgHeight}
          stopColor={red[300]}
          stopOpacity={1}
        />
      </linearGradient>
    </defs>
  );
}

