"use client";

import { whyChooseUsData, type WhyChooseUsPoint } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const ChoicePoint = ({ point, isVisible, index }: { point: WhyChooseUsPoint, isVisible: boolean, index: number }) => {
  const t = useTranslations();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.7,
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      <Card className="text-center bg-background shadow-lg rounded-xl border-border h-full flex flex-col">
        <CardHeader className="flex flex-col items-center pb-4 flex-none">
          <motion.div 
            className="p-4 bg-brand-blue/10 rounded-full mb-4 inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <point.Icon className="h-12 w-12 text-brand-blue" />
          </motion.div>
          <CardTitle className="text-xl font-bold text-primary">{t(point.titleKey)}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex items-center justify-center">
          <p className="text-foreground/80 text-base font-light">{t(point.descriptionKey)}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('WhyChooseUsSection');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('headline')}
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsData.map((point, index) => (
            <ChoicePoint 
              key={point.id} 
              point={point} 
              isVisible={isVisible} 
              index={index}
            />
          ))}
        </div>
        <motion.p 
          className="mt-12 text-center text-md font-light text-foreground/80 tracking-wide"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {t('tagline')}
        </motion.p>
      </div>
    </section>
  );
}
