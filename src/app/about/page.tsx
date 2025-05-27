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
              <Image src="https://placehold.co/400x400.png" alt="Dr. Liana Cardieri" layout="fill" objectFit="cover" data-ai-hint="dentist portrait professional" />
            </div>
            <div className="text-foreground/80 font-light">
              <p className="mb-4 text-lg">
                Dr. Liana Cardieri is a highly experienced and compassionate dentist dedicated to providing top-quality dental care. With over 20 years in the field, she combines her extensive knowledge with a gentle touch, ensuring every patient feels comfortable and well-cared for.
              </p>
              <p className="mb-4">
                Inspired by her multicultural background, Dr. Cardieri is fluent in English, Portuguese, and Polish. This allows her to connect with a diverse range of patients and provide care that is truly personalized. She believes in continuous learning and stays updated with the latest advancements in dentistry to offer the best treatment options.
              </p>
              <p>
                Her philosophy is centered on patient education and preventive care, empowering individuals to maintain optimal oral health for life. Dr. Cardieri is an active member of the Ontario Dental Association (ODA) and is passionate about serving the Kitchener community.
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
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Expert Hygienists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard 
              name="Sofia Alves" 
              title="Registered Dental Hygienist" 
              imageUrl="https://placehold.co/300x300.png"
              imageHint="hygienist portrait friendly"
              bio="Sofia is dedicated to providing thorough cleanings and educating patients on aural hygiene. She speaks Portuguese and English." 
            />
            <TeamMemberCard 
              name="Marek Kowalski" 
              title="Registered Dental Hygienist" 
              imageUrl="https://placehold.co/300x300.png" 
              imageHint="hygienist portrait smiling"
              bio="Marek is passionate about preventive care and enjoys helping patients achieve healthy smiles. He is fluent in Polish and English." 
            />
             <TeamMemberCard 
              name="Emily Chen" 
              title="Dental Assistant" 
              imageUrl="https://placehold.co/300x300.png" 
              imageHint="assistant portrait professional"
              bio="Emily ensures every visit runs smoothly and assists Dr. Cardieri with various procedures, always with a smile." 
            />
          </div>
        </section>

        <section className="text-center bg-background p-8 md:p-12 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Modern & Welcoming Office</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image src="https://placehold.co/600x400.png" alt="Dental office reception" layout="fill" objectFit="cover" data-ai-hint="dental reception modern" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image src="https://placehold.co/600x400.png" alt="Dental treatment room" layout="fill" objectFit="cover" data-ai-hint="dental chair clean" />
            </div>
          </div>
          <p className="text-lg text-foreground/80 font-light mb-8 max-w-2xl mx-auto">
            Step into a calm and inviting atmosphere where your comfort is our priority. Our state-of-the-art facility is equipped with the latest dental technology to ensure you receive the highest standard of care.
          </p>
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
            <Link href="/#contact">Contact Us to Schedule Your Visit</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
