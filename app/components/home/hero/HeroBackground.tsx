"use client";

import { Box } from "@mui/material";

export default function HeroBackground() {
  return (
    <>
      {/* Main radial glow behind dashboard */}
      <Box
        sx={{
          position: "absolute",
          top: 40,
          right: -220,
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.14) 0%, rgba(37,99,235,0.08) 40%, transparent 75%)",
          filter: "blur(30px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Left top glow */}
      <Box
        sx={{
          position: "absolute",
          top: -160,
          left: -180,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Center blur */}
      <Box
        sx={{
          position: "absolute",
          top: 180,
          left: "42%",
          transform: "translateX(-50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Decorative top-right polygon */}
      <Box
        sx={{
          position: "absolute",
          top: 60,
          right: 260,
          width: 180,
          height: 180,
          background: "rgba(37,99,235,0.05)",
          clipPath:
            "polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)",
          filter: "blur(1px)",
          zIndex: 0,
          display: { xs: "none", lg: "block" },
        }}
      />

      {/* Bottom left accent */}
      <Box
        sx={{
          position: "absolute",
          bottom: 80,
          left: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(147,197,253,0.12) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Thin grid overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,.35), transparent 90%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </>
  );
}