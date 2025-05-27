import { servicesData } from '@/lib/data'; // Assuming servicesData has basic info
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, HelpCircle, Phone } from 'lucide-react';

// Placeholder for detailed service data - in a real app, this might come from a CMS or more detailed data source
const serviceDetailsMap: Record<string, { 
  title: string; 
  tagline: string;
  introduction: string; 
  benefits: string[];
  imageUrl: string;
  imageHint: string;
  faqs: { question: string; answer: string }[];
}> = {
  'zoom-whitening': {
    title: 'Zoom Whitening',
    tagline: 'Achieve a Dazzling Smile in Just One Visit',
    introduction: 'Our Zoom Whitening treatment is a fast, safe, and effective way to brighten your teeth by several shades. Get a radiant, confident smile with professional results you can trust.',
    benefits: [
      'Noticeably whiter teeth in about an hour.',
      'Safe procedure performed by dental professionals.',
      'Long-lasting results with proper care.',
      'Boosts confidence and enhances your smile.'
    ],
    imageUrl: 'https://placehold.co/800x400.png',
    imageHint: 'teeth whitening procedure',
    faqs: [
      { question: 'Is Zoom Whitening painful?', answer: 'Most patients experience little to no discomfort. Some may have temporary sensitivity, which usually subsides quickly. We take measures to ensure your comfort throughout the procedure.' },
      { question: 'How long do the results last?', answer: 'With good oral hygiene and avoiding staining foods/drinks, results can last for a year or more. Touch-up treatments can help maintain your bright smile.' },
      { question: 'Is it safe for my teeth?', answer: 'Yes, Zoom Whitening is a safe procedure when performed by a qualified dental professional. It does not damage tooth enamel.' },
    ],
  },
  'dental-implants': {
    title: 'Dental Implants',
    tagline: 'Restore Your Smile with Lasting Confidence',
    introduction: 'Regain confidence and full dental function with our expert dental implants. Designed for lasting comfort and a natural appearance, implants are the gold standard for replacing missing teeth.',
    benefits: [
      'Permanent solution for missing teeth.',
      'Looks, feels, and functions like natural teeth.',
      'Prevents bone loss in the jaw.',
      'Improves speech and chewing ability.'
    ],
    imageUrl: 'https://placehold.co/800x400.png',
    imageHint: 'dental implant model',
    faqs: [
      { question: 'Am I a candidate for dental implants?', answer: 'Most people with good general and oral health are candidates. A consultation with Dr. Cardieri will determine if implants are right for you.' },
      { question: 'Is the implant procedure painful?', answer: 'We use local anesthesia and offer sedation options to ensure your comfort. Post-procedure discomfort is typically manageable with over-the-counter pain relievers.' },
      { question: 'How long does the process take?', answer: 'The entire process can take several months, allowing for healing and integration of the implant with the jawbone. Each case is unique.' },
    ],
  },
  // Add other services similarly
  'fillings': {
    title: 'Dental Fillings',
    tagline: 'Restore and Protect Your Teeth',
    introduction: 'We offer both silver (amalgam) and tooth-colored (resin composite) fillings to repair cavities and restore the strength and integrity of your teeth.',
    benefits: [
        'Stops the progression of tooth decay.',
        'Restores tooth structure and function.',
        'Tooth-colored fillings offer a natural appearance.',
        'Durable and long-lasting solutions.'
    ],
    imageUrl: 'https://placehold.co/800x400.png',
    imageHint: 'dental filling types',
    faqs: [
        { question: 'Which type of filling is best for me?', answer: 'Dr. Cardieri will discuss the pros and cons of each material and recommend the best option based on the location and extent of the decay, cost considerations, and your aesthetic preferences.' },
        { question: 'Do fillings hurt?', answer: 'The area will be numbed with local anesthesia before the procedure, so you should not feel any pain during the filling process.' },
    ],
  },
  'crowns-bridges': {
    title: 'Crowns & Bridges',
    tagline: 'Strengthen and Replace Teeth with Precision',
    introduction: 'Dental crowns protect and strengthen damaged teeth, while bridges replace one or more missing teeth. We offer high-quality, custom-fitted restorations, including same-day crown options.',
    benefits: [
        'Restores the shape, size, and strength of a tooth (crowns).',
        'Replaces missing teeth, restoring your smile and chewing ability (bridges).',
        'Prevents adjacent teeth from shifting.',
        'Durable and aesthetically pleasing options available.'
    ],
    imageUrl: 'https://placehold.co/800x400.png',
    imageHint: 'dental crowns and bridges',
    faqs: [
        { question: 'What are same-day crowns?', answer: 'Using advanced CEREC technology, we can design, create, and place a custom ceramic crown in a single appointment, saving you time and multiple visits.' },
        { question: 'How do I care for my crown or bridge?', answer: 'Good oral hygiene, including brushing, flossing, and regular dental check-ups, is essential to maintain the longevity of your crown or bridge.' },
    ],
  },
  'family-dentistry': {
    title: 'Family Dentistry',
    tagline: 'Comprehensive Dental Care for All Ages',
    introduction: 'From your child\'s first visit to grandparent\'s routine care, we provide a full range of dental services for the entire family in a comfortable and friendly environment.',
    benefits: [
      'Convenient care for the whole family in one location.',
      'Focus on preventative care and education.',
      'Early detection and treatment of dental issues.',
      'Building lifelong healthy oral habits.'
    ],
    imageUrl: 'https://placehold.co/800x400.png',
    imageHint: 'happy family at dentist',
    faqs: [
      { question: 'When should my child first see a dentist?', answer: 'The Canadian Dental Association recommends a child\'s first dental visit by age one, or within six months of their first tooth erupting.' },
      { question: 'What services are included in family dentistry?', answer: 'This includes regular check-ups, cleanings, fluoride treatments, sealants, fillings, and guidance on oral hygiene specific to different age groups.' },
    ],
  },
  'cosmetic-dentistry': {
    title: 'Cosmetic Dentistry',
    tagline: 'Transform Your Smile, Boost Your Confidence',
    introduction: 'Enhance the appearance of your smile with our wide range of cosmetic dental treatments. Dr. Cardieri will work with you to create a personalized plan to achieve your dream smile.',
    benefits: [
      'Improve tooth color, shape, size, and alignment.',
      'Boost self-esteem and confidence.',
      'Treatments tailored to your specific aesthetic goals.',
      'Utilizes modern techniques and materials for natural-looking results.'
    ],
    imageUrl: 'https://placehold.co/800x400.png',
    imageHint: 'woman with perfect smile',
    faqs: [
      { question: 'What cosmetic procedures do you offer?', answer: 'We offer teeth whitening, veneers, dental bonding, gum contouring, and smile makeovers, among other services.' },
      { question: 'How do I know which cosmetic treatment is right for me?', answer: 'A consultation with Dr. Cardieri is the first step. She will assess your smile, discuss your goals, and recommend the most suitable options.' },
    ],
  },
};

export async function generateStaticParams() {
  // Include keys from serviceDetailsMap as well if they are not in servicesData
  const allServiceSlugs = new Set([...servicesData.map(s => s.id), ...Object.keys(serviceDetailsMap)]);
  return Array.from(allServiceSlugs).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = serviceDetailsMap[params.slug] || servicesData.find(s => s.id === params.slug);
  if (!service) {
    return { title: 'Service Not Found' };
  }
  return {
    title: `${service.title} - Kitchener Smiles`,
    description: (service as any).introduction || (service as any).description,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const serviceDetail = serviceDetailsMap[params.slug];
  
  if (!serviceDetail) {
    // Fallback if detailed info isn't found, try to get basic info
    const basicService = servicesData.find(s => s.id === params.slug);
    if (!basicService) {
      return <div className="container mx-auto py-12 px-4 text-center">Service not found.</div>;
    }
    // Render a basic version if only basic info is available
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-primary mb-4">{basicService.title}</h1>
        <p className="text-lg text-foreground/80 mb-8">{basicService.description}</p>
        <p>More details for this service are coming soon!</p>
        <div className="mt-8">
          <Button asChild className="bg-brand-blue hover:bg-brand-pink text-white">
            <Link href="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-light-blue py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">{serviceDetail.title}</h1>
          <p className="text-xl text-brand-blue font-semibold">{serviceDetail.tagline}</p>
        </header>

        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl mb-12 border-4 border-white">
          <Image src={serviceDetail.imageUrl} alt={serviceDetail.title} layout="fill" objectFit="cover" data-ai-hint={serviceDetail.imageHint} />
        </div>

        <section className="mb-12 bg-background p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">What is {serviceDetail.title}?</h2>
          <p className="text-foreground/80 leading-relaxed font-light">{serviceDetail.introduction}</p>
        </section>

        <section className="mb-12 bg-background p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-6">Key Benefits</h2>
          <ul className="space-y-3">
            {serviceDetail.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                <span className="text-foreground/80 font-light">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {serviceDetail.faqs && serviceDetail.faqs.length > 0 && (
          <section className="mb-12 bg-background p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
              <HelpCircle className="h-7 w-7 text-brand-blue mr-3"/>
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {serviceDetail.faqs.map((faq, index) => (
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
        )}

        <section className="text-center py-10 bg-primary/10 rounded-lg shadow-lg border border-primary/20">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            Interested in {serviceDetail.title}?
          </h2>
          <p className="text-foreground/80 mb-8 max-w-xl mx-auto font-light">
            Contact us today to learn more or to schedule a consultation with Dr. Liana Cardieri.
          </p>
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
            <Link href="/#contact">
              <Phone className="mr-2 h-5 w-5" /> Book Your Consultation
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
