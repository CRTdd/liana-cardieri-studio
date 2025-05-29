import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { homeServicesData } from '@/data/homeServicesData';
import { ArrowRight, Phone } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTranslations } from 'next-intl';

const ServiceCard = ({ service }: { service: typeof homeServicesData[number] }) => {
  const t = useTranslations();
  return (
    <Card className="flex flex-col min-w-[340px] w-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-102 bg-background rounded-xl border-border group">
      <div className="relative h-56 w-full">
        <Image
          src={service.image}
          alt={t(service.titleKey)}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={service.imageHint}
        />
      </div>
      <CardHeader className="p-6">
        <CardTitle className="text-2xl font-bold text-brand-blue flex items-center">
          {t(service.titleKey)}
        </CardTitle>
        {service.highlightKey && (
          <p className="text-sm font-semibold text-brand-pink mt-1 mb-1">{t(service.highlightKey)}</p>
        )}
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-foreground/80 text-base font-light">{t(service.descriptionKey)}</p>
      </CardContent>
      <CardFooter className="p-6 bg-secondary/30 flex flex-col items-center space-y-3">
        <Button asChild variant="outline" className="text-base border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-full transition-colors duration-300 group shadow-md">
          <Link href={service.learnMoreLink}>
            {t('ServicesSection.learnMore')} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button asChild className="text-base bg-brand-blue hover:bg-brand-pink text-white w-full transition-colors duration-300 group shadow-md">
          <a href="tel:519-578-5717">
            <Phone className="mr-2 h-4 w-4" /> {t('ServicesSection.callToDiscuss')}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function ServicesSection() {
  const t = useTranslations();
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
          {homeServicesData.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
         <div className="text-center mt-16">
          <Button asChild size="lg" className="text-base bg-brand-blue hover:bg-brand-pink text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <Link href="/services">
              {t('ServicesSection.exploreAllButton')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
