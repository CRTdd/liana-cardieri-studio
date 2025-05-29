
"use client";

import Link from 'next/link'; // Using Next.js's default Link
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'; // Using Next.js's usePathname for non-locale path
import { useLocale, useTranslations } from 'next-intl'; // For translations and current locale

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Languages, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const appLanguages = [
  { code: 'en', labelKey: 'Header.selectedLanguage', nativeLabel: 'English' },
  { code: 'pt', labelKey: 'Header.selectedLanguage', nativeLabel: 'Português' }, // Assuming a key for Portuguese if needed
  { code: 'pl', labelKey: 'Header.selectedLanguage', nativeLabel: 'Polski' },   // Assuming a key for Polish if needed
];

// Function to set a cookie
const setLanguageCookie = (locale: string) => {
  if (typeof document !== 'undefined') {
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`; // Max age 1 year
  }
};

export default function Header() {
  const t = useTranslations('Navigation');
  const tHeader = useTranslations('Header');
  const currentLocale = useLocale();
  const currentFullPath = usePathname() || '/'; 
  const router = useRouter();

  const currentSelectedLanguage = appLanguages.find(lang => lang.code === currentLocale) || appLanguages[0];

  const navItems = [
    { href: '/', labelKey: 'home' },
    { href: '/about', labelKey: 'about' },
    { href: '/services', labelKey: 'services' },
    { href: '/testimonials', labelKey: 'testimonials' },
    { href: '/#contact', labelKey: 'contact' },
  ];
  
  const getLocalizedPath = (targetLocale: string) => {
    let pathSegment = currentFullPath;

    // Remove current locale prefix if it exists
    const localePrefix = `/${currentLocale}`;
    if (pathSegment.startsWith(localePrefix)) {
      pathSegment = pathSegment.substring(localePrefix.length);
      if (pathSegment === "") {
        pathSegment = "/"; // Ensure root path is handled correctly
      }
    }
    
    // Ensure pathSegment starts with a slash if it's not just "/"
    if (pathSegment !== "/" && !pathSegment.startsWith("/")) {
      pathSegment = `/${pathSegment}`;
    }
    
    // For the root path, just return the target locale prefix
    if (pathSegment === "/") {
      return `/${targetLocale}`;
    }
    // For other paths, prepend the target locale to the unlocalized segment
    return `/${targetLocale}${pathSegment}`;
  };
  
  const handleLanguageChange = (newLocale: string) => {
    setLanguageCookie(newLocale);
    const newPath = getLocalizedPath(newLocale);
    router.push(newPath);
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 text-primary hover:text-brand-blue transition-colors">
          <Image
            src="https://placehold.co/40x40.png" 
            alt={tHeader('brandName')} // Use translated brand name for alt text
            width={40}
            height={40}
            className="h-10 w-10"
            data-ai-hint="dental logo"
          />
          <span className="font-bold text-xl">{tHeader('brandName')}</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.labelKey}
              href={item.href} 
              className="transition-colors hover:text-primary text-foreground/80"
            >
              {t(item.labelKey as any)}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 text-foreground/80 hover:text-primary">
                <Languages className="h-5 w-5" />
                <span>{currentSelectedLanguage.nativeLabel}</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {appLanguages.map((lang) => (
                <DropdownMenuItem key={lang.code} onSelect={() => handleLanguageChange(lang.code)} className="cursor-pointer">
                    {lang.nativeLabel}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

           <Button asChild className="bg-brand-pink hover:bg-pink-700 text-white transition-all duration-300 transform hover:scale-105">
            <a href="tel:519-578-5717">{tHeader('callNow')}</a>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <nav className="flex flex-col space-y-4 pt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.labelKey}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary text-foreground/80 px-2"
                  >
                    {t(item.labelKey as any)}
                  </Link>
                ))}
                <div className="px-2">
                   <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-start flex items-center space-x-2 text-foreground/80 hover:text-primary">
                        <Languages className="h-5 w-5" />
                        <span>{currentSelectedLanguage.nativeLabel}</span>
                        <ChevronDown className="h-4 w-4 opacity-50 ml-auto" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[calc(300px-1rem-theme(spacing.2))] sm:w-[calc(400px-1rem-theme(spacing.2))]">
                      {appLanguages.map((lang) => (
                        <DropdownMenuItem key={lang.code} onSelect={() => handleLanguageChange(lang.code)} className="cursor-pointer">
                            {lang.nativeLabel}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="px-2">
                  <Button asChild size="lg" className="w-full bg-brand-pink hover:bg-pink-700 text-white transition-all duration-300 transform hover:scale-105">
                    <a href="tel:519-578-5717">{tHeader('callNow')}</a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
