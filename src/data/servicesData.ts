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
    image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageHint: 'preventive dental care',
    learnMoreLink: '/[locale]/services/preventive',
  },
  {
    id: 'periodontal',
    titleKey: 'ServicesPage.service.periodontal.title',
    descriptionKey: 'ServicesPage.service.periodontal.description',
    image: 'https://www.emmydental.net/wp-content/uploads/2022/11/Periodontal-Disease.jpg',
    imageHint: 'periodontal treatment',
    learnMoreLink: '/[locale]/services/periodontal',
  },
  {
    id: 'restorative',
    titleKey: 'ServicesPage.service.restorative.title',
    descriptionKey: 'ServicesPage.service.restorative.description',
    image: 'https://www.matthewsfamilydentistry.com/wp-content/uploads/2020/12/fillings.jpg',
    imageHint: 'dental fillings',
    learnMoreLink: '/[locale]/services/restorative',
    highlightKey: 'ServicesPage.service.restorative.highlight',
  },
  {
    id: 'crowns-bridges',
    titleKey: 'ServicesPage.service.crowns-bridges.title',
    descriptionKey: 'ServicesPage.service.crowns-bridges.description',
    image: 'https://sidegatedental.co.uk/wp-content/uploads/2022/02/dental-crown-and-bridge-2.jpg',
    imageHint: 'dental crowns and bridges',
    learnMoreLink: '/[locale]/services/crowns-bridges',
    highlightKey: 'ServicesPage.service.crowns-bridges.highlight',
  },
  {
    id: 'implants',
    titleKey: 'ServicesPage.service.implants.title',
    descriptionKey: 'ServicesPage.service.implants.description',
    image: 'https://www.harmonydentalcare.com/wp-content/uploads/2018/01/Dental-Implants3.jpg',
    imageHint: 'dental implants',
    learnMoreLink: '/[locale]/services/implants',
  },
  {
    id: 'cosmetic',
    titleKey: 'ServicesPage.service.cosmetic.title',
    descriptionKey: 'ServicesPage.service.cosmetic.description',
    image: 'https://www.fitzgeralddentistry.com/wp-content/uploads/2018/12/cosmetic-dentistry-in-Murfreesboro.jpg',
    imageHint: 'cosmetic dentistry',
    learnMoreLink: '/[locale]/services/cosmetic',
  },
  {
    id: 'endodontic',
    titleKey: 'ServicesPage.service.endodontic.title',
    descriptionKey: 'ServicesPage.service.endodontic.description',
    image: 'https://www.dentevim.com/upload/kanal-tedavisi-hakkinda-her-sey.jpg',
    imageHint: 'root canal treatment',
    learnMoreLink: '/[locale]/services/endodontic',
  },
  {
    id: 'prosthetic',
    titleKey: 'ServicesPage.service.prosthetic.title',
    descriptionKey: 'ServicesPage.service.prosthetic.description',
    image: 'https://www.blakeneysmiles.com/93396676-2.jpg',
    imageHint: 'denture treatment',
    learnMoreLink: '/[locale]/services/prosthetic',
  },
  {
    id: 'digital-xray',
    titleKey: 'ServicesPage.service.digital-xray.title',
    descriptionKey: 'ServicesPage.service.digital-xray.description',
    image: 'https://d27h9edjibnca.cloudfront.net/uploads/2022/05/shutterstock_191500520.jpg',
    imageHint: 'digital x-ray',
    learnMoreLink: '/[locale]/services/digital-xray',
  },
];

// Export a subset of services for the home page
export const homeServicesData = servicesData.filter(service => 
  ['restorative', 'preventive', 'crowns-bridges'].includes(service.id)
); 