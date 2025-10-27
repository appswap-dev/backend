import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AppSwap - The Developer & QA Browser",
  description: "Transform your testing workflow with AppSwap. Test multiple app versions simultaneously, switch between environments instantly, and save 80% of your testing time.",
  metadataBase: new URL('https://appswap.dev'),
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/appswap.png',
  },
  openGraph: {
    title: "AppSwap - The Developer & QA Browser",
    description: "Transform your testing workflow with AppSwap. Test multiple app versions simultaneously, switch between environments instantly, and save 80% of your testing time.",
    url: 'https://appswap.dev',
    siteName: 'AppSwap',
    images: [
      {
        url: '/appswap.png',
        width: 512,
        height: 512,
        alt: 'AppSwap - The Developer & QA Browser',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AppSwap - The Developer & QA Browser",
    description: "Transform your testing workflow with AppSwap. Test multiple app versions simultaneously, switch between environments instantly, and save 80% of your testing time.",
    images: ['/appswap.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
