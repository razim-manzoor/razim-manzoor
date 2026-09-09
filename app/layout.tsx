import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Razim Manzoor | MBA AI Strategist & Business Analyst",
  description: "Portfolio of Razim Manzoor - Bridging business strategy and AI implementation for operational excellence, automation, and GenAI solutions in Dubai and the UAE.",
  keywords: ["Business Analyst Dubai", "Business Analyst UAE", "AI Strategist UAE", "Power Automate Expert Dubai", "Operational Excellence", "GenAI Consultant UAE", "Razim Manzoor"],
  authors: [{ name: "Razim Manzoor", url: "https://razim-manzoor.github.io/razim-manzoor/" }],
  metadataBase: new URL("https://razim-manzoor.github.io/razim-manzoor/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Razim Manzoor | MBA AI Strategist",
    description: "Bridging Business Strategy and AI Implementation.",
    url: "https://razim-manzoor.github.io/razim-manzoor/",
    siteName: "Razim Manzoor Portfolio",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Razim Manzoor | AI Strategy & Operations Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Razim Manzoor | MBA AI Strategist",
    description: "Bridging Business Strategy and AI Implementation.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
