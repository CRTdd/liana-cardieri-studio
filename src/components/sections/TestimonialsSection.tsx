"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { testimonialsData, type Testimonial } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from 'next-intl';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const t = useTranslations();
  
  return (
    <Card className="h-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border-border/50 p-6 md:p-8 flex flex-col justify-between items-center text-center mx-auto max-w-sm">
      <div>
        <Quote className="h-8 w-8 text-brand-pink mb-4 opacity-50 transform -scale-x-100" />
        <div className="flex justify-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < testimonial.rating ? 'text-brand-pink fill-brand-pink' : 'text-muted-foreground/50'}`}
            />
          ))}
        </div>
        <p className="text-base font-light text-foreground/80 italic mb-6">
          "{t(testimonial.quoteKey)}"
        </p>
      </div>
      <p className="font-bold text-lg text-primary">
        – {t(testimonial.authorKey)} ({testimonial.initials})
      </p>
    </Card>
  );
};

export default function TestimonialsSection() {
  const t = useTranslations('TestimonialsSection');
  
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-brand-light-blue">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('headline')}
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          spaceBetween={30}
          grabCursor={true}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="pb-12" // Add padding bottom for pagination
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="p-4">
                <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 text-center">
          <Link 
            href="/testimonials" 
            className="inline-flex items-center text-brand-blue hover:text-brand-pink transition-colors duration-300 group"
          >
            <span className="text-lg font-medium">{t('seeAllReviewsButton')}</span>
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
