import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { servicesData, type Service } from '@/lib/data'; // Assuming servicesData includes all services
import { ArrowRight, Phone, CheckCircle, HelpCircle } from 'lucide-react';
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
    <Card className="flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.025] bg-background rounded-2xl border-2 border-transparent bg-clip-padding hover:border-brand-blue/40 group relative">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={t(service.titleKey)}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-2xl border-b-4 border-brand-blue/10"
          data-ai-hint={service.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/10 to-transparent pointer-events-none rounded-t-2xl" />
      </div>
      <CardHeader className="p-6 pb-3">
        <CardTitle className="text-2xl font-extrabold text-brand-blue flex items-center group-hover:text-brand-pink transition-colors duration-300">
          {t(service.titleKey)}
        </CardTitle>
        {(service as any).highlightKey && (
          <p className="text-sm font-semibold text-brand-pink mt-1 mb-1 bg-brand-pink/10 px-2 py-1 rounded w-fit">{t((service as any).highlightKey)}</p>
        )}
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-foreground/80 text-base font-light leading-relaxed">{t(service.descriptionKey)}</p>
      </CardContent>
      <CardFooter className="p-6 bg-secondary/30 flex justify-center">
        <Button asChild variant="outline" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-pink w-full sm:w-auto transition-all duration-300 group font-semibold text-base px-6 py-2 rounded-lg shadow-md">
          <Link href={service.learnMoreLink}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function ServicesPage() {
  const t = useTranslations();
  return (
    <div className="bg-brand-light-blue py-12 md:py-20">
      <div className="container max-w-6xl mx-auto px-4">
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

        {/* Two-column layout for Benefits and FAQ */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <section className="bg-gradient-to-br from-white via-background to-brand-light-blue p-8 md:p-12 rounded-2xl shadow-2xl border border-brand-blue/10">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center justify-center gap-3">
              {t('ServicesPage.benefitsTitle')}
            </h2>
            <ul className="space-y-5 text-lg text-foreground/90 font-medium max-w-2xl mx-auto">
              {t.raw('ServicesPage.benefits').map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-brand-blue mt-1 flex-shrink-0" size={22} />
                  <span className="font-semibold">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-gradient-to-br from-white via-background to-brand-light-blue p-8 md:p-12 rounded-2xl shadow-2xl border border-brand-blue/10">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center justify-center gap-3">
              {t('ServicesPage.faqTitle')}
            </h2>
            <div className="space-y-8 max-w-2xl mx-auto">
              {t.raw('ServicesPage.faqs').map((faq: { question: string; answer: string }, idx: number) => (
                <div key={idx} className="flex items-start gap-4">
                  <HelpCircle className="text-brand-blue mt-1 flex-shrink-0" size={22} />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-blue mb-2">{faq.question}</h3>
                    <p className="text-base text-foreground/80 font-light">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
