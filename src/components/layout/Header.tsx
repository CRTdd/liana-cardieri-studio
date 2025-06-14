"use client";

import Link from 'next/link'; // Using Next.js's default Link
import Image from 'next/image';
import { usePathname, useParams } from 'next/navigation'; // For non-locale path
import { useLocale, useTranslations } from 'next-intl'; // For translations and current locale
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Languages, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { servicesData } from '@/data/servicesData';

const appLanguages = [
  { code: 'en', nativeLabel: 'EN' },
  { code: 'pt', nativeLabel: 'PT' },
  { code: 'pl', nativeLabel: 'PL' },
];

// Function to set a cookie
const setLanguageCookie = (locale: string) => {
  if (typeof document !== 'undefined') {
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`; // Max age 1 year
  }
};

export default function Header() {
  const tNav = useTranslations('Navigation');
  const tHeader = useTranslations('Header');
  const t = useTranslations('Languages');
  const tServices = useTranslations('ServicesPage');
  const currentLocale = useLocale();
  const currentFullPath = usePathname() || '/'; // Fallback to '/'
  const locale = useParams().locale as string;
  const [isOpen, setIsOpen] = useState(false);

  const currentSelectedLanguage = appLanguages.find(lang => lang.code === currentLocale) || appLanguages[0];

  const getLanguageName = (code: string) => {
    let translated;
    switch(code) {
      case 'en': translated = t('english'); break;
      case 'pt': translated = t('portuguese'); break;
      case 'pl': translated = t('polish'); break;
      default: return code;
    }
    // Fallback if translation returns the key or is missing
    if (!translated || translated.startsWith('Languages.')) {
      switch(code) {
        case 'en': return 'English';
        case 'pt': return 'Português';
        case 'pl': return 'Polski';
        default: return code;
      }
    }
    return translated;
  };

  const navItems = [
    { href: '/', labelKey: 'home' },
    { href: '/about', labelKey: 'about' },
    { href: '/services', labelKey: 'services', hasDropdown: true },
    { href: '/info', labelKey: 'info', hasDropdown: true },
    { href: '/testimonials', labelKey: 'testimonials' },
    { href: '/#contact', labelKey: 'contact' },
  ];
  
  const getLocalizedPath = (targetLocale: string) => {
    let pathWithoutLocale = currentFullPath;

    // Remove current locale prefix if it exists
    const localePrefix = `/${currentLocale}`;
    if (pathWithoutLocale.startsWith(localePrefix)) {
      pathWithoutLocale = pathWithoutLocale.substring(localePrefix.length) || '/';
    }
    
    // Ensure pathWithoutLocale starts with a slash if it's not just "/"
    if (pathWithoutLocale !== "/" && !pathWithoutLocale.startsWith("/")) {
      pathWithoutLocale = `/${pathWithoutLocale}`;
    }
    
    // For the root path, just return the target locale prefix
    if (pathWithoutLocale === "/") {
      return `/${targetLocale}`;
    }
    // For other paths, prepend the target locale to the unlocalized segment
    return `/${targetLocale}${pathWithoutLocale}`;
  };

  const getLocalizedHref = (href: string) => {
    if (href.startsWith('/')) {
      return `/${locale}${href}`;
    }
    return href;
  };
  
  const handleLanguageChange = (newLocale: string) => {
    setLanguageCookie(newLocale);
    const newPath = getLocalizedPath(newLocale);
    // Standard Next.js router push, as Link component will handle full page reload for locale change
    window.location.href = newPath;
  };

  const isActive = (path: string) => {
    return currentFullPath === path;
  };

  const serviceLinks = servicesData.map(service => ({
    href: service.learnMoreLink.replace('[locale]', locale),
    label: tServices(`service.${service.id}.title`),
  }));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex min-h-[64px] max-w-screen-2xl items-center justify-between px-6 sm:px-10 lg:px-16 mx-auto">
        <Link href={`/${locale}`} className="flex items-center gap-x-3 text-primary hover:text-brand-blue transition-colors">
          <Image
            src="https://placehold.co/40x40.png"
            alt={tHeader('brandName')}
            width={40}
            height={40}
            className="block"
            data-ai-hint="dental logo"
          />
          <span className="font-bold text-2xl flex items-center leading-none">{tHeader('brandName')}</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-x-4 text-sm font-medium">
          {navItems.map((item) => (
            item.hasDropdown ? (
              <DropdownMenu key={item.labelKey}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1 text-foreground/80 hover:text-primary h-10 leading-none" size='ghost'>
                    <span>{tNav(item.labelKey as any)}</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[200px]">
                  {item.labelKey === 'services' ? (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href={`/${locale}${item.href}`} className="cursor-pointer font-medium">
                          {tNav('allServices')}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {serviceLinks.map((service) => (
                        <DropdownMenuItem key={service.href} asChild>
                          <Link href={service.href} className="cursor-pointer">
                            {service.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </>
                  ) : item.labelKey === 'info' ? (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href={`/${locale}/financial`} className="cursor-pointer">
                          {tNav('financialInfo')}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/${locale}/health`} className="cursor-pointer">
                          {tNav('healthInfo')}
                        </Link>
                      </DropdownMenuItem>
                    </>
                  ) : null}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.labelKey}
                href={`/${locale}${item.href}`}
                className="transition-colors hover:text-primary text-foreground/80 flex items-center h-10 leading-none"
              >
                {tNav(item.labelKey as any)}
              </Link>
            )
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 text-foreground/80 hover:text-primary h-10 leading-none">
                <Languages className="h-5 w-5" />
                <span>{currentSelectedLanguage.nativeLabel}</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {appLanguages.map((lang) => (
                <DropdownMenuItem key={lang.code} onSelect={() => handleLanguageChange(lang.code)} className="cursor-pointer">
                    {getLanguageName(lang.code)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

           <Button asChild className="hidden xl:flex bg-brand-pink hover:bg-pink-700 text-white transition-all duration-300 transform hover:scale-105 h-10 items-center px-5 leading-none">
            <a href="tel:519-578-5717" className="flex items-center h-10 leading-none">{tHeader('callNow')}</a>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <nav className="flex flex-col space-y-4 pt-8">
                {navItems.map((item) => (
                  item.hasDropdown ? (
                    <div key={item.labelKey} className="space-y-2">
                      <Link
                        href={getLocalizedHref(item.href)}
                        className="text-lg font-medium transition-colors hover:text-primary text-foreground/80 px-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {tNav(item.labelKey as any)}
                      </Link>
                      <div className="pl-4 space-y-2">
                        {item.labelKey === 'services' ? (
                          <>
                            <Link
                              href={getLocalizedHref(item.href)}
                              className="block text-base font-medium transition-colors hover:text-primary text-foreground/80 px-2"
                              onClick={() => setIsOpen(false)}
                            >
                              {tNav('allServices')}
                            </Link>
                            {servicesData.map((service) => (
                              <Link
                                key={service.id}
                                href={service.learnMoreLink.replace('[locale]', locale)}
                                className="block text-base transition-colors hover:text-primary text-foreground/80 px-2"
                                onClick={() => setIsOpen(false)}
                              >
                                {tServices(`service.${service.id}.title`)}
                              </Link>
                            ))}
                          </>
                        ) : item.labelKey === 'info' ? (
                          <>
                            <Link
                              href={`/${locale}/financial`}
                              className="block text-base transition-colors hover:text-primary text-foreground/80 px-2"
                              onClick={() => setIsOpen(false)}
                            >
                              {tNav('financialInfo')}
                            </Link>
                            <Link
                              href={`/${locale}/health`}
                              className="block text-base transition-colors hover:text-primary text-foreground/80 px-2"
                              onClick={() => setIsOpen(false)}
                            >
                              {tNav('healthInfo')}
                            </Link>
                          </>
                        ) : null}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.labelKey}
                      href={getLocalizedHref(item.href)}
                      className="text-lg font-medium transition-colors hover:text-primary text-foreground/80 px-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {tNav(item.labelKey as any)}
                    </Link>
                  )
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
                            {getLanguageName(lang.code)}
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

