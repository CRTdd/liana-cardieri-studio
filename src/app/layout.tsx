import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from '@/components/layout/Providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { AiAssistantWidget } from '@/components/AiAssistantWidget';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Kitchener Smiles - Dr. Liana Cardieri Family & Cosmetic Dentistry',
  description: 'Gentle, expert family and cosmetic dentistry in Kitchener, ON. Services in English, Portuguese, and Polish. Call 519-578-5717.',
  keywords: 'dentist Kitchener, cosmetic dentistry, family dentistry, Dr. Liana Cardieri, Kitchener dentist, Portuguese dentist, Polish dentist',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Providers>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <StickyMobileCTA />
          <AiAssistantWidget />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
