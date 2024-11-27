import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { AnimatedTitle } from '@/components/ui/animated-title';
import { ParticlesBackground } from '@/components/ui/particles-background';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PlentifulPower.xyz - Unleash Your Potential',
  description: 'Experience the next generation of power optimization',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ParticlesBackground />
          <AnimatedTitle />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}