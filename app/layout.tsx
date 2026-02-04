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
  description: "Portfolio of Razim Manzoor - Bridging Business Strategy and AI Implementation. Specialized in Operational Excellence, Power Automate, and GenAI Solutions in Dubai.",
  keywords: ["Business Analyst Dubai", "AI Strategist", "Power Automate Expert", "Operational Excellence", "GenAI Consultant", "Razim Manzoor"],
  authors: [{ name: "Razim Manzoor", url: "https://razim-manzoor.github.io/razim-manzoor/" }],
  metadataBase: new URL("https://razim-manzoor.github.io/razim-manzoor/"),
  openGraph: {
    title: "Razim Manzoor | MBA AI Strategist",
    description: "Bridging Business Strategy and AI Implementation.",
    url: "https://razim-manzoor.github.io/razim-manzoor/",
    siteName: "Razim Manzoor Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Razim Manzoor | MBA AI Strategist",
    description: "Bridging Business Strategy and AI Implementation.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
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
