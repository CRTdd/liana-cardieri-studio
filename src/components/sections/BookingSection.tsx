"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar'; // For visual styling
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

export default function BookingSection() {
  const t = useTranslations('BookingSection');

  return (
    <section id="booking" className="py-16 md:py-24 bg-foreground text-background">
      <div className="container max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
          {t('headline')}
        </h2>
        <p className="mt-6 text-base md:text-lg text-background/80 font-light">
          {t.rich('description', {
            telLink: (chunks) => (
              <a href="tel:519-578-5717" className="font-semibold text-brand-cyan hover:underline">
                {chunks}
              </a>
            ),
          })}
        </p>

        <Card className="mt-10 bg-background text-foreground p-6 sm:p-8 rounded-lg shadow-xl opacity-80">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">{t('formTitle')}</CardTitle>
            <CardDescription className="text-muted-foreground">{t('formDescription')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <Label htmlFor="name-disabled" className="text-muted-foreground">{t('formLabelName')}</Label>
                <Input id="name-disabled" placeholder={t('formPlaceholderName')} disabled className="bg-muted/50 cursor-not-allowed" />
              </div>
              <div className="space-y-2 text-left">
                <Label htmlFor="email-disabled" className="text-muted-foreground">{t('formLabelEmail')}</Label>
                <Input id="email-disabled" type="email" placeholder={t('formPlaceholderEmail')} disabled className="bg-muted/50 cursor-not-allowed" />
              </div>
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="date-disabled" className="text-muted-foreground">{t('formLabelDate')}</Label>
              {/* Display a disabled calendar for visual effect */}
              <div className="rounded-md border border-input p-3 bg-muted/50 cursor-not-allowed opacity-50">
                 <Calendar mode="single" disabled/>
              </div>
            </div>
            <Button 
              type="button" // Important: not submit
              size="lg" 
              className="w-full bg-brand-blue hover:bg-brand-pink text-white text-base py-3 px-6 rounded-md shadow-md transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label={t('bookVisitAriaLabel')}
            >
              {t('bookVisitButton')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
