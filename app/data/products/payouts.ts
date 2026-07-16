import { ProductData } from "@/types/products/product";

export const payoutsData: ProductData = {
  slug: "payouts",

  seoTitle:
    "Mobile Money Payout API Cameroon",

  seoDescription:
    "Send MTN Mobile Money and Orange Money payouts instantly.",

  keywords: [
    "Mobile Money Payout API",
    "Bulk Payouts Cameroon",
    "MTN Mobile Money Transfer API",
  ],

  badge: "Payouts API",

  heroTitle:
    "Send Mobile Money Payouts at Scale",

  heroDescription:
    "Automate supplier payments, refunds and merchant settlements.",

  features: [
    {
      title: "Bulk Transfers",
      description:
        "Send thousands of payouts.",
    },
    {
      title: "Instant Disbursements",
      description:
        "Deliver funds instantly.",
    },
  ],

  flowSteps: [
    { label: "how payouts work" },
    { label: "Merchant" },
    { label: "BuildFast API" },
    { label: "MTN / Orange" },
    { label: "Recipient" },
  ],

  apiExample: {
    title: "Payout Request",
    language: "json",
    code: `{
  "amount": 5000,
  "phone": "677123456"
}`,
  },

  useCases: [
    "Payroll",
    "Refunds",
    "Agent Networks",
  ],

  ctaTitle:
    "Automate Mobile Money Payouts",

  ctaDescription:
    "Launch payouts with a single integration.",
};