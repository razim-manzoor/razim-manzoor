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
  title: "Razim Manzoor | AI Solutions Architect & Systems Strategist",
  description: "Portfolio of Razim Manzoor. MBA in Data Science & Analytics bridging business strategy with production systems engineering. Architecting custom AI systems, automated workflow pipelines, and web platforms in Dubai.",
  keywords: ["AI Solutions Architect Dubai", "AI Strategist UAE", "Enterprise AI Specialist", "Workflow Automation n8n", "Next.js Developer Dubai", "Razim Manzoor"],
  authors: [{ name: "Razim Manzoor", url: "https://www.razim.work" }],
  metadataBase: new URL("https://www.razim.work"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Razim Manzoor | AI Solutions Architect & Systems Strategist",
    description: "AI solutions architecture, automated workflow pipelines, and high-performance web platforms.",
    url: "https://www.razim.work",
    siteName: "Razim Manzoor Portfolio",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Razim Manzoor | AI Solutions Architect Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Razim Manzoor | AI Solutions Architect & Systems Strategist",
    description: "AI solutions architecture, automated workflow pipelines, and high-performance web platforms.",
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
