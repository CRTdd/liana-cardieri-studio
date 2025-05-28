
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // Using default Next.js Link
import { Award, Users, Smile } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';

// export const metadata: Metadata = { // Metadata is typically handled by layout or generateMetadata
//   title: 'About Us - Dr. Liana Cardieri',
//   description: 'Learn more about Dr. Liana Cardieri, our dedicated team of hygienists, and our modern dental office in Kitchener.',
// };

const TeamMemberCard = ({ name, title, imageUrl, bio, imageHint }: { name: string; title: string; imageUrl: string; bio: string, imageHint: string }) => (
  <div className="bg-background p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105">
    <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary">
      <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" data-ai-hint={imageHint} />
    </div>
    <h3 className="text-2xl font-bold text-primary">{name}</h3>
    <p className="text-brand-blue font-semibold">{title}</p>
    <p className="mt-2 text-foreground/80 font-light text-sm">{bio}</p>
  </div>
);

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <div className="bg-brand-light-blue py-12 md:py-20">
      <div className="container mx-auto px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('pageTitle')}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-light">
            {t('pageDescription')}
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">{t('drCardieriTitle')}</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-background p-8 rounded-xl shadow-xl">
            <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-md shrink-0">
              <Image src="https://placehold.co/400x400.png" alt={t('drCardieriTitle')} layout="fill" objectFit="cover" data-ai-hint="dentist portrait professional" />
            </div>
            <div className="text-foreground/80 font-light">
              <p className="mb-4 text-lg">
                {t('drCardieriBio1')}
              </p>
              <p className="mb-4">
                {t('drCardieriBio2')}
              </p>
              <p>
                {t('drCardieriBio3')}
              </p>
              <div className="mt-6 flex space-x-4">
                <div className="flex items-center text-primary">
                  <Award className="mr-2 h-6 w-6" /> {t('experienceBadge')}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">{t('hygienistsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard
              name={t('sofiaName')}
              title={t('sofiaTitle')}
              imageUrl="https://placehold.co/300x300.png"
              imageHint="hygienist portrait friendly"
              bio={t('sofiaBio')}
            />
            <TeamMemberCard
              name={t('marekName')}
              title={t('marekTitle')}
              imageUrl="https://placehold.co/300x300.png"
              imageHint="hygienist portrait smiling"
              bio={t('marekBio')}
            />
             <TeamMemberCard
              name={t('emilyName')}
              title={t('emilyTitle')}
              imageUrl="https://placehold.co/300x300.png"
              imageHint="assistant portrait professional"
              bio={t('emilyBio')}
            />
          </div>
        </section>

        <section className="text-center bg-background p-8 md:p-12 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-primary mb-6">{t('officeTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image src="https://placehold.co/600x400.png" alt={t('officeTitle') + " - Reception"} layout="fill" objectFit="cover" data-ai-hint="dental reception modern" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image src="https://placehold.co/600x400.png" alt={t('officeTitle') + " - Treatment Room"} layout="fill" objectFit="cover" data-ai-hint="dental chair clean" />
            </div>
          </div>
          <p className="text-lg text-foreground/80 font-light mb-8 max-w-2xl mx-auto">
            {t('officeDescription')}
          </p>
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
            <Link href="/#contact">{t('contactToVisitButton')}</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}

    