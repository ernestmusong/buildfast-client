"use client";

import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
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

import DocsSidebar from "./DocsSidebar";

export default function MobileDocsDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container maxWidth="sm"
      sx={{
         display:{
            lg:"none",
           }
      }}
      >
           <IconButton
         color="default"
          aria-label="open drawer"
          edge="start"
        onClick={() => setOpen(true)}
        sx={{
           color: "text.primary",
         }}
      >
        <MenuIcon />
      </IconButton>
          
        </Container>
      

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DocsSidebar />
      </Drawer>
    </>
  );
}