import localFont from 'next/font/local';
import '../../../../app/globals.css';
import './full.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const geist = localFont({
  src: '../../../2026-10-08_visual-direction/mockups/assets/geist-latin.woff2',
  display: 'swap',
  variable: '--font-geist-sans',
});

export const metadata = {
  title: 'Razim Manzoor · Editorial design preview',
  robots: { index: false, follow: false },
};

export default function Layout({ children }) {
  return <html lang="en" className={geist.variable} suppressHydrationWarning><body><ThemeProvider attribute="class" defaultTheme="light" enableSystem>{children}</ThemeProvider></body></html>;
}
