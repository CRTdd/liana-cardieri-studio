import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, HelpCircle, Phone, ArrowLeft, DollarSign, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { procedureStepsData } from '@/data/procedureStepsData';
import { servicesData } from '@/data/servicesData';
import { Card, CardContent } from '@/components/ui/card';
import { servicePagesData } from '@/data/servicePagesData';
import ServiceCard from './ServiceCard';

interface ServiceDetailProps {
  slug: string;
  locale: string;
}

export default function ServiceDetail({ slug, locale }: ServiceDetailProps) {
  const t = useTranslations('ServiceDetailPage');
  const tServices = useTranslations('ServicesPage.service');
  const service = servicesData.find(s => s.id === slug);
  const serviceData = servicePagesData[slug];
  
  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('serviceNotFound')}</h1>
        <p className="text-gray-600 mb-8">{t('moreDetailsComing')}</p>
        <Button asChild>
          <Link href={`/${locale}/services`}>
            {t('backToServicesButton')}
          </Link>
        </Button>
      </div>
    );
  }

  const serviceDetail = t.raw(`services.${service.id}`);
  const procedureSteps = procedureStepsData[service.id as keyof typeof procedureStepsData] || [];
  const relatedServices = servicesData
    .filter(s => s.id !== service.id)
    .slice(0, 3);

  // If serviceData is not available, use a default structure
  const content = serviceData?.content || {
    benefits: [],
    faqs: [],
  };

  return (
    <div className="bg-[#CAF0F8] py-6 md:py-12 font-montserrat">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <Button
          asChild
          variant="ghost"
          className="hover:bg-[#3A0CA3]/10 text-[#3A0CA3]"
        >
          <Link href={`/${locale}/services`} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t('backToServicesButton')}
          </Link>
        </Button>

        {/* Hero Section: Full width */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#001524] mb-3 font-montserrat font-bold">{serviceDetail.title}</h1>
          <p className="text-xl text-[#3A0CA3] font-semibold font-montserrat font-medium">{serviceDetail.tagline}</p>
        </header>
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl mb-12 border-4 border-white">
          <Image 
            src={service.image} 
            alt={serviceDetail.title} 
            fill 
            className="object-cover"
            priority
            data-ai-hint={service.imageHint} 
          />
        </div>

        {/* Main Content: Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* What is Section */}
            <section className="bg-white p-6 rounded-xl shadow-md" aria-label={t('whatIsTitle', { serviceName: serviceDetail.title })}>
              <h2 className="text-2xl font-bold text-[#001524] mb-4 font-montserrat">{t('whatIsTitle', { serviceName: serviceDetail.title })}</h2>
              <p className="text-[#001524]/80 leading-relaxed font-light font-montserrat">{serviceDetail.introduction}</p>
            </section>
            {/* Key Benefits */}
            {content.benefits.length > 0 && (
              <section className="bg-white p-6 rounded-xl shadow-md" aria-label={t('keyBenefitsTitle')}>
                <h2 className="text-2xl font-bold text-[#001524] mb-4 font-montserrat">{t('keyBenefitsTitle')}</h2>
                <ul className="space-y-3">
                  {content.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#3A0CA3] mr-3 mt-1 shrink-0" />
                      <span className="text-[#001524]/80 font-light font-montserrat">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {/* FAQ Section */}
            {content.faqs && content.faqs.length > 0 && (
              <section className="bg-white p-6 rounded-xl shadow-md" aria-label={t('faqTitle')}>
                <h2 className="text-2xl font-bold text-[#001524] mb-4 flex items-center font-montserrat">
                  <HelpCircle className="h-6 w-6 text-[#3A0CA3] mr-2"/>
                  {t('faqTitle')}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {content.faqs.map((faq: { question: string; answer: string }, index: number) => (
                    <AccordionItem value={`item-${index}`} key={index} className="border-[#D9D9D9]/50">
                      <AccordionTrigger className="text-left hover:no-underline text-lg text-[#001524] font-medium font-montserrat" aria-expanded="false">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#001524]/80 font-light leading-relaxed pt-2 pb-4 font-montserrat">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Procedure Overview */}
            {procedureSteps.length > 0 && (
              <section className="bg-white p-6 rounded-xl shadow-md" aria-label="What to Expect: The Dental Implants Process">
                <h2 className="text-2xl font-bold text-[#001524] mb-4 font-montserrat">What to Expect: The Dental Implants Process</h2>
                <div className="relative pl-8">
                  {/* Vertical dotted line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 border-dotted border-l-2 border-[#D9D9D9]" aria-hidden="true"></div>
                  <div className="space-y-8">
                    {procedureSteps.map((step, index) => (
                      <div key={index} className="relative pl-8 flex items-start">
                        <div className="absolute left-0 w-8 h-8 rounded-full bg-[#3A0CA3] text-white flex items-center justify-center font-bold" style={{fontSize: '1.25rem'}}>
                          {index + 1}
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm ml-4">
                          <h3 className="text-lg font-semibold text-[#001524] mb-2 font-montserrat">{step.title}</h3>
                          <p className="text-[#001524]/80 font-light font-montserrat">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
            {/* Cost & Insurance */}
            <section className="bg-white p-6 rounded-xl shadow-md border-2 border-[#3A0CA3]" aria-label="Cost & Insurance Options">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="h-6 w-6 text-[#3A0CA3]" />
              </div>
              <h2 className="text-xl font-bold text-[#001524] mb-2 text-center font-montserrat">Cost & Insurance Options</h2>
              <p className="text-[#001524]/80 mb-2 text-center font-montserrat">
                Dental implants typically range from $3,000 to $5,000 per tooth, depending on complexity. We offer flexible payment plans and work with most insurance providers to maximize your coverage.
              </p>
              <p className="text-[#001524]/60 text-xs text-center font-montserrat italic">
                Costs vary based on individual needs; a consultation provides an accurate estimate.
              </p>
            </section>
          </div>
        </div>

        {/* Related Services */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-12" aria-label="Explore Related Services">
          <h2 className="text-xl font-bold text-[#001524] mb-4 text-center font-montserrat">Explore Related Services</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedServices.map((relatedService) => (
              <ServiceCard
                key={relatedService.id}
                service={relatedService}
                locale={locale}
                variant="related"
              />
            ))}
          </div>
        </section>

        {/* CTA Section: Full width */}
        <section className="text-center py-10 bg-[#001524]/10 rounded-xl shadow-lg border border-[#001524]/20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001524] mb-6 font-montserrat">
            {t('interestedTitle', { serviceName: serviceDetail.title })}
          </h2>
          <p className="text-[#001524]/80 mb-8 max-w-xl mx-auto font-montserrat">
            {t('interestedDescription')}
          </p>
          <Button asChild size="lg" className="bg-[#3A0CA3] hover:bg-[#F72585] text-white transition-all duration-300 transform hover:scale-105">
            <Link href={`/${locale}/contact`}>
              <Phone className="mr-2 h-5 w-5" /> {t('bookConsultationButton')}
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
} 