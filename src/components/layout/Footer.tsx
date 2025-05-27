import Link from "next/link";
import { Facebook, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-xl font-bold text-primary-foreground mb-4">Kitchener Smiles</h3>
          <p className="text-sm">Dr. Liana Cardieri Family & Cosmetic Dentistry</p>
          <p className="text-sm mt-2">Providing gentle, expert dental care for the whole family. We speak English, Portuguese, and Polish.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary-foreground mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-primary-foreground/60 transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary-foreground/60 transition-colors">Our Services</Link></li>
            <li><Link href="/#contact" className="hover:text-primary-foreground/60 transition-colors">Contact & Directions</Link></li>
            <li><Link href="/financial-info" className="hover:text-primary-foreground/60 transition-colors">Financial Info</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary-foreground mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>123 Dental St, Kitchener, ON N2A 1B3</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} />
              <a href="tel:519-578-5717" className="hover:text-primary-foreground/60 transition-colors">519-578-5717</a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <a href="mailto:info@kitchenersmiles.ca" className="hover:text-primary-foreground/60 transition-colors">info@kitchenersmiles.ca</a>
            </li>
            <li className="flex items-center space-x-2 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary-foreground/60 transition-colors">
                <Facebook size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-border/20 pt-8 text-center text-sm">
        <p>&copy; {currentYear} Kitchener Smiles. All rights reserved.</p>
        <p className="mt-1">Website by Firebase Studio</p>
      </div>
    </footer>
  );
}
