"use client";

import Link from 'next/link'; // Using Next.js's default Link
import { Facebook, Phone, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80 py-8">
      <div className="container max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-xl font-bold text-primary-foreground mb-4">{t('brandName')}</h3>
          <p className="text-sm">{t('tagline')}</p>
          <p className="text-sm mt-2">{t('description')}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary-foreground mb-4">{t('quickLinksTitle')}</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <li><Link href="/about" className="hover:text-primary-foreground/60 transition-colors">{tNav('about')}</Link></li>
            <li><Link href="/services" className="hover:text-primary-foreground/60 transition-colors">{tNav('services')}</Link></li>
            <li><Link href="/#contact" className="hover:text-primary-foreground/60 transition-colors">{tNav('contact')}</Link></li>
            <li><Link href="/financial-info" className="hover:text-primary-foreground/60 transition-colors">{tNav('financialInfo')}</Link></li>
             <li><Link href="/health-info" className="hover:text-primary-foreground/60 transition-colors">{tNav('healthInfo')}</Link></li>
             <li><Link href="/testimonials" className="hover:text-primary-foreground/60 transition-colors">{tNav('testimonials')}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary-foreground mb-4">{t('contactUsTitle')}</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2"> 
              <MapPin size={16} className="mt-1 shrink-0" /> 
              <span dangerouslySetInnerHTML={{ __html: t.raw('address') }} />
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} />
              <a href={`tel:${t('phoneNumber')}`} className="hover:text-primary-foreground/60 transition-colors">{t('phoneNumber')}</a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <a href={`mailto:${t('email')}`} className="hover:text-primary-foreground/60 transition-colors">{t('email')}</a>
            </li>
            <li className="flex items-center space-x-2 mt-4">
              <a 
                href="https://www.facebook.com/cardieridentaloffice" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={t('followUsFacebook')} 
                className="hover:opacity-80 transition-opacity group"
              >
                <span className="bg-brand-blue group-hover:bg-brand-pink p-2 rounded-md inline-flex items-center justify-center transition-colors">
                  <Facebook size={18} className="text-white" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-border/20 pt-8 text-center text-sm">
        <p>&copy; {currentYear} {t('brandName')}. {t('allRightsReserved')}</p>
      </div>
    </footer>
  );
}
