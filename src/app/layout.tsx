// This root layout is necessary for the App Router to function.
// However, with next-intl, the primary HTML structure (<html>, <body>)
// is typically defined in src/app/[locale]/layout.tsx.
// This root layout simply passes through its children.

import type { ReactNode } from 'react';

// Remove metadata export from here, as it's handled by the localized layout
// export const metadata: Metadata = {
//   title: 'Kitchener Smiles Dental',
//   description: 'Family and Cosmetic Dentistry in Kitchener, ON.',
// };

// Remove globals.css import from here, as it's handled by the localized layout
// import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
