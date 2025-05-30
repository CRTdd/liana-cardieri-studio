import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Phone } from 'lucide-react';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Financial Information - Dr. Liana Cardieri',
  description: 'Learn about payment options, insurance, and financing at Dr. Liana Cardieri\'s practice. We strive to make quality dental care affordable.',
};

export default function FinancialInfoPage() {
  const t = useTranslations('FinancialInfoPage');

  return (
    <div className="bg-brand-light-blue py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">{t('headline')}</h1>
          <p className="text-xl text-foreground/70 font-light">
            {t('subheadline')}
          </p>
        </header>

        <section className="mb-12 bg-background p-8 rounded-xl shadow-md max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            {t('commitmentTitle')}
          </h2>
          <p className="text-lg text-foreground/80 font-light mb-8">
            {t('commitmentPara1')}
          </p>
          <p className="text-foreground/80 leading-relaxed font-light">
            {t('commitmentPara2')}
          </p>
        </section>

        <section className="mb-12 bg-background p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
            <HelpCircle className="h-7 w-7 text-brand-blue mr-3"/>
            {t('faqTitle')}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {(t.raw('faqs') as any[]).map((faq, index) => (
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

        <section className="text-center py-10 bg-primary/10 rounded-lg shadow-lg border border-primary/20">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            {t('moreQuestionsTitle')}
          </h2>
          <p className="text-foreground/80 mb-8 max-w-xl mx-auto font-light">
            {t('moreQuestionsDescription')}
          </p>
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
            <Link href="/#contact">
              <Phone className="mr-2 h-5 w-5" /> {t('contactOfficeButton')}
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
