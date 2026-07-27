export interface Application {
  id: string;
  name: string;
  description: string;
  environment: "sandbox" | "production";

  balance: number;
  availableBalance: number;
  pendingBalance: number;

  acceptPayments: boolean;
  acceptPayouts: boolean;
  testMode: boolean;

  phoneWhitelist: string[];
  ipWhitelist: string[];
  allowedOrigins: string[];

  successUrl?: string;
  failureUrl?: string;
  cancelUrl?: string;

  transactionWebhook?: string;
  settlementWebhook?: string;
  payoutWebhook?: string;

  livePublicKey: string;
  liveSecretKey: string;
  testPublicKey: string;
  testSecretKey: string;
}