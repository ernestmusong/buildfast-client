import { ProductData } from "@/types/product";

export const collectionsData: ProductData = {
  slug: "collections",

  seoTitle:
    "MTN Mobile Money API Cameroon | Orange Money API Cameroon",

  seoDescription:
    "Collect Mobile Money payments using MTN Mobile Money and Orange Money APIs.",

  keywords: [
    "MTN Mobile Money API Cameroon",
    "Orange Money API Cameroon",
    "Collect Mobile Money Payments",
  ],

  badge: "Collections API",

  heroTitle:
    "Collect Mobile Money Payments with a Single API",

  heroDescription:
    "Accept MTN Mobile Money and Orange Money payments from customers across Cameroon.",

  features: [
    {
      title: "Instant Collections",
      description:
        "Receive customer payments instantly.",
    },
    {
      title: "Webhooks",
      description:
        "Get notified when payments succeed.",
    },
    {
      title: "Verification",
      description:
        "Verify every transaction securely.",
    },
    {
      title: "Single Integration",
      description:
        "One API for MTN and Orange.",
    },
  ],

  flowSteps: [
    { label: "Customer" },
    { label: "BuildFast API" },
    { label: "MTN / Orange" },
    { label: "Merchant" },
  ],

  apiExample: {
    title: "Collection Request",
    language: "json",
    code: `{
  "amount": 5000,
  "currency": "XAF",
  "phone": "677123456"
}`,
  },

  useCases: [
    "E-commerce",
    "Schools",
    "NGOs",
    "Subscriptions",
    "Utilities",
  ],

  ctaTitle:
    "Start Collecting Mobile Money Payments",

  ctaDescription:
    "Launch MTN and Orange Money collections today.",
};