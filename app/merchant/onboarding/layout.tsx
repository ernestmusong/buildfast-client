import { ReactNode } from "react";
import { ClientProviders } from "@/providers/providers";

import OnboardingLayout from "@/components/dashboard/onboarding/OnboardingLayout";


import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto', // Creates a CSS variable name
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Merchant Onbaording",
};


interface DashboardLayoutProps {
  children: ReactNode;
}

export default function Layout({children}: DashboardLayoutProps) {
  return (
    <html
      lang="en"
      className={roboto.variable}
    >
      <body style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <ClientProviders>
         <OnboardingLayout children={children} />
        </ClientProviders>
      </body>
    </html>
  );
}