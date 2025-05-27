import type { Metadata } from 'next';
import './globals.css'; // Ensure global styles are imported if needed at the root

// This metadata can be very generic or removed if all metadata is handled by [locale]/layout.tsx
export const metadata: Metadata = {
  title: 'Kitchener Smiles Dental',
  description: 'Family and Cosmetic Dentistry in Kitchener, ON.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This layout is extremely simple. The main structure, including lang attribute and providers,
  // is handled by src/app/[locale]/layout.tsx.
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
