"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Award } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

const TrustBadge = ({ Icon, text }: { Icon: React.ElementType; text: string }) => (
  <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-sm p-3 rounded-lg shadow-md">
    <Icon className="h-8 w-8 md:h-10 md:w-10 text-brand-blue" />
    <span className="text-sm font-medium text-foreground">{text}</span>
  </div>
);

const LanguagePill = ({ flag, name }: { flag: string; name: string }) => (
  <span className="inline-flex items-center bg-accent/20 text-primary text-sm font-medium px-4 py-2 rounded-full shadow-sm">
    <span className="mr-2">{flag}</span>
    {name}
  </span>
);

export default function HeroSection() {
  const t = useTranslations('HeroSection');
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      setOffsetY(window.pageYOffset);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center bg-brand-light-blue text-foreground px-4 overflow-hidden py-16 md:py-20">
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      >
        <Image
          src="https://www.cardieridental.ca/wp-content/uploads/2022/02/IMG_0713-scaled-e1644433296118-1140x417.jpg"
          alt={t('headline')}
          data-ai-hint="dental office bright"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
          className="opacity-20 md:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-light-blue via-brand-light-blue/70 to-transparent"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
              {t('headline')}
            </h1>
            <p className="mt-6 text-lg sm:text-xl font-light text-foreground/90 max-w-xl">
              {t('subheading')}
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 md:mt-10 bg-brand-pink hover:bg-brand-blue text-white text-lg py-4 px-10 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-brand-blue/50 w-full sm:w-auto md:w-auto"
              aria-label={t('ctaButton')}
            >
              <a href="tel:519-578-5717">{t('ctaButton')}</a>
            </Button>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <TrustBadge Icon={Award} text={t('trustBadgeExperience')} />
            </div>
            <div className="mt-8 text-center md:text-left">
              <p className="text-base font-light text-foreground/80 tracking-wide mb-3">
                {t('taglineIntro')}
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <LanguagePill flag="🇺🇸" name={t('languageEnglish')} />
                <LanguagePill flag="🇵🇹" name={t('languagePortuguese')} />
                <LanguagePill flag="🇵🇱" name={t('languagePolish')} />
              </div>
            </div>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-full max-w-lg h-auto aspect-[4/3] rounded-xl shadow-2xl overflow-hidden border-4 border-white/50">
              <Image
                src="https://placehold.co/600x450.png"
                alt={t('headline')} // Alt text can be same as main headline or more specific to this image's purpose
                data-ai-hint="modern dental clinic interior"
                layout="fill"
                objectFit="cover"
                quality={90}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
