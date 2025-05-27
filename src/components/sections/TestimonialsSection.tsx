
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

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
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
        "{testimonial.quote}"
      </p>
    </div>
    <p className="font-bold text-lg text-primary">
      – {testimonial.author} ({testimonial.initials})
    </p>
  </Card>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-brand-light-blue">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Hear From Our Happy Patients
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover why our patients trust us with their smiles.
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

        <div className="mt-12 text-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild variant="outline" size="lg" className="text-base border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors duration-300">
            <Link href="/testimonials">See All Reviews</Link>
          </Button>
          <Button asChild size="lg" className="text-base bg-brand-blue hover:bg-brand-pink text-white transition-colors duration-300">
            {/* Placeholder link for Demandforce */}
            <a href="https://www.demandforce.com/b/kitchener-smiles-example" target="_blank" rel="noopener noreferrer">Leave a Review</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
