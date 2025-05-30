import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { servicesData, type Service } from '@/data/servicesData';
import { Pill } from '@/components/ui/pill';

interface ServiceCardProps {
  service: Service;
  locale: string;
  variant?: 'default' | 'related' | 'featured';
}

export default function ServiceCard({ service, locale, variant = 'default' }: ServiceCardProps) {
  const t = useTranslations('ServicesPage');
  const learnMoreLink = service.learnMoreLink.replace('[locale]', locale);

  if (variant === 'featured') {
    return (
      <Card className="flex flex-col min-w-[340px] w-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-102 bg-background rounded-xl border-border group">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={service.image}
            alt={t(`service.${service.id}.title`)}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {service.highlightKey && (
              <Pill variant="highlight" className="mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                {t(`service.${service.id}.highlight`)}
              </Pill>
            )}
            <CardTitle className="text-2xl font-extrabold text-white flex items-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
              {t(`service.${service.id}.title`)}
            </CardTitle>
          </div>
        </div>
        <CardContent className="p-6 pt-0 flex-grow">
          <p className="text-foreground/80 text-base font-light">
            {t(`service.${service.id}.description`)}
          </p>
        </CardContent>
        <CardFooter className="p-6 bg-secondary/30 flex flex-col items-center space-y-3">
          <Button asChild variant="outline" className="text-base border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-full transition-colors duration-300 group shadow-md">
            <Link href={learnMoreLink}>
              {t('serviceCard.learnMoreButton')} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild className="text-base bg-brand-blue hover:bg-brand-pink text-white w-full transition-colors duration-300 group shadow-md">
            <a href="tel:519-578-5717">
              <Phone className="mr-2 h-4 w-4" /> {t('serviceCard.callToDiscussButton')}
            </a>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.025] bg-background rounded-2xl border-2 border-transparent bg-clip-padding hover:border-brand-blue/40 group relative">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={t(`service.${service.id}.title`)}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-2xl border-b-4 border-brand-blue/10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none rounded-t-2xl" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {service.highlightKey && (
            <Pill variant="highlight" className="mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {t(`service.${service.id}.highlight`)}
            </Pill>
          )}
          <CardTitle className="text-2xl font-extrabold text-white flex items-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
            {t(`service.${service.id}.title`)}
          </CardTitle>
        </div>
      </div>
      <CardHeader className="p-6 pb-3">
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow relative">
        <p className="text-foreground/80 text-base font-light leading-relaxed">{t(`service.${service.id}.description`)}</p>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90">
          <Button asChild variant="outline" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-pink transition-all duration-300 group/btn font-semibold text-base px-6 py-2 rounded-lg shadow-lg">
            <Link href={learnMoreLink}>
              {t('serviceCard.learnMoreButton')} <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 