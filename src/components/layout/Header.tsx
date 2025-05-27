
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Smile, Languages, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/#contact', label: 'Contact' }, // Link to contact section on homepage
];

const languages = [
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
  { code: 'pl', label: 'Polski' },
];

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  // Placeholder function for language change
  const handleLanguageChange = (langCode: string) => {
    const lang = languages.find(l => l.code === langCode);
    if (lang) {
      setSelectedLanguage(lang);
      // Here you would typically integrate with Next.js i18n to change the actual site language
      console.log(`Language changed to: ${lang.label}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 text-primary hover:text-brand-blue transition-colors">
          <Smile className="h-8 w-8" />
          <span className="font-bold text-xl">Kitchener Smiles</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-primary text-foreground/80"
            >
              {item.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 text-foreground/80 hover:text-primary">
                <Languages className="h-5 w-5" />
                <span>{selectedLanguage.label}</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

           <Button asChild className="bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
            <a href="tel:519-578-5717">Call Now: 519-578-5717</a>
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
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary text-foreground/80 px-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-2">
                   <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-start flex items-center space-x-2 text-foreground/80 hover:text-primary">
                        <Languages className="h-5 w-5" />
                        <span>{selectedLanguage.label}</span>
                        <ChevronDown className="h-4 w-4 opacity-50 ml-auto" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[calc(300px-1rem-theme(spacing.2))] sm:w-[calc(400px-1rem-theme(spacing.2))]">
                      {languages.map((lang) => (
                        <DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
                          {lang.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="px-2">
                  <Button asChild size="lg" className="w-full bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
                    <a href="tel:519-578-5717">Call Now: 519-578-5717</a>
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
