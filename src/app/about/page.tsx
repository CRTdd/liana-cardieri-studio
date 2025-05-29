import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award, Users, Smile } from 'lucide-react';

export const metadata = {
  title: 'About Us - Kitchener Smiles',
  description: 'Learn more about Dr. Liana Cardieri, our dedicated team of hygienists, and our modern dental office in Kitchener.',
};

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
  return (
    <div className="bg-brand-light-blue py-12 md:py-20">
      <div className="container mx-auto px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the Team at Kitchener Smiles
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-light">
            Our dedicated professionals are committed to providing you with exceptional dental care in a friendly and comfortable environment.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Dr. Liana Cardieri</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-background p-8 rounded-xl shadow-xl">
            <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-md shrink-0">
              <Image src="/images/dr.cardieri.jpg" alt="Dr. Liana Cardieri" layout="fill" objectFit="cover" data-ai-hint="dentist portrait professional" />
            </div>
            <div className="text-foreground/80 font-light">
              <p className="mb-4 text-lg">
                Dr. Liana Cardieri is a graduate of the Federal University of Ceara, Brazil and has over 20 years experience as a family and cosmetic dentist. Since 2012 she is proudly serving her patients on her own practice in Kitchener, ON.
              </p>
              <p className="mb-4">
                The love for Dentistry has inspired her to continue to take several courses such as prosthodontics, cosmetic restorative dentistry and dental implants to keep her up to date on the most current dental practices and techniques. Dr. Cardieri can perform dental implants placement, root canals, restorations, crowns, fixed bridges and veneer treatment with very natural results. Over the years she has helped to create beautiful smiles!
              </p>
              <p>
                From simple to complex treatments, it is very common to hear from patients that she is very gentle and how painless the treatment was! Dr. Liana has a beautiful family and is a caring mother of a boy, a girl and a playful dog, Lino. She loves music, movies and travelling with her family.
              </p>
              <div className="mt-6 flex space-x-4">
                <div className="flex items-center text-primary">
                  <Award className="mr-2 h-6 w-6" /> 20+ Years Experience
                </div>
                <div className="flex items-center text-primary">
                  <Users className="mr-2 h-6 w-6" /> ODA Member
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Dental Hygienists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeamMemberCard 
              name="Margaret Rapacz, RDH" 
              title="Registered Dental Hygienist" 
              imageUrl="/images/Margaret.jpg"
              imageHint="hygienist portrait friendly"
              bio="Margaret is an experienced dental hygienist trained to identify gum disease and educate patients on oral hygiene. She is dedicated to keeping your teeth and gums healthy." 
            />
            <TeamMemberCard 
              name="Connie Roth, RDH" 
              title="Registered Dental Hygienist" 
              imageUrl="/images/connie.jpg" 
              imageHint="hygienist portrait smiling"
              bio="Connie is passionate about preventive care and enjoys helping patients achieve healthy smiles. She is committed to providing thorough cleanings and patient education." 
            />
          </div>
        </section>

        <section className="text-center bg-background p-8 md:p-12 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Office</h2>
          <div className="flex justify-center mb-8">
            <div className="relative h-64 w-full max-w-2xl rounded-lg overflow-hidden shadow-md">
              <Image src="/images/dental-office.jpg" alt="Dental office" layout="fill" objectFit="cover" data-ai-hint="dental office modern" />
            </div>
          </div>
          <p className="text-lg text-foreground/80 font-light mb-8 max-w-2xl mx-auto">
            Our newly renovated office offers a comfortable and safe environment for your dental appointments. Our dedicated team of dental assistants, hygienists and receptionists are highly trained in the latest infection control protocols so our patients can rest assured their protection and health is our top priority. All of our six operatories are closed with glass walls and are equipped with HEPA air purifiers to prevent the spread of germs and viruses through-out the office.
          </p>
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
            <Link href="/#contact">Contact Us to Schedule Your Visit</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
