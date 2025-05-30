"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { testimonialsData, type Testimonial } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

// Removed metadata export from here

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const t = useTranslations('data.testimonials');
  const tHeader = useTranslations('Header');
  const index = parseInt(testimonial.id) - 1;
  
  return (
    <Card className="h-full bg-white/90 backdrop-blur-sm shadow-xl rounded-xl border-border/50 p-6 md:p-8 flex flex-col justify-between items-center text-center">
      <div>
        <Quote className="h-10 w-10 text-brand-pink mb-4 opacity-50 transform -scale-x-100 mx-auto" />
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-6 w-6 ${i < testimonial.rating ? 'text-brand-pink fill-brand-pink' : 'text-muted-foreground/50'}`}
            />
          ))}
        </div>
        <p className="text-base md:text-lg font-light text-foreground/80 italic mb-6">
          "{t(`${index}.quote`)}"
        </p>
      </div>
      <p className="font-bold text-lg md:text-xl text-primary">
        – {t(`${index}.author`)} ({testimonial.initials})
      </p>
    </Card>
  );
};

export default function TestimonialsPage() {
  const t = useTranslations('TestimonialsPage');
  const tHeader = useTranslations('Header');
  
  return (
    <div className="bg-brand-light-blue py-12 md:py-20">
      <div className="container mx-auto px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-light">
            {t('subtitle')}
          </p>
        </section>

        {/* Option 1: Carousel for all testimonials */}
        <div className="mb-16 md:hidden"> {/* Show carousel on smaller screens */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="p-4">
                  <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Option 2: Grid layout for all testimonials on larger screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>


        <section className="mt-16 text-center bg-background p-8 md:p-12 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-primary mb-6">{t('shareExperience.title')}</h2>
          <p className="text-lg text-foreground/80 font-light mb-8 max-w-2xl mx-auto">
            {t('shareExperience.description')}
          </p>
          <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
            <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
              <a href={`https://www.demandforce.com/b/${tHeader('brandName').toLowerCase().replace(/\s+/g, '-')}`} target="_blank" rel="noopener noreferrer">{t('shareExperience.reviewButton')}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              <Link href="/#contact">{t('shareExperience.contactButton')}</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
