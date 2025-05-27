
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-brand-gray">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Meet Dr. Liana Cardieri
        </h2>
        <p className="mt-6 text-base md:text-lg text-foreground/80 font-light leading-relaxed">
          Dr. Liana Cardieri, a passionate dentist with over 20 years of experience, brings warmth and
          expertise to every patient, inspired by her multicultural roots. We’re proud
          to serve our community in English, Portuguese, and Polish, ensuring you feel
          at home. Meet the team dedicated to your smile.
        </p>
        
        <div className="mt-10 aspect-video max-w-2xl mx-auto bg-muted rounded-lg shadow-lg overflow-hidden relative group">
          {/* Placeholder for video - using an image with a play button appearance */}
          <img 
            src="https://placehold.co/600x400.png?text=Dental+Office+Tour" 
            alt="Dental office tour placeholder" 
            data-ai-hint="dental office modern"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="white" className="opacity-70 group-hover:opacity-100 transition-opacity">
              <path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>
          <Button 
            asChild 
            className="absolute top-4 right-4 bg-brand-blue hover:bg-brand-pink text-white text-sm py-2 px-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105 opacity-80 group-hover:opacity-100"
            aria-label="Call Now: 519-578-5717"
          >
            <a href="tel:519-578-5717">
              <Phone size={16} className="mr-2" /> Call Now
            </a>
          </Button>
          {/* 
            For actual video:
            <video
              className="w-full h-full"
              src="https://www.pexels.com/video/your-video-id.mp4" // Replace with actual video URL
              autoPlay
              muted
              loop
              playsInline
              controls
              poster="https://placehold.co/600x400.png" // Thumbnail
            >
              <track kind="captions" srcLang="en" src="/captions/video-captions.vtt" label="English" default />
              Your browser does not support the video tag.
            </video> 
          */}
        </div>

        <Button 
          asChild 
          variant="link" 
          className="mt-10 text-brand-blue hover:text-brand-pink text-base group transition-colors duration-300 hover:underline" // Updated text size and hover
        >
          <Link href="/about">
            Learn More About Our Team <ArrowRight className="ml-2 h-5 w-5 transition-transform" /> {/* Removed group-hover translate */}
          </Link>
        </Button>
      </div>
    </section>
  );
}
