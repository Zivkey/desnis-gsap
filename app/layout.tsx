import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://desnis.studio"),
  title: {
    default: "Desnis — Vibecoded websites that push brands to the next level",
    template: "%s",
  },
  description:
    "Desnis is a vibecoding studio building ultra-modern Next.js websites with deep custom logic, backend and auth integrations. Faster than WordPress, cheaper than custom, more powerful than Webflow.",
  keywords: [
    "vibecoding",
    "Next.js agency",
    "web studio Belgrade",
    "AI-native web development",
    "custom web development",
    "Webflow alternative",
    "Next.js development",
    "GSAP animation studio",
  ],
  authors: [{ name: "Desnis Studio" }],
  creator: "Desnis Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://desnis.studio",
    siteName: "Desnis",
    title: "Desnis — Vibecoded websites, next level.",
    description:
      "A vibecoding studio building ultra-modern Next.js websites with backend, auth, and custom integrations. Belgrade → worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desnis — Vibecoded websites, next level.",
    description:
      "A vibecoding studio building ultra-modern Next.js websites with backend, auth, and custom integrations.",
    creator: "@desnis_studio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-black">
        <div className="grain" aria-hidden />
        <Cursor />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
