"use client";

import { ReactNode, useState } from "react";
import {
  Box,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

 import Header from "./header/Header";
 import Footer from "./footer/Footer";

interface MarkettingLayoutProps {
  children: ReactNode;
}

 
export default function MarkettingLayout({
  children,
}: MarkettingLayoutProps) {
  const theme = useTheme();

   

   

  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  );
}