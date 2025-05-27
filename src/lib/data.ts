import type { LucideIcon } from 'lucide-react';
import { Award, Users, Smile, Crown, Zap, Languages, HeartHandshake, Star, UserCircle } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  imageHint: string;
  learnMoreLink: string;
  trustBadge?: string;
  Icon?: LucideIcon;
}

export const servicesData: Service[] = [
  {
    id: 'whitening',
    title: 'Zoom Whitening',
    description: 'Get a radiant, confident smile in just one visit with our safe, professional whitening.',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'teeth whitening',
    learnMoreLink: '/services/zoom-whitening',
    Icon: Zap,
  },
  {
    id: 'fillings',
    title: 'Silver/Resin Fillings',
    description: 'Restore decayed teeth with durable and aesthetic silver or tooth-colored resin fillings.',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'dental filling',
    learnMoreLink: '/services/fillings',
    trustBadge: 'Pain-Free Options',
    Icon: Smile,
  },
  {
    id: 'crowns-bridges',
    title: 'Crowns & Bridges',
    description: 'Strengthen damaged teeth or replace missing ones with our custom-made crowns and bridges.',
    image: 'https://placehold.co/400x300.png',
    imageHint: 'dental crown bridge',
    learnMoreLink: '/services/crowns-bridges',
    trustBadge: 'Same-Day Crowns',
    Icon: Crown,
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  initials: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: 'Painless and professional! Dr. Cardieri and her team are fantastic. I highly recommend them.',
    author: 'J.S.',
    initials: 'JS',
    rating: 5,
  },
  {
    id: '2',
    quote: 'The best dental experience I\'ve ever had. Everyone is so friendly and caring. My smile has never looked better!',
    author: 'M.B.',
    initials: 'MB',
    rating: 5,
  },
  {
    id: '3',
    quote: 'I was nervous about my procedure, but they made me feel comfortable and at ease. Truly exceptional service.',
    author: 'A.K.',
    initials: 'AK',
    rating: 5,
  },
  {
    id: '4',
    quote: 'Multilingual staff was a huge plus for my family. They explained everything clearly in Portuguese.',
    author: 'C.O.',
    initials: 'CO',
    rating: 5,
  },
  {
    id: '5',
    quote: 'Efficient, modern, and very skilled. The same-day crown service is amazing!',
    author: 'L.P.',
    initials: 'LP',
    rating: 5,
  },
];

export interface WhyChooseUsPoint {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const whyChooseUsData: WhyChooseUsPoint[] = [
  {
    id: 'gentle-care',
    title: 'Gentle Care',
    description: 'We prioritize your comfort with gentle techniques and a compassionate approach.',
    Icon: HeartHandshake,
  },
  {
    id: 'same-day-crowns',
    title: 'Same-Day Crowns',
    description: 'Advanced technology allows us to create and place crowns in a single visit.',
    Icon: Crown,
  },
  {
    id: 'multilingual-staff',
    title: 'Multilingual Staff',
    description: 'Our team is fluent in English, Portuguese, and Polish to serve you better.',
    Icon: Languages,
  },
    {
    id: 'experienced-team',
    title: 'Experienced Team',
    description: 'With over 20 years of experience, Dr. Cardieri leads a skilled and dedicated team.',
    Icon: Award,
  },
];

export const trustBadges = [
    { id: 'experience', text: '20+ Years Experience', Icon: Award },
    { id: 'oda', text: 'ODA Member', Icon: Users }, // Using Users as a placeholder for ODA Member
];
