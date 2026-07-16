"use client";

import { ReactNode } from "react";

// import { Grid, Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { Grid, Box, Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface InspectorLayoutProps {
  children: ReactNode;
  inspector?: ReactNode;

  contentWidth?: number;

  inspectorWidth?: number;

  spacing?: number;

  mt?: number;
 isInspectorOpen?: boolean; 
  onInspectorClose?: () => void;
   isModalOpen: boolean;          // Controls Dialog visibility
  onModalClose?: () => void;
 }

export default function InspectorLayout({
 children,
  inspector,
  contentWidth = 100,
  spacing = 3,
  mt = 0,
   isModalOpen,
  onModalClose,
}: InspectorLayoutProps) {
   
  return (
    <Box
    sx={{
        mt:{mt}
    }}
    >
      <Grid container spacing={spacing}>
        {/* Main Content */}

        <Grid
          size={{
            xs: 12,
            lg: contentWidth,
          }}
        >
          {children}
        </Grid>

        <Dialog
          open={isModalOpen}
          onClose={onModalClose}
          maxWidth="sm"
          fullWidth
          aria-labelledby="inspector-dialog-title"
        >
          {/* Close button in top-right corner */}
          <IconButton
            aria-label="close"
            onClick={onModalClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

          <DialogContent sx={{ mt: 3 }}>
            {inspector}
          </DialogContent>
        </Dialog>
      </Grid>
    </Box>
  );
}
