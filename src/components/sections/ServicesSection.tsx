'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { homeServicesData } from '@/data/servicesData';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import ServiceCard from '@/components/ServiceCard';
import type { Service } from '@/lib/data';

export default function ServicesSection() {
  const t = useTranslations();
  const locale = useParams().locale as string;

  const services: Service[] = homeServicesData.map(service => ({
    ...service,
    learnMoreLink: `/${locale}${service.learnMoreLink}`
  }));

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('ServicesSection.headline')}
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('ServicesSection.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-cols-fr">
          {services.slice(0, 3).map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              locale={locale}
              variant="featured"
            />
          ))}
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg" className="text-base bg-brand-blue hover:bg-brand-pink text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <Link href={`/${locale}/services`}>
              {t('ServicesSection.exploreAllButton')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
