export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  imageHint: string;
  learnMoreLink: string;
  highlightKey?: string;
}

export const servicesData: Service[] = [
  {
    id: 'preventive',
    titleKey: 'ServicesPage.service.preventive.title',
    descriptionKey: 'ServicesPage.service.preventive.description',
    image: 'https://placehold.co/400x300?text=Preventive',
    imageHint: 'preventive dental care',
    learnMoreLink: '/[locale]/services/preventive',
  },
  {
    id: 'periodontal',
    titleKey: 'ServicesPage.service.periodontal.title',
    descriptionKey: 'ServicesPage.service.periodontal.description',
    image: 'https://placehold.co/400x300?text=Gum+Treatment',
    imageHint: 'periodontal treatment',
    learnMoreLink: '/[locale]/services/periodontal',
  },
  {
    id: 'restorative',
    titleKey: 'ServicesPage.service.restorative.title',
    descriptionKey: 'ServicesPage.service.restorative.description',
    image: 'https://placehold.co/400x300?text=Fillings',
    imageHint: 'dental fillings',
    learnMoreLink: '/[locale]/services/restorative',
    highlightKey: 'ServicesPage.service.restorative.highlight',
  },
  {
    id: 'crowns-bridges',
    titleKey: 'ServicesPage.service.crowns-bridges.title',
    descriptionKey: 'ServicesPage.service.crowns-bridges.description',
    image: 'https://placehold.co/400x300?text=Crowns+%26+Bridges',
    imageHint: 'dental crowns and bridges',
    learnMoreLink: '/[locale]/services/crowns-bridges',
    highlightKey: 'ServicesPage.service.crowns-bridges.highlight',
  },
  {
    id: 'implants',
    titleKey: 'ServicesPage.service.implants.title',
    descriptionKey: 'ServicesPage.service.implants.description',
    image: 'https://placehold.co/400x300?text=Implants',
    imageHint: 'dental implants',
    learnMoreLink: '/[locale]/services/implants',
  },
  {
    id: 'cosmetic',
    titleKey: 'ServicesPage.service.cosmetic.title',
    descriptionKey: 'ServicesPage.service.cosmetic.description',
    image: 'https://placehold.co/400x300?text=Cosmetic',
    imageHint: 'cosmetic dentistry',
    learnMoreLink: '/[locale]/services/cosmetic',
  },
  {
    id: 'endodontic',
    titleKey: 'ServicesPage.service.endodontic.title',
    descriptionKey: 'ServicesPage.service.endodontic.description',
    image: 'https://placehold.co/400x300?text=Root+Canal',
    imageHint: 'root canal treatment',
    learnMoreLink: '/[locale]/services/endodontic',
  },
  {
    id: 'prosthetic',
    titleKey: 'ServicesPage.service.prosthetic.title',
    descriptionKey: 'ServicesPage.service.prosthetic.description',
    image: 'https://placehold.co/400x300?text=Dentures',
    imageHint: 'denture treatment',
    learnMoreLink: '/[locale]/services/prosthetic',
  },
  {
    id: 'digital-xray',
    titleKey: 'ServicesPage.service.digital-xray.title',
    descriptionKey: 'ServicesPage.service.digital-xray.description',
    image: 'https://placehold.co/400x300?text=Digital+X-Ray',
    imageHint: 'digital x-ray',
    learnMoreLink: '/[locale]/services/digital-xray',
  },
];

// Export a subset of services for the home page
export const homeServicesData = servicesData.filter(service => 
  ['restorative', 'preventive', 'crowns-bridges'].includes(service.id)
); 