"use client";

import Link from "next/link";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const faqs = [
  {
    question: "How do I get access to the BuildFast API?",
    answer:
      "Create a BuildFast account and you'll immediately receive access to the Sandbox environment. To obtain Production API credentials, submit your business for verification. Once approved, Production API keys become available from your dashboard.",
  },
  {
    question: "Can I start integrating before my business is verified?",
    answer:
      "Yes. Every developer receives Sandbox access immediately after registration. You can build, test, and simulate collections, payouts, and webhooks before requesting Production access.",
  },
  {
    question: "Which payment methods does BuildFast support?",
    answer:
      "BuildFast supports MTN Mobile Money and Orange Money for collections and payouts. Additional payment methods may be introduced in future releases.",
  },
  {
    question: "How long does merchant verification take?",
    answer:
      "Verification time depends on the completeness of your submitted documents and business information. Most applications are reviewed within one to three business days.",
  },
  {
    question: "Can I whitelist IP addresses?",
    answer:
      "Yes. For additional security, you can configure IP address whitelisting from your merchant dashboard so that only trusted servers can access your Production API.",
  },
  {
    question: "Can I whitelist phone numbers for payouts?",
    answer:
      "Yes. You can maintain approved phone number lists for collections and payouts, helping you control which numbers are permitted to receive or send funds through your applications.",
  },
  {
    question: "How are API keys managed?",
    answer:
      "Each application has separate Sandbox and Production API credentials. You can generate, rotate, and revoke keys directly from the BuildFast dashboard whenever necessary.",
  },
  {
    question: "How do I contact technical support?",
    answer:
      "You can submit a support request through this contact page or reach us using the available support channels. Include your application ID and request details so our engineering team can assist you quickly.",
  },
];

export default function FAQSection() {
  return (
    <Box
      component="section"
      sx={{
        py: {
          xs: 8,
          md: 12,
        },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="md">
        <Stack
          spacing={2}
          sx={{
             alignItems: "center",
          textAlign: "center",
          mb: 6
          }}
        >
          <Chip
            icon={<HelpOutlineRoundedIcon />}
            label="Frequently Asked Questions"
            color="primary"
            sx={{
              borderRadius: 20,
              fontWeight: 600,
            }}
          />

          <Typography
            variant="h3"
            sx={{
                fontWeight: 800,
              fontSize: {
                xs: "2rem",
                md: "2.8rem",
              },
            }}
          >
            Answers to common questions
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 700,
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            Everything you need to know about merchant onboarding,
            API access, verification, and integrating BuildFast into
            your applications.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.question}
              defaultExpanded={index === 0}
              disableGutters
              elevation={0}
              sx={{
                border: "1px solid",
                borderColor: "divider",
                borderRadius: "16px !important",
                bgcolor: "background.paper",

                "&:before": {
                  display: "none",
                },

                transition: ".25s",

                "&:hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreRoundedIcon color="primary" />
                }
              >
                <Typography
                  sx={{
                    fontWeight: 700
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.9,
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>

        <Stack
          spacing={2}
        sx={{
              alignItems: "center",
          textAlign: "center",
          mt: 8
        }}
        >
          <Typography
            variant="h5"
            sx={{
                fontWeight: 700
            }}
          >
            Still have questions?
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 550,
            }}
          >
            Our sales and technical teams are available to help you
            integrate BuildFast successfully.
          </Typography>

          <Button
            component={Link}
            href="/contact"
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              mt: 2,
              px: 4,
              height: 54,
              borderRadius: 3,
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            Contact Our Team
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}