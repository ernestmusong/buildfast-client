import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from 'next/font/google';
import './globals.css'; // Your global styles

import { ClientProviders } from "./providers/providers"; // Import the wrapper
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

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
      className={roboto.variable}
    >
      <body style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>
        <ClientProviders>
          <Header />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}