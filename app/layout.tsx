import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./illustrations.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Razim Manzoor | Websites, Apps, AI & Automation",
  description: "Websites, applications, AI tools, automation, and dashboards built around business needs. Razim Manzoor, MBA in Data Science & Analytics, based in Dubai.",
  keywords: [
    "Business Analyst Dubai",
    "Full Stack Developer Dubai",
    "AI Automation Engineer UAE",
    "Data Analyst Dubai",
    "Systems Analyst UAE",
    "Power BI Specialist",
    "Razim Manzoor",
  ],
  authors: [{ name: "Razim Manzoor", url: "https://www.razim.work" }],
  metadataBase: new URL("https://www.razim.work"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Razim Manzoor | Websites, Apps, AI & Automation",
    description: "Business understanding and hands-on development. Explore services, experience, and ways to work together.",
    url: "https://www.razim.work",
    siteName: "Razim Manzoor Portfolio",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Razim Manzoor | Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Razim Manzoor | Websites, Apps, AI & Automation",
    description: "Business understanding and hands-on development. Explore services, experience, and ways to work together.",
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
