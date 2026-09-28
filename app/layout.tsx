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
  title: "Razim Manzoor | AI Solutions Architect & Business Strategist",
  description: "Portfolio and Client Services of Razim Manzoor - MBA-trained AI Solutions Architect building enterprise AI assistants, high-performance web platforms, and automated workflow pipelines in Dubai and worldwide.",
  keywords: ["AI Solutions Architect Dubai", "Business Analyst Dubai", "AI Strategist UAE", "Next.js Web Developer", "n8n Make Automation", "GenAI Consultant UAE", "Razim Manzoor"],
  authors: [{ name: "Razim Manzoor", url: "https://razim-manzoor.github.io/razim-manzoor/" }],
  metadataBase: new URL("https://razim-manzoor.github.io/razim-manzoor/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Razim Manzoor | AI Solutions Architect & Business Strategist",
    description: "Enterprise AI systems, turnkey web platforms, and automated workflow pipelines.",
    url: "https://razim-manzoor.github.io/razim-manzoor/",
    siteName: "Razim Manzoor Portfolio & Services",
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
    title: "Razim Manzoor | AI Solutions Architect & Business Strategist",
    description: "Enterprise AI systems, turnkey web platforms, and automated workflow pipelines.",
    images: ["/opengraph-image"],
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
