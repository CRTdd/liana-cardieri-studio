
import type { LucideIcon } from 'lucide-react';
import { Award, Users, Smile, Crown, Zap, Languages, HeartHandshake, Star, UserCircle } from 'lucide-react';

export interface Service {
  id: string;
  titleKey: string; // Changed from title to titleKey
  descriptionKey: string; // Changed from description to descriptionKey
  image: string;
  imageHint: string;
  learnMoreLink: string;
  trustBadgeKey?: string; // Changed from trustBadge to trustBadgeKey
  Icon?: LucideIcon;
}

export const servicesData: Service[] = [
  {
    id: 'whitening',
    titleKey: 'data.services.whitening.title',
    descriptionKey: 'data.services.whitening.description',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'teeth whitening',
    learnMoreLink: '/services/zoom-whitening',
    Icon: Zap,
  },
  {
    id: 'fillings',
    titleKey: 'data.services.fillings.title',
    descriptionKey: 'data.services.fillings.description',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'dental filling',
    learnMoreLink: '/services/fillings',
    trustBadgeKey: 'data.services.fillings.trustBadge',
    Icon: Smile,
  },
  {
    id: 'crowns-bridges',
    titleKey: 'data.services.crowns-bridges.title',
    descriptionKey: 'data.services.crowns-bridges.description',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'dental crown bridge',
    learnMoreLink: '/services/crowns-bridges',
    trustBadgeKey: 'data.services.crowns-bridges.trustBadge',
    Icon: Crown,
  },
];

export interface Testimonial {
  id: string;
  quoteKey: string; // Changed from quote to quoteKey
  authorKey: string; // Changed from author to authorKey
  initials: string; // Initials likely remain static
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quoteKey: 'data.testimonials.0.quote',
    authorKey: 'data.testimonials.0.author',
    initials: 'JS',
    rating: 5,
  },
  {
    id: '2',
    quoteKey: 'data.testimonials.1.quote',
    authorKey: 'data.testimonials.1.author',
    initials: 'MB',
    rating: 5,
  },
  {
    id: '3',
    quoteKey: 'data.testimonials.2.quote',
    authorKey: 'data.testimonials.2.author',
    initials: 'AK',
    rating: 5,
  },
  {
    id: '4',
    quoteKey: 'data.testimonials.3.quote',
    authorKey: 'data.testimonials.3.author',
    initials: 'CO',
    rating: 5,
  },
  {
    id: '5',
    quoteKey: 'data.testimonials.4.quote',
    authorKey: 'data.testimonials.4.author',
    initials: 'LP',
    rating: 5,
  },
];

export interface WhyChooseUsPoint {
  id: string;
  titleKey: string; // Changed from title to titleKey
  descriptionKey: string; // Changed from description to descriptionKey
  Icon: LucideIcon;
}

export const whyChooseUsData: WhyChooseUsPoint[] = [
  {
    id: 'gentle-care',
    titleKey: 'data.whyChooseUs.0.title',
    descriptionKey: 'data.whyChooseUs.0.description',
    Icon: HeartHandshake,
  },
  {
    id: 'same-day-crowns',
    titleKey: 'data.whyChooseUs.1.title',
    descriptionKey: 'data.whyChooseUs.1.description',
    Icon: Crown,
  },
  {
    id: 'multilingual-staff',
    titleKey: 'data.whyChooseUs.2.title',
    descriptionKey: 'data.whyChooseUs.2.description',
    Icon: Languages,
  },
    {
    id: 'experienced-team',
    titleKey: 'data.whyChooseUs.3.title',
    descriptionKey: 'data.whyChooseUs.3.description',
    Icon: Award,
  },
];

export interface TrustBadgeItem {
    id: string;
    textKey: string; // Changed from text to textKey
    Icon: LucideIcon;
}

export const trustBadges: TrustBadgeItem[] = [
    { id: 'experience', textKey: 'data.trustBadges.0.text', Icon: Award },
];

    