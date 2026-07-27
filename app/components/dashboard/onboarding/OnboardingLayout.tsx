"use client";

import {
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import OnboardingSidebar from "./OnboardingSidebar";
import MobileProgressHeader from "./MobileProgressHeader";

interface Props {
  children: React.ReactNode;
}

export default function OnboardingLayout({
  children,
}: Props) {
  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      {!isMobile && <OnboardingSidebar />}

      <Box sx={{flex:1}}>
        {isMobile && (
          <MobileProgressHeader />
        )}

        <Container
          maxWidth="lg"
          sx={{
            py: 6,
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
}