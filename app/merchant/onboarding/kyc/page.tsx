"use client";

import { Box, Stack, Typography } from "@mui/material";

import OnboardingCard from "@/components/dashboard/onboarding/OnboardingCard";
import DocumentManager, {
  DocumentItem,
} from "@/components/dashboard/onboarding/DocumentManager";
import StepNavigation from "@/components/dashboard/onboarding/StepNavigation";

const documents: DocumentItem[] = [
  {
    id: "government-id",
    title: "Government ID",
    description: "National ID Card or Passport",
    status: "uploaded",
    uploadedAt: "20 Jun 2026",
  },
  {
    id: "business-registration",
    title: "Business Registration",
    description: "Certificate of Registration",
    status: "uploaded",
    uploadedAt: "20 Jun 2026",
  },
  {
    id: "proof-address",
    title: "Proof of Address",
    description: "Utility Bill or Bank Statement",
    status: "missing",
  },
];

export default function KycPage() {
  return (
    <Box sx={{py:6}}>
      <OnboardingCard>
        <Stack spacing={4}>
          <Box>
            <Typography
              variant="h4"
              sx={{fontWeight:700}}
            >
              Business Verification
            </Typography>

            <Typography
              color="text.secondary"
              sx={{mt:1}}
            >
              Upload the required documents to verify your
              business. You can replace documents before
              submitting your application.
            </Typography>
          </Box>

          <DocumentManager
            documents={documents}
            onUpload={(documentId) => {
              console.log("Upload:", documentId);
            }}
          />

          <StepNavigation
            backLabel="Back"
            nextLabel="Continue"
          />
        </Stack>
      </OnboardingCard>
    </Box>
  );
}