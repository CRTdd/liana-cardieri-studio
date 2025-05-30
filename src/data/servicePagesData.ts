import { Metadata } from 'next';

interface ServicePageData {
  id: string;
  metadata: {
    title: string;
    description: string;
    keywords: string;
    openGraph: {
      title: string;
      description: string;
      type: string;
    };
  };
  content: {
    benefits: string[];
    faqs: Array<{
      question: string;
      answer: string;
    }>;
    procedureSteps?: Array<{
      title: string;
      description: string;
    }>;
  };
}

export const servicePagesData: Record<string, ServicePageData> = {
  preventive: {
    id: 'preventive',
    metadata: {
      title: 'Preventive Dentistry - Dr. Liana Cardieri Dental Services',
      description: 'Comprehensive preventive dental care including regular checkups, cleanings, and protective treatments to maintain optimal oral health.',
      keywords: 'preventive dentistry, dental checkups, dental cleanings, oral hygiene, dental sealants, fluoride treatment, gum disease prevention',
      openGraph: {
        title: 'Preventive Dentistry - Dr. Liana Cardieri Dental Services',
        description: 'Comprehensive preventive dental care including regular checkups, cleanings, and protective treatments to maintain optimal oral health.',
        type: 'website',
      },
    },
    content: {
      benefits: [
        'Early detection of dental problems',
        'Professional cleaning and plaque removal',
        'Personalized oral hygiene instructions',
        'Protection against cavities and gum disease',
        'Regular monitoring of oral health',
        'Cost-effective long-term dental care',
      ],
      faqs: [
        {
          question: 'How often should I visit the dentist for checkups?',
          answer: 'Most patients should visit every 6 months for regular checkups and cleanings. However, some patients may need more frequent visits based on their oral health needs.',
        },
        {
          question: 'What happens during a preventive dental visit?',
          answer: 'Your visit includes a thorough examination, professional cleaning, X-rays if needed, and personalized recommendations for maintaining optimal oral health.',
        },
        {
          question: 'Are dental sealants effective for cavity prevention?',
          answer: 'Yes, dental sealants can reduce the risk of cavities by up to 80% in the first year and continue to protect for several years after placement.',
        },
      ],
    },
  },
  periodontal: {
    id: 'periodontal',
    metadata: {
      title: 'Periodontal Treatment - Dr. Liana Cardieri Dental Services',
      description: 'Expert periodontal care for gum disease treatment and prevention. Restore and maintain healthy gums with our comprehensive periodontal services.',
      keywords: 'periodontal treatment, gum disease, gingivitis, periodontitis, gum surgery, deep cleaning, scaling and root planing',
      openGraph: {
        title: 'Periodontal Treatment - Dr. Liana Cardieri Dental Services',
        description: 'Expert periodontal care for gum disease treatment and prevention. Restore and maintain healthy gums with our comprehensive periodontal services.',
        type: 'website',
      },
    },
    content: {
      benefits: [
        'Early detection and treatment of gum disease',
        'Prevention of tooth loss',
        'Improved overall oral health',
        'Reduced risk of systemic health issues',
        'Customized treatment plans',
        'Long-term gum health maintenance',
      ],
      faqs: [
        {
          question: 'What are the signs of gum disease?',
          answer: 'Common signs include red, swollen, or bleeding gums, persistent bad breath, receding gums, and loose teeth. Early detection is crucial for successful treatment.',
        },
        {
          question: 'Is periodontal treatment painful?',
          answer: 'We use local anesthesia to ensure your comfort during treatment. Most patients experience minimal discomfort and can return to normal activities the next day.',
        },
        {
          question: 'How long does periodontal treatment take?',
          answer: 'Treatment duration varies based on the severity of gum disease. Initial treatment typically takes 1-2 visits, with follow-up appointments as needed.',
        },
      ],
    },
  },
  restorative: {
    id: 'restorative',
    metadata: {
      title: 'Restorative Dentistry - Dr. Liana Cardieri Dental Services',
      description: 'Professional restorative dental services including fillings, inlays, onlays, and more. Restore your teeth to their natural function and appearance.',
      keywords: 'restorative dentistry, dental fillings, inlays, onlays, tooth restoration, dental repair, cavity treatment, tooth decay',
      openGraph: {
        title: 'Restorative Dentistry - Dr. Liana Cardieri Dental Services',
        description: 'Professional restorative dental services including fillings, inlays, onlays, and more. Restore your teeth to their natural function and appearance.',
        type: 'website',
      },
    },
    content: {
      benefits: [
        'Natural-looking restorations',
        'Durable and long-lasting results',
        'Improved chewing function',
        'Enhanced smile appearance',
        'Prevention of further decay',
        'Comfortable and painless treatment',
      ],
      faqs: [
        {
          question: 'What types of fillings do you offer?',
          answer: 'We offer tooth-colored composite fillings that blend seamlessly with your natural teeth, providing both aesthetic and functional benefits.',
        },
        {
          question: 'How long do dental restorations last?',
          answer: 'With proper care, most restorations can last 5-15 years. Regular checkups and good oral hygiene help extend their lifespan.',
        },
        {
          question: 'Is the restoration process painful?',
          answer: 'We use local anesthesia to ensure a comfortable experience. Most patients report minimal discomfort during and after the procedure.',
        },
      ],
    },
  },
  'crowns-bridges': {
    id: 'crowns-bridges',
    metadata: {
      title: 'Crowns & Bridges - Dr. Liana Cardieri Dental Services',
      description: 'High-quality dental crowns and bridges to restore damaged teeth and replace missing teeth. Achieve a natural-looking, functional smile.',
      keywords: 'dental crowns, dental bridges, tooth restoration, missing teeth, damaged teeth, dental prosthetics, smile restoration',
      openGraph: {
        title: 'Crowns & Bridges - Dr. Liana Cardieri Dental Services',
        description: 'High-quality dental crowns and bridges to restore damaged teeth and replace missing teeth. Achieve a natural-looking, functional smile.',
        type: 'website',
      },
    },
    content: {
      benefits: [
        'Natural-looking results',
        'Improved chewing function',
        'Enhanced smile appearance',
        'Long-lasting durability',
        'Protection for damaged teeth',
        'Restored confidence',
      ],
      faqs: [
        {
          question: 'How long does it take to get a crown or bridge?',
          answer: 'The process typically takes 2-3 visits. We can often provide same-day crowns using our advanced technology.',
        },
        {
          question: 'How do I care for my crown or bridge?',
          answer: 'Care for them like natural teeth with regular brushing, flossing, and dental checkups. Avoid chewing hard foods or ice.',
        },
        {
          question: 'What materials are used for crowns and bridges?',
          answer: 'We use high-quality materials including porcelain, ceramic, and metal alloys, chosen based on your specific needs and preferences.',
        },
      ],
    },
  },
  implants: {
    id: 'implants',
    metadata: {
      title: 'Dental Implants - Dr. Liana Cardieri Dental Services',
      description: 'State-of-the-art dental implant solutions for missing teeth. Restore your smile with permanent, natural-looking dental implants.',
      keywords: 'dental implants, implant dentistry, missing teeth, tooth replacement, permanent teeth, implant surgery, smile restoration',
      openGraph: {
        title: 'Dental Implants - Dr. Liana Cardieri Dental Services',
        description: 'State-of-the-art dental implant solutions for missing teeth. Restore your smile with permanent, natural-looking dental implants.',
        type: 'website',
      },
    },
    content: {
      benefits: [
        'Permanent tooth replacement',
        'Natural look and feel',
        'Improved chewing function',
        'Preserved jawbone health',
        'Enhanced confidence',
        'Long-lasting results',
      ],
      faqs: [
        {
          question: 'Am I a good candidate for dental implants?',
          answer: 'Most healthy adults are good candidates. We evaluate your oral health, bone density, and medical history to determine if implants are right for you.',
        },
        {
          question: 'How long does the implant process take?',
          answer: 'The complete process typically takes 3-6 months, including healing time. Some patients may qualify for same-day implants.',
        },
        {
          question: 'Are dental implants painful?',
          answer: 'The procedure is performed under local anesthesia. Most patients report minimal discomfort, which can be managed with over-the-counter pain medication.',
        },
      ],
    },
  },
  cosmetic: {
    id: 'cosmetic',
    metadata: {
      title: 'Cosmetic Dentistry - Dr. Liana Cardieri Dental Services',
      description: 'Transform your smile with our comprehensive cosmetic dentistry services. From teeth whitening to veneers, achieve the smile you\'ve always wanted.',
      keywords: 'cosmetic dentistry, teeth whitening, dental veneers, smile makeover, cosmetic dental procedures, smile enhancement',
      openGraph: {
        title: 'Cosmetic Dentistry - Dr. Liana Cardieri Dental Services',
        description: 'Transform your smile with our comprehensive cosmetic dentistry services. From teeth whitening to veneers, achieve the smile you\'ve always wanted.',
        type: 'website',
      },
    },
    content: {
      benefits: [
        'Enhanced smile appearance',
        'Increased self-confidence',
        'Natural-looking results',
        'Minimally invasive options',
        'Long-lasting improvements',
        'Personalized treatment plans',
      ],
      faqs: [
        {
          question: 'What cosmetic procedures do you offer?',
          answer: 'We offer teeth whitening, veneers, bonding, contouring, and complete smile makeovers. Each treatment is customized to your goals.',
        },
        {
          question: 'How long do cosmetic results last?',
          answer: 'Results vary by procedure. Whitening may last 6-12 months, while veneers can last 10-15 years with proper care.',
        },
        {
          question: 'Is cosmetic dentistry covered by insurance?',
          answer: 'Most cosmetic procedures are not covered by insurance. We offer flexible payment options to make treatment affordable.',
        },
      ],
    },
  },
  endodontic: {
    id: 'endodontic',
    metadata: {
      title: 'Endodontic Treatment - Dr. Liana Cardieri Dental Services',
      description: 'Expert root canal treatment and endodontic care. Save your natural teeth with our advanced endodontic procedures.',
      keywords: 'root canal, endodontic treatment, tooth pain, dental infection, tooth preservation, endodontic therapy',
      openGraph: {
        title: 'Endodontic Treatment - Dr. Liana Cardieri Dental Services',
        description: 'Expert root canal treatment and endodontic care. Save your natural teeth with our advanced endodontic procedures.',
        type: 'website',
      },
    },
    content: {
      benefits: [
        'Save natural teeth',
        'Relieve tooth pain',
        'Prevent tooth loss',
        'Advanced technology',
        'Comfortable treatment',
        'Long-term success',
      ],
      faqs: [
        {
          question: 'How do I know if I need a root canal?',
          answer: 'Common signs include severe tooth pain, sensitivity to hot/cold, swelling, and darkening of the tooth. We\'ll evaluate your symptoms to determine the best treatment.',
        },
        {
          question: 'Is root canal treatment painful?',
          answer: 'Modern techniques and anesthesia make the procedure comfortable. Most patients report feeling better immediately after treatment.',
        },
        {
          question: 'How long does a root canal take?',
          answer: 'Most root canals can be completed in 1-2 visits, depending on the complexity of the case and the tooth\'s condition.',
        },
      ],
    },
  },
  prosthetic: {
    id: 'prosthetic',
    metadata: {
      title: 'Prosthetic Dentistry - Dr. Liana Cardieri Dental Services',
      description: 'Comprehensive prosthetic dental solutions including dentures and partials. Restore your smile and chewing function with our custom prosthetic options.',
      keywords: 'prosthetic dentistry, dentures, partial dentures, dental prosthetics, tooth replacement, smile restoration',
      openGraph: {
        title: 'Prosthetic Dentistry - Dr. Liana Cardieri Dental Services',
        description: 'Comprehensive prosthetic dental solutions including dentures and partials. Restore your smile and chewing function with our custom prosthetic options.',
        type: 'website',
      },
    },
    content: {
      benefits: [
        'Custom-fitted prosthetics',
        'Natural-looking results',
        'Improved chewing function',
        'Enhanced speech',
        'Restored confidence',
        'Comfortable fit',
      ],
      faqs: [
        {
          question: 'How long does it take to get used to dentures?',
          answer: 'Most patients adapt within 2-4 weeks. We provide detailed care instructions and follow-up appointments to ensure a comfortable fit.',
        },
        {
          question: 'How do I care for my dentures?',
          answer: 'Clean dentures daily with a soft brush and denture cleaner. Remove them at night and store in water or cleaning solution.',
        },
        {
          question: 'Can I eat normally with dentures?',
          answer: 'Yes, with practice. Start with soft foods and gradually introduce harder foods as you become comfortable with your new dentures.',
        },
      ],
    },
  },
  'digital-xray': {
    id: 'digital-xray',
    metadata: {
      title: 'Digital X-Ray Services - Dr. Liana Cardieri Dental Services',
      description: 'Advanced digital X-ray technology for precise dental diagnostics. Experience safer, faster, and more detailed dental imaging.',
      keywords: 'digital x-ray, dental imaging, dental diagnostics, low radiation, dental technology, dental radiography',
      openGraph: {
        title: 'Digital X-Ray Services - Dr. Liana Cardieri Dental Services',
        description: 'Advanced digital X-ray technology for precise dental diagnostics. Experience safer, faster, and more detailed dental imaging.',
        type: 'website',
      },
    },
    content: {
      benefits: [
        'Reduced radiation exposure',
        'Instant results',
        'Enhanced image quality',
        'Environmentally friendly',
        'Better diagnostics',
        'Improved patient comfort',
      ],
      faqs: [
        {
          question: 'How safe are digital X-rays?',
          answer: 'Digital X-rays reduce radiation exposure by up to 80% compared to traditional X-rays, making them much safer for patients.',
        },
        {
          question: 'How often should I get dental X-rays?',
          answer: 'Frequency depends on your oral health needs. Most adults need X-rays every 1-2 years, while those with higher risk may need them more often.',
        },
        {
          question: 'Why are digital X-rays better?',
          answer: 'They provide clearer images, instant results, and lower radiation exposure. Images can be enhanced and shared easily with specialists if needed.',
        },
      ],
    },
  },
}; 