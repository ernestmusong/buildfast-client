import { ProductData } from "@/types/products/product";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export const collectionsData: ProductData = {
  slug: "collections",

  seoTitle:
    "MTN Mobile Money API Cameroon | Orange Money API Cameroon",

  seoDescription:
    "Collect payments in Cameroon using MTN Mobile Money and Orange Money APIs.",

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
        icon: PaymentsOutlinedIcon
    },
    {
      title: "Webhooks",
      description:
        "Get notified when payments succeed.",
        icon: NotificationsNoneOutlinedIcon
    },
    {
      title: "Verification",
      description:
        "Verify every transaction securely.",
        icon: PaymentsOutlinedIcon,
    },
    {
      title: "Single Integration",
      description:
        "One API for MTN and Orange.",
        icon: PaymentsOutlinedIcon
    },
  ],

  flowSteps: [
    { label: "how collections work" },
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