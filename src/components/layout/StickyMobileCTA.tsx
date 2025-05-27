"use client";

import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 60) { // if scroll down hide the navbar
          setIsVisible(false);
        } else { // if scroll up show the navbar
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY); 
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 h-16 bg-brand-blue text-white flex md:hidden items-stretch shadow-lg transition-transform duration-300 ease-in-out z-40 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <Button
        asChild
        variant="ghost"
        className="flex-1 rounded-none text-base h-full px-2 bg-brand-blue hover:bg-brand-pink transition-colors duration-300"
      >
        <a href="tel:519-578-5717" className="flex items-center justify-center">
          <Phone className="mr-2 h-5 w-5" />
          Call Now
        </a>
      </Button>
      <div className="w-px bg-white/20"></div> {/* Separator */}
      <Button
        asChild
        variant="ghost"
        className="flex-1 rounded-none text-base h-full px-2 bg-brand-blue hover:bg-brand-pink transition-colors duration-300"
      >
        <Link href="/#contact" className="flex items-center justify-center">
          <MessageCircle className="mr-2 h-5 w-5" />
          Contact Us
        </Link>
      </Button>
    </div>
  );
}
