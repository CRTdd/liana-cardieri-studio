
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Award, Users } from 'lucide-react'; // Placeholder icons
import { useEffect, useState } from 'react';

const TrustBadge = ({ Icon, text }: { Icon: React.ElementType; text: string }) => (
  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm p-3 rounded-lg shadow-md">
    <Icon className="h-10 w-10 text-brand-blue" /> {/* Updated size from h-8 w-8 */}
    <span className="text-sm font-medium text-foreground">{text}</span>
  </div>
);

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-brand-light-blue text-foreground px-4 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      >
        <Image
          src="https://placehold.co/1200x800.png"
          alt="Bright and modern dental office interior"
          data-ai-hint="dental office bright"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-light-blue via-brand-light-blue/50 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto py-20">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-foreground">
          Smile Confidently with Gentle, Expert Care from Dr. Liana Cardieri.
        </h1>
        <p className="mt-6 text-lg sm:text-xl font-light text-foreground/90">
          Family and cosmetic dentistry in Kitchener, ON, tailored to you.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="mt-10 bg-brand-blue hover:bg-brand-pink text-white text-lg py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-brand-pink/50"
          aria-label="Call to book appointment: 519-578-5717"
        >
          <a href="tel:519-578-5717">Call Now: 519-578-5717</a>
        </Button>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <TrustBadge Icon={Award} text="20+ Years Experience" />
          <TrustBadge Icon={Users} text="ODA Member" />
        </div>
        <p className="mt-8 text-sm font-light text-foreground/80 tracking-wide">
          Care in Your Language: English, Portuguese, Polish.
        </p>
      </div>
    </section>
  );
}
