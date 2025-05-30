import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DollarSign, HelpCircle, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Information - Dr. Liana Cardieri',
  description: 'Learn about payment options, insurance, and financing at Dr. Liana Cardieri\'s practice. We strive to make quality dental care affordable.',
};

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including cash, debit, Visa, MasterCard, and American Express. We also work with most dental insurance plans.',
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, we understand that dental treatments can be a significant investment. We offer flexible financing plans through third-party providers to help make your care more affordable. Please speak to our administrative team for more details.',
  },
  {
    question: 'How does dental insurance work at your office?',
    answer: 'We will gladly assist you in understanding your insurance coverage and will submit claims on your behalf. However, please remember that your insurance policy is a contract between you and your insurance company. You are responsible for any portion of the fees not covered by your plan.',
  },
  {
    question: 'Will my treatment hurt?',
    answer: 'Our gentle techniques and caring approach ensure maximum comfort. We offer various pain management options, including local anesthesia and sedation if needed. We're here to put you at ease and make your experience as comfortable as possible.',
  },
  {
    question: 'What if I need to cancel or reschedule my appointment?',
    answer: 'We understand that unforeseen circumstances can arise. We kindly request at least 24-48 hours notice if you need to change your appointment. This allows us to offer the time to another patient in need of care.',
  },
];

export default function FinancialInfoPage() {
  return (
    <div className="bg-brand-light-blue py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12 text-center">
          <DollarSign className="h-16 w-16 text-brand-blue mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">Financial Information & FAQs</h1>
          <p className="text-xl text-foreground/70 font-light">
            Understanding your treatment costs and payment options.
          </p>
        </header>

        <section className="mb-12 bg-background p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Commitment to You</h2>
          <p className="text-lg text-foreground/80 font-light mb-8 max-w-2xl mx-auto">
            At Dr. Liana Cardieri's practice, we believe that everyone deserves access to high-quality dental care. We strive to make our services affordable and transparent. Our team is here to help you navigate payment options, insurance claims, and any financial questions you may have.
          </p>
          <p className="text-foreground/80 leading-relaxed font-light">
            We will always provide you with a detailed treatment plan and cost estimate before any procedure begins. Your oral health is our priority, and we're committed to working with you to achieve your smile goals within your budget.
          </p>
        </section>

        <section className="mb-12 bg-background p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
            <HelpCircle className="h-7 w-7 text-brand-blue mr-3"/>
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
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
            Have More Questions?
          </h2>
          <p className="text-foreground/80 mb-8 max-w-xl mx-auto font-light">
            Our friendly administrative team is happy to assist you with any financial inquiries or to discuss your specific situation.
          </p>
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
            <Link href="/#contact">
              <Phone className="mr-2 h-5 w-5" /> Contact Our Office
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
