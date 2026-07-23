"use client";

import { ReactNode } from "react";

import {
  Box,
  Card,
  CardContent,
  Container,
} from "@mui/material";

interface AuthCardProps {
  children: ReactNode;
  maxWidth?: "xs" | "sm" | "md";
}

export default function AuthCard({
  children,
  maxWidth = "sm",
}: AuthCardProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 6,
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth={maxWidth}>
        <Card
          elevation={0}
          sx={{
            borderRadius: 4,
            border: 1,
            borderColor: "divider",
            overflow: "hidden",
            boxShadow: (theme) => theme.shadows[2],
          }}
        >
          <CardContent
            sx={{
              p: {
                xs: 3,
                sm: 5,
              },
            }}
          >
            {children}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}