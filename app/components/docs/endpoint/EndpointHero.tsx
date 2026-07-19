"use client";

import {
  Stack,
  Typography,
} from "@mui/material";

import EndpointMethod from "./EndpointMethod";
import EndpointBreadcrum from "./EndpointBreadcrum";
import { BreadCrumbsObject } from "@/types/endpoint/Endpoint";

interface Props {
  breadCrumbs: BreadCrumbsObject
  title: string;
  description: string
  method:
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE";
  endpoint: string;
}

export default function EndpointHero({
  title,
  method,
  endpoint,
  description,
  breadCrumbs
}: Props) {
  return (
    <Stack spacing={2}
    sx={{
        mb:6
    }}
    >
      <EndpointBreadcrum breadCrumbsList={breadCrumbs.breadCrumbsList}/>
      <Typography
        variant="h3"
      >
        {title}
      </Typography>

      <Stack
        direction="row"
        spacing={2}
      >
        <EndpointMethod
          method={method}
        />

        <Typography
          variant="h6"
          sx={{
            fontFamily:"monospace"
          }}
        >
          {endpoint}
        </Typography>
      </Stack>
      <Typography
        variant="body1"
        sx={{
            lineHeight:1.8
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
}