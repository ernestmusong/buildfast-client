// components/onboarding/DocumentManager.tsx

"use client";

import {
  Box,
  Button,
  Card,
  Chip,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import DescriptionIcon from "@mui/icons-material/Description";

export type DocumentStatus =
  | "uploaded"
  | "missing"
  | "pending";

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  status: DocumentStatus;
  uploadedAt?: string;
}

interface DocumentManagerProps {
  documents: DocumentItem[];
  onUpload?: (documentId: string) => void;
}

export default function DocumentManager({
  documents,
  onUpload,
}: DocumentManagerProps) {
  const uploadedCount = documents.filter(
    (doc) => doc.status === "uploaded"
  ).length;

  const progress =
    (uploadedCount / documents.length) * 100;

  return (
    <Stack spacing={3}>
      {/* Header */}
      <Card
        variant="outlined"
        sx={{
          p: 3,
          borderRadius: 3,
        }}
      >
        <Stack spacing={2}>
          <Typography
            variant="h6"
            sx={{fontWeight:700}}
          >
            Verification Documents
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Upload all required documents to
            complete your merchant verification.
          </Typography>

          <Box>
            <Stack
              direction="row"
              
              sx={{
                justifyContent:"space-between",
              mb:1
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Progress
              </Typography>

              <Typography
                variant="body2"
               sx={{fontWeight:600}}
              >
                {uploadedCount}/{documents.length}
                {" "}
                Uploaded
              </Typography>
            </Stack>

            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 10,
                borderRadius: 5,
              }}
            />
          </Box>
        </Stack>
      </Card>

      {/* Documents */}
      {documents.map((document) => (
        <Card
          key={document.id}
          variant="outlined"
          sx={{
            borderRadius: 3,
          }}
        >
          <Box sx={{p:3}}>
            <Stack
              direction={{
                xs: "column",
                md: "row",
              }}
              sx={{

                  justifyContent:"space-between",
                  alignItems:{
                    xs: "flex-start",
                    md: "center",
                  }
              }}
              spacing={3}
            >
              {/* Left */}
              <Stack
                direction="row"
                spacing={2}
                sx={{alignItems:"center"}}
                
              >
                <DescriptionIcon
                  color="primary"
                />

                <Box>
                  <Typography
                    sx={{fontWeight:700}}
                  >
                    {document.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {document.description}
                  </Typography>

                  {document.uploadedAt && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      Uploaded on{" "}
                      {document.uploadedAt}
                    </Typography>
                  )}
                </Box>
              </Stack>

              {/* Right */}
              <Stack
                direction="row"
                spacing={2}
                sx={{alignItems:"center"}}
              >
                {document.status ===
                  "uploaded" && (
                  <Chip
                    icon={
                      <CheckCircleIcon />
                    }
                    label="Uploaded"
                    color="success"
                  />
                )}

                {document.status ===
                  "pending" && (
                  <Chip
                    icon={
                      <WarningAmberIcon />
                    }
                    label="Under Review"
                    color="warning"
                  />
                )}

                {document.status ===
                  "missing" && (
                  <Chip
                    icon={
                      <WarningAmberIcon />
                    }
                    label="Missing"
                    color="error"
                  />
                )}

                <Button
                  variant={
                    document.status ===
                    "uploaded"
                      ? "outlined"
                      : "contained"
                  }
                  startIcon={
                    <UploadFileIcon />
                  }
                  onClick={() =>
                    onUpload?.(document.id)
                  }
                >
                  {document.status ===
                  "uploaded"
                    ? "Replace"
                    : "Upload"}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Card>
      ))}
    </Stack>
  );
}