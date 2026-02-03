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
  title: "Razim Manzoor | Business Analyst & AI Strategist",
  description: "Portfolio of Razim Manzoor - Operational Excellence Analyst and AI Strategist.",
  metadataBase: new URL("https://razim-manzoor.github.io/razim-manzoor/"), // Replace with actual domain if different
  openGraph: {
    title: "Razim Manzoor | Business Analyst & AI Strategist",
    description: "Operational Excellence Analyst and AI Strategist.",
    url: "https://razim-manzoor.github.io/razim-manzoor/",
    siteName: "Razim Manzoor Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Razim Manzoor | Business Analyst & AI Strategist",
    description: "Operational Excellence Analyst and AI Strategist.",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

// ... existing imports

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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
