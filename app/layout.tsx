import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from 'next/font/google';

import { ClientProviders } from "@/providers/ThemeProvider";
import MarkettingLayout from "@/components/layout/MarkettingLayout";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto', // Creates a CSS variable name
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuildFast",
  description: "Mobile money and Orange Money payment Aggregator in Cameroon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={geistSans.variable}
      // className={roboto.variable}
    >
      <body style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
        <ClientProviders>
          <MarkettingLayout>
          {children}
          </MarkettingLayout>
        </ClientProviders>
      </body>
    </html>
  );
}