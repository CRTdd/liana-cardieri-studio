'use client';
import { servicesData } from '@/data/servicesData';
import { CheckCircle, HelpCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');
  const locale = useParams().locale as string;

  return (
    <div 
      className="relative"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-brand-light-blue/75"></div>
      <div className="relative container max-w-6xl mx-auto px-4 py-12 md:py-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('headline')}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-light">
            {t('description')}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} locale={locale} />
          ))}
        </div>

        {/* Two-column layout for Benefits and FAQ */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <section className="bg-gradient-to-br from-white via-background to-brand-light-blue p-8 md:p-12 rounded-2xl shadow-2xl border border-brand-blue/10">
            <h2 className="text-3xl font-bold text-center mb-8">
              {t('benefitsTitle')}
            </h2>
            <ul className="space-y-5 text-lg text-foreground/90 font-medium max-w-2xl mx-auto">
              {t.raw('benefitsList').map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-brand-blue mt-1 flex-shrink-0" size={22} />
                  <span className="font-semibold">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-gradient-to-br from-white via-background to-brand-light-blue p-8 md:p-12 rounded-2xl shadow-2xl border border-brand-blue/10">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center justify-center gap-3">
              {t('faqTitle')}
            </h2>
            <div className="space-y-8 max-w-2xl mx-auto">
              {t.raw('faqs').map((faq: { question: string; answer: string }, idx: number) => (
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
