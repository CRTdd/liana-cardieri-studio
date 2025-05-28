
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../globals.css'; // Adjusted path
import { Toaster } from '@/components/ui/toaster';
import { Providers } from '@/components/layout/Providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { AiAssistantWidget } from '@/components/AiAssistantWidget';
import {NextIntlClientProvider, useMessages} from 'next-intl';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Dr. Liana Cardieri - Family & Cosmetic Dentistry',
  description: 'Gentle, expert family and cosmetic dentistry in Kitchener, ON, under the care of Dr. Liana Cardieri. Services in English, Portuguese, and Polish. Call 519-578-5717.',
  keywords: 'dentist Kitchener, cosmetic dentistry, family dentistry, Dr. Liana Cardieri, Kitchener dentist, Portuguese dentist, Polish dentist',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {locale: string};
}

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();

  return (
    <html lang={locale} className={montserrat.variable}>
      <body className="font-sans antialiased flex flex-col min-h-screen" suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

    