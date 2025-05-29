import type { LucideIcon } from 'lucide-react';
import { Award, Users, Smile, Crown, Zap, Languages, HeartHandshake, Star, UserCircle, Shield, Heart, Anchor, Sparkles, Drill, Camera } from 'lucide-react';

export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  imageHint: string;
  learnMoreLink: string;
  highlightKey?: string;
  Icon?: LucideIcon;
}

export const servicesData: Service[] = [
  {
    id: 'preventive',
    titleKey: 'ServicesPage.service.preventive.title',
    descriptionKey: 'ServicesPage.service.preventive.description',
    image: 'https://placehold.co/400x300?text=Preventive',
    imageHint: 'preventive dental care',
    learnMoreLink: '/services/preventive',
    Icon: Shield,
  },
  {
    id: 'periodontal',
    titleKey: 'ServicesPage.service.periodontal.title',
    descriptionKey: 'ServicesPage.service.periodontal.description',
    image: 'https://placehold.co/400x300?text=Gum+Treatment',
    imageHint: 'periodontal treatment',
    learnMoreLink: '/services/periodontal',
    Icon: Heart,
  },
  {
    id: 'restorative',
    titleKey: 'ServicesPage.service.restorative.title',
    descriptionKey: 'ServicesPage.service.restorative.description',
    image: 'https://placehold.co/400x300?text=Fillings',
    imageHint: 'dental fillings',
    learnMoreLink: '/services/restorative',
    Icon: Smile,
  },
  {
    id: 'crowns-bridges',
    titleKey: 'ServicesPage.service.crowns-bridges.title',
    descriptionKey: 'ServicesPage.service.crowns-bridges.description',
    image: 'https://placehold.co/400x300?text=Crowns+%26+Bridges',
    imageHint: 'dental crowns and bridges',
    learnMoreLink: '/services/crowns-bridges',
    Icon: Crown,
  },
  {
    id: 'implants',
    titleKey: 'ServicesPage.service.implants.title',
    descriptionKey: 'ServicesPage.service.implants.description',
    image: 'https://placehold.co/400x300?text=Implants',
    imageHint: 'dental implants',
    learnMoreLink: '/services/implants',
    Icon: Anchor,
  },
  {
    id: 'cosmetic',
    titleKey: 'ServicesPage.service.cosmetic.title',
    descriptionKey: 'ServicesPage.service.cosmetic.description',
    image: 'https://placehold.co/400x300?text=Cosmetic',
    imageHint: 'cosmetic dentistry',
    learnMoreLink: '/services/cosmetic',
    Icon: Sparkles,
  },
  {
    id: 'endodontic',
    titleKey: 'ServicesPage.service.endodontic.title',
    descriptionKey: 'ServicesPage.service.endodontic.description',
    image: 'https://placehold.co/400x300?text=Root+Canal',
    imageHint: 'root canal treatment',
    learnMoreLink: '/services/endodontic',
    Icon: Drill,
  },
  {
    id: 'prosthetic',
    titleKey: 'ServicesPage.service.prosthetic.title',
    descriptionKey: 'ServicesPage.service.prosthetic.description',
    image: 'https://placehold.co/400x300?text=Dentures',
    imageHint: 'denture treatment',
    learnMoreLink: '/services/prosthetic',
    Icon: UserCircle,
  },
  {
    id: 'digital-xray',
    titleKey: 'ServicesPage.service.digital-xray.title',
    descriptionKey: 'ServicesPage.service.digital-xray.description',
    image: 'https://placehold.co/400x300?text=Digital+X-Ray',
    imageHint: 'digital x-ray',
    learnMoreLink: '/services/digital-xray',
    Icon: Camera,
  }
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

    