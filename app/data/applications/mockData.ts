import { Application } from "@/types/application/aplication";

export const applications: Application[] = [
  {
    id: "app_01",
    name: "BuildFast Store",
    description:
      "Primary e-commerce application used to collect payments from customers.",

    environment: "production",

    balance: 8450000,
    availableBalance: 7825000,
    pendingBalance: 625000,

    acceptPayments: true,
    acceptPayouts: true,
    testMode: false,

    phoneWhitelist: [
      "+237670123456",
      "+237671987654",
    ],

    ipWhitelist: [
      "41.202.219.10",
      "41.202.219.11",
    ],

    allowedOrigins: [
      "https://store.buildfast.cm",
      "https://admin.buildfast.cm",
    ],

    successUrl:
      "https://store.buildfast.cm/payment/success",

    failureUrl:
      "https://store.buildfast.cm/payment/failed",

    cancelUrl:
      "https://store.buildfast.cm/payment/cancel",

    transactionWebhook:
      "https://store.buildfast.cm/api/webhooks/transactions",

    settlementWebhook:
      "https://store.buildfast.cm/api/webhooks/settlements",

    payoutWebhook:
      "https://store.buildfast.cm/api/webhooks/payouts",

    livePublicKey:
      "pk_live_bf_84f7ab5d09b145fd",

    liveSecretKey:
      "sk_live_bf_7d3be5a91c7841ef",

    testPublicKey:
      "pk_test_bf_2a1fd5642ef74b3a",

    testSecretKey:
      "sk_test_bf_5de8a1a7b2846fa2",
  },

  {
    id: "app_02",
    name: "BuildFast POS",

    description:
      "Point-of-sale application for physical retail stores.",

    environment: "production",

    balance: 3240000,
    availableBalance: 3025000,
    pendingBalance: 215000,

    acceptPayments: true,
    acceptPayouts: true,
    testMode: false,

    phoneWhitelist: [
      "+237675111111",
    ],

    ipWhitelist: [
      "196.216.200.20",
    ],

    allowedOrigins: [
      "https://pos.buildfast.cm",
    ],

    successUrl:
      "https://pos.buildfast.cm/payment/success",

    failureUrl:
      "https://pos.buildfast.cm/payment/failed",

    cancelUrl:
      "https://pos.buildfast.cm/payment/cancel",

    transactionWebhook:
      "https://pos.buildfast.cm/webhooks/transactions",

    settlementWebhook:
      "https://pos.buildfast.cm/webhooks/settlements",

    payoutWebhook:
      "https://pos.buildfast.cm/webhooks/payouts",

    livePublicKey:
      "pk_live_bf_a91284dcb7ef4100",

    liveSecretKey:
      "sk_live_bf_93ab16a54cd84701",

    testPublicKey:
      "pk_test_bf_74381afca5d54b77",

    testSecretKey:
      "sk_test_bf_18f2b42dca7142f8",
  },

  {
    id: "app_03",

    name: "Mobile App",

    description:
      "Android and iOS application for customer payments.",

    environment: "sandbox",

    balance: 0,
    availableBalance: 0,
    pendingBalance: 0,

    acceptPayments: true,
    acceptPayouts: false,
    testMode: true,

    phoneWhitelist: [],

    ipWhitelist: [],

    allowedOrigins: [
      "http://localhost:3000",
      "https://staging.buildfast.cm",
    ],

    successUrl:
      "https://staging.buildfast.cm/payment/success",

    failureUrl:
      "https://staging.buildfast.cm/payment/failed",

    cancelUrl:
      "https://staging.buildfast.cm/payment/cancel",

    transactionWebhook:
      "https://staging.buildfast.cm/api/webhooks/transactions",

    settlementWebhook:
      "https://staging.buildfast.cm/api/webhooks/settlements",

    payoutWebhook:
      "https://staging.buildfast.cm/api/webhooks/payouts",

    livePublicKey: "",

    liveSecretKey: "",

    testPublicKey:
      "pk_test_bf_42e1ab89d4f24611",

    testSecretKey:
      "sk_test_bf_07bc8e59f2d941dd",
  },

  {
    id: "app_04",

    name: "Donation Platform",

    description:
      "Collects donations and recurring contributions.",

    environment: "production",

    balance: 12650000,
    availableBalance: 11820000,
    pendingBalance: 830000,

    acceptPayments: true,
    acceptPayouts: false,
    testMode: false,

    phoneWhitelist: [
      "+237699888888",
      "+237655444444",
    ],

    ipWhitelist: [
      "102.176.48.10",
      "102.176.48.11",
    ],

    allowedOrigins: [
      "https://donate.buildfast.cm",
    ],

    successUrl:
      "https://donate.buildfast.cm/payment/success",

    failureUrl:
      "https://donate.buildfast.cm/payment/failed",

    cancelUrl:
      "https://donate.buildfast.cm/payment/cancel",

    transactionWebhook:
      "https://donate.buildfast.cm/webhooks/transactions",

    settlementWebhook:
      "https://donate.buildfast.cm/webhooks/settlements",

    payoutWebhook:
      "https://donate.buildfast.cm/webhooks/payouts",

    livePublicKey:
      "pk_live_bf_9012ab76dcae4d55",

    liveSecretKey:
      "sk_live_bf_11decb64af8842b0",

    testPublicKey:
      "pk_test_bf_9d2b8a78bc5e4722",

    testSecretKey:
      "sk_test_bf_4e82bc5da1e94d99",
  },
];