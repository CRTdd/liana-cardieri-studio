import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'pt', 'pl'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  // Skip initial /api, /_next, specific file paths
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|documents).*)']
};