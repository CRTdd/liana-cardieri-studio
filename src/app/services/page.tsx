import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { servicesData, type Service } from '@/lib/data'; // Assuming servicesData includes all services
import { ArrowRight, Phone } from 'lucide-react';

export const metadata = {
  title: 'Our Dental Services - Kitchener Smiles',
  description: 'Explore the comprehensive dental services offered at Kitchener Smiles, including cosmetic dentistry, family care, Zoom whitening, crowns, bridges, and more.',
};

const ServiceCard = ({ service }: { service: Service }) => (
  <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-102 bg-background rounded-xl border-border group">
    <div className="relative h-56 w-full">
      <Image
        src={service.image}
        alt={service.title}
        data-ai-hint={service.imageHint}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <CardHeader className="p-6">
      <CardTitle className="text-2xl font-bold text-brand-blue flex items-center">
        {service.Icon && <service.Icon className="mr-3 h-7 w-7 text-brand-blue" />}
        {service.title}
      </CardTitle>
      {service.trustBadge && (
        <p className="text-sm text-brand-pink font-semibold mt-1">{service.trustBadge}</p>
      )}
    </CardHeader>
    <CardContent className="p-6 pt-0 flex-grow">
      <p className="text-foreground/80 text-base font-light">{service.description}</p>
    </CardContent>
    <CardFooter className="p-6 bg-secondary/30 flex flex-col sm:flex-row sm:justify-between items-center space-y-3 sm:space-y-0">
      <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-full sm:w-auto transition-colors duration-300 group">
        <Link href={service.learnMoreLink}>
          Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
      <Button asChild className="bg-brand-blue hover:bg-brand-pink text-white w-full sm:w-auto transition-colors duration-300 group">
        <a href="tel:519-578-5717">
          <Phone className="mr-2 h-4 w-4" /> Call to Discuss
        </a>
      </Button>
    </CardFooter>
  </Card>
);

export default function ServicesPage() {
  // Add more services to servicesData if needed for a complete list
  const allServices = [
    ...servicesData,
    {
      id: 'implants',
      title: 'Dental Implants',
      description: 'Regain confidence with our expert dental implants, designed for lasting comfort and a natural look.',
      image: 'https://placehold.co/400x300.png',
      imageHint: 'dental implant model',
      learnMoreLink: '/services/dental-implants',
      Icon: servicesData[0]?.Icon || ArrowRight, // Placeholder icon
    },
    {
      id: 'family-dentistry',
      title: 'Family Dentistry',
      description: 'Comprehensive dental care for all ages, from routine check-ups to advanced treatments.',
      image: 'https://placehold.co/400x300.png',
      imageHint: 'family smiling dentist',
      learnMoreLink: '/services/family-dentistry',
      Icon: servicesData[1]?.Icon || ArrowRight, // Placeholder icon
    },
     {
      id: 'cosmetic-dentistry',
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with our range of cosmetic treatments, including veneers, bonding, and more.',
      image: 'https://placehold.co/400x300.png',
      imageHint: 'beautiful smile closeup',
      learnMoreLink: '/services/cosmetic-dentistry',
      Icon: servicesData[2]?.Icon || ArrowRight, // Placeholder icon
    }
  ];


  return (
    <div className="bg-brand-light-blue py-12 md:py-20">
      <div className="container mx-auto px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Dental Services
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-light">
            At Kitchener Smiles, we offer a wide array of dental treatments to cater to your individual needs and help you achieve optimal oral health and a beautiful smile.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <section className="mt-16 text-center bg-background p-8 md:p-12 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Improve Your Smile?</h2>
          <p className="text-lg text-foreground/80 font-light mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your dental needs or to schedule an appointment with Dr. Liana Cardieri.
          </p>
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
            <Link href="/#contact">
              <Phone className="mr-2 h-5 w-5" /> Book Your Appointment
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
