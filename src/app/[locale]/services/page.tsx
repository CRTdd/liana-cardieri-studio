import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { servicesData, type Service } from '@/lib/data'; // Assuming servicesData includes all services
import { ArrowRight, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const metadata = {
  title: 'Our Dental Services - Kitchener Smiles',
  description: 'Explore the comprehensive dental services offered at Kitchener Smiles, including cosmetic dentistry, family care, Zoom whitening, crowns, bridges, and more.',
};

const benefits = [
  'Comprehensive care for all dental needs',
  'Latest technology and materials',
  'Same-day crowns for convenience',
  'Experienced and caring team',
  'Focus on prevention and patient education',
  'Reduced radiation with digital x-rays',
  'Affiliations with top specialists',
];

const faqs = [
  {
    q: 'What is preventive dentistry?',
    a: 'Preventive dentistry focuses on keeping your teeth healthy and avoiding dental problems before they start, using regular checkups, cleanings, and protective treatments.'
  },
  {
    q: 'Do you offer same-day crowns?',
    a: 'Yes! Most crowns can be completed in a single visit for your convenience.'
  },
  {
    q: 'Are dental implants right for me?',
    a: 'Dental implants are a great option for many patients with missing teeth. Ask Dr. Cardieri for a personalized assessment.'
  },
  {
    q: 'How do digital x-rays benefit me?',
    a: 'Digital x-rays reduce radiation exposure by up to 80% and provide instant, accurate images for better diagnostics.'
  },
];

const ServiceCard = ({ service }: { service: typeof servicesData[number] }) => {
  const t = useTranslations() as (key: string) => string;
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-102 bg-background rounded-xl border-border group">
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
        {(service as any).highlightKey && (
          <p className="text-sm font-semibold text-brand-pink mt-1 mb-1">{t((service as any).highlightKey)}</p>
        )}
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-foreground/80 text-base font-light">{t(service.descriptionKey)}</p>
      </CardContent>
      <CardFooter className="p-6 bg-secondary/30 flex flex-col sm:flex-row sm:justify-between items-center space-y-3 sm:space-y-0">
        <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-full sm:w-auto transition-colors duration-300 group">
          <Link href={service.learnMoreLink}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button asChild className="bg-brand-blue hover:bg-brand-pink text-white w-full sm:w-auto transition-colors duration-300 group">
          <a href="tel:519-578-5717">
            <Phone className="mr-2 h-4 w-4" /> Call to Discuss
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function ServicesPage() {
  const t = useTranslations();
  return (
    <div className="bg-brand-light-blue py-12 md:py-20">
      <div className="container mx-auto px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('ServicesPage.headline')}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-light">
            {t('ServicesPage.description')}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <section className="mt-16 bg-background p-8 md:p-12 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-primary mb-6">{t('ServicesPage.benefitsTitle')}</h2>
          <ul className="list-disc list-inside text-lg text-foreground/80 font-light mb-8 max-w-2xl mx-auto">
            {t.raw('ServicesPage.benefits').map((benefit: string, idx: number) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 bg-background p-8 md:p-12 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-primary mb-6">{t('ServicesPage.faqTitle')}</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {t.raw('ServicesPage.faqs').map((faq: { question: string; answer: string }, idx: number) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold text-brand-blue mb-2">{faq.question}</h3>
                <p className="text-base text-foreground/80 font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
