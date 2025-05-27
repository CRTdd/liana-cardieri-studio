import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { servicesData, type Service } from '@/lib/data';
import { ArrowRight, Phone } from 'lucide-react';

const ServiceCard = ({ service }: { service: Service }) => (
  <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-102 bg-background rounded-xl border-border">
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

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Your Perfect Smile Starts Here
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            We offer a comprehensive range of dental services to meet all your needs. Explore some of our popular treatments below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
         <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105">
            <Link href="/services">
              Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
