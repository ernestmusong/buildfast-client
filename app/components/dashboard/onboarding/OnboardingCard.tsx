// components/onboarding/OnboardingCard.tsx

import { Card, CardContent } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function OnboardingCard({
  children,
}: Props) {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 4,
      }}
    >
      <CardContent sx={{ p: 5 }}>
        {children}
      </CardContent>
    </Card>
  );
}