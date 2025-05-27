"use client";

import Link from 'next-intl/link'; // Changed to next-intl Link
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Smile, Languages, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next-intl/client';


const appLanguages = [
  { code: 'en', labelKey: 'english', nativeLabel: 'English' },
  { code: 'pt', labelKey: 'portuguese', nativeLabel: 'Português' },
  { code: 'pl', labelKey: 'polish', nativeLabel: 'Polski' },
];

export default function Header() {
  const t = useTranslations('Navigation');
  const tHeader = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();

  const navItems = [
    { href: '/', labelKey: 'home' },
    { href: '/about', labelKey: 'about' },
    { href: '/services', labelKey: 'services' },
    { href: '/testimonials', labelKey: 'testimonials' },
    { href: '/#contact', labelKey: 'contact' },
  ];
  
  const currentSelectedLanguage = appLanguages.find(lang => lang.code === locale) || appLanguages[0];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" locale={locale} className="flex items-center space-x-2 text-primary hover:text-brand-blue transition-colors">
          <Smile className="h-8 w-8" />
          <span className="font-bold text-xl">Kitchener Smiles</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.labelKey}
              href={item.href}
              locale={locale} // Keep current locale for internal links unless it's a language switch
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
                <DropdownMenuItem key={lang.code} asChild>
                  <Link href={pathname} locale={lang.code} className="w-full">
                    {lang.nativeLabel}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

           <Button asChild className="bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
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
                    locale={locale}
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
                        <DropdownMenuItem key={lang.code} asChild>
                           <Link href={pathname} locale={lang.code} className="w-full">
                            {lang.nativeLabel}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="px-2">
                  <Button asChild size="lg" className="w-full bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
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
