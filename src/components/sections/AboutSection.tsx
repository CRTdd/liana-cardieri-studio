import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('AboutSection');

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="https://www.cardieridental.ca/wp-content/uploads/2021/02/File_005-2-scaled-1140x417.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for better text readability */}
      </div>
      <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {t('headline')}
        </h2>
        <p className="mt-6 text-base md:text-lg text-foreground/80 font-light leading-relaxed">
          {t('description')}
        </p>
        
        <div className="mt-10 aspect-video max-w-2xl mx-auto bg-muted rounded-lg shadow-lg overflow-hidden relative group">
          {/* Placeholder for video - using an image with a play button appearance */}
          <img 
            // src="https://placehold.co/600x400.png?text=Dental+Office+Tour" 
            src="https://www.cardieridental.ca/wp-content/uploads/2021/02/File_003-3-scaled-1140x417.jpeg" 
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
              <Phone size={16} className="mr-2" /> {t('videoCta')}
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
          className="mt-10 text-brand-blue hover:text-brand-pink text-base group transition-colors duration-300 hover:underline"
        >
          <Link href="/about">
            {t('learnMoreButton')} <ArrowRight className="ml-2 h-5 w-5 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
