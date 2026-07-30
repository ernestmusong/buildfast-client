export interface Application {
  id: string;
  name: string;
  description: string;
  environment: "sandbox" | "production";
   createdAt: string
      icon?: any
      color: any
       status?: string

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