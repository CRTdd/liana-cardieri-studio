// This root page is typically not rendered directly if next-intl middleware
// redirects all traffic to /[locale] paths.
// It can be a very minimal component or null.
export default function RootPage() {
  // Optionally, you could include a redirect here if needed,
  // but next-intl middleware should handle it.
  // For example, using `redirect` from `next/navigation`.
  // import { redirect } from 'next/navigation';
  // redirect('/en'); // or your default locale
  return null;
}
