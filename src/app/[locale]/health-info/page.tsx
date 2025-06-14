import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, ShieldCheck, BookOpen } from 'lucide-react';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Oral Health Information - Dr. Liana Cardieri',
  description: 'Learn about important oral health topics like gingivitis and oral cancer. Dr. Liana Cardieri provides resources for patient education.',
};

const HealthTopicCard = ({ title, description, imageUrl, imageHint, externalLink, linkText }: { title: string; description: string; imageUrl: string; imageHint: string; externalLink: string, linkText: string }) => (
  <div className="bg-background p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 items-center">
    <div className="relative w-full md:w-1/3 h-48 md:h-full rounded-md overflow-hidden shrink-0">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" data-ai-hint={imageHint} />
    </div>
    <div className="md:w-2/3">
      <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-foreground/80 font-light mb-4 text-sm leading-relaxed">{description}</p>
      <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
        <a href={externalLink} target="_blank" rel="noopener noreferrer">
          {linkText} <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  </div>
);

export default function HealthInfoPage() {
  const t = useTranslations('HealthInfoPage');
  return (
    <div className="bg-brand-light-blue py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12 text-center">
          <BookOpen className="h-16 w-16 text-brand-blue mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">{t('headline')}</h1>
          <p className="text-xl text-foreground/70 font-light">
            {t('subheadline')}
          </p>
        </header>

        <section className="space-y-10 mb-12">
          <HealthTopicCard
            title={t('gingivitisTitle')}
            description={t('gingivitisDescription')}
            imageUrl="https://placehold.co/400x300.png"
            imageHint="gum disease illustration"
            externalLink="https://www.cda-adc.ca/en/oral_health/cfyt/gum_diseases/"
            linkText={t('gingivitisLinkText')}
          />
          <HealthTopicCard
            title={t('oralCancerTitle')}
            description={t('oralCancerDescription')}
            imageUrl="https://placehold.co/400x300.png"
            imageHint="oral cancer screening"
            externalLink="https://www.oralcancerfoundation.org/facts/"
            linkText={t('oralCancerLinkText')}
          />
        </section>
        
        <section className="bg-background p-8 rounded-lg shadow-lg text-center">
            <ShieldCheck className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-primary mb-4">{t('priorityTitle')}</h2>
            <p className="text-foreground/80 leading-relaxed font-light mb-6 max-w-2xl mx-auto">
                {t('priorityDescription')}
            </p>
            <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
                <Link href="/#contact">{t('scheduleCheckupButton')}</Link>
            </Button>
        </section>

      </div>
    </div>
  );
}
