import { servicesData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, HelpCircle, Phone, ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ServicePageProps {
  params: {
    slug: string;
    locale: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map(service => ({ slug: service.id }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = servicesData.find(s => s.id === params.slug);
  if (!service) {
    return { title: 'Service Not Found' };
  }
  return {
    title: `${service.titleKey} - Dr. Liana Cardieri Dental Services`,
    description: service.descriptionKey,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const t = useTranslations();
  const service = servicesData.find(s => s.id === params.slug);
  
  if (!service) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">{t('ServiceDetailPage.serviceNotFound')}</h1>
        <p className="text-lg text-foreground/80 mb-8">{t('ServiceDetailPage.moreDetailsComing')}</p>
        <Button asChild className="bg-brand-blue hover:bg-brand-pink text-white">
          <Link href={`/${params.locale}/services`}>
            {t('ServiceDetailPage.backToServicesButton')}
          </Link>
        </Button>
      </div>
    );
  }

  const serviceDetail = t.raw(`ServiceDetailPage.services.${service.id}`);

  return (
    <div className="bg-brand-light-blue py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Button
          asChild
          variant="ghost"
          className="mb-8 hover:bg-brand-blue/10 text-brand-blue"
        >
          <Link href={`/${params.locale}/services`} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t('Navigation.backToServices')}
          </Link>
        </Button>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">{serviceDetail.title}</h1>
          <p className="text-xl text-brand-blue font-semibold">{serviceDetail.tagline}</p>
        </header>

        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl mb-12 border-4 border-white">
          <Image 
            src={service.image} 
            alt={serviceDetail.title} 
            fill 
            className="object-cover"
            priority
            data-ai-hint={service.imageHint} 
          />
        </div>

        <section className="mb-12 bg-background p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            {t('ServiceDetailPage.whatIsTitle', { serviceName: serviceDetail.title })}
          </h2>
          <p className="text-foreground/80 leading-relaxed font-light">{serviceDetail.introduction}</p>
        </section>

        <section className="mb-12 bg-background p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-6">{t('ServiceDetailPage.keyBenefitsTitle')}</h2>
          <ul className="space-y-3">
            {serviceDetail.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                <span className="text-foreground/80 font-light">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {serviceDetail.faqs && serviceDetail.faqs.length > 0 && (
          <section className="mb-12 bg-background p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
              <HelpCircle className="h-7 w-7 text-brand-blue mr-3"/>
              {t('ServiceDetailPage.faqTitle')}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {serviceDetail.faqs.map((faq: { question: string; answer: string }, index: number) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-border/50">
                  <AccordionTrigger className="text-left hover:no-underline text-lg text-foreground font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 font-light leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        <section className="text-center py-10 bg-primary/10 rounded-lg shadow-lg border border-primary/20">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            {t('ServiceDetailPage.interestedTitle', { serviceName: serviceDetail.title })}
          </h2>
          <p className="text-foreground/80 mb-8 max-w-xl mx-auto font-light">
            {t('ServiceDetailPage.interestedDescription')}
          </p>
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
            <Link href={`/${params.locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" /> {t('ServiceDetailPage.bookConsultationButton')}
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
