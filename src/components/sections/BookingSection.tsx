
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar'; // For visual styling
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function BookingSection() {
  return (
    <section id="booking" className="py-16 md:py-24 bg-foreground text-background">
      <div className="container max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
          Your Perfect Smile is Just a Call Away!
        </h2>
        <p className="mt-6 text-base md:text-lg text-background/80 font-light">
          Online booking is coming soon – for now, please call <a href="tel:519-578-5717" className="font-semibold text-brand-cyan hover:underline">519-578-5717</a> or use our contact form to secure your appointment with our caring team. We’ll make scheduling easy and stress-free.
        </p>

        <Card className="mt-10 bg-background text-foreground p-6 sm:p-8 rounded-lg shadow-xl opacity-80">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Book an Appointment (Coming Soon)</CardTitle>
            <CardDescription className="text-muted-foreground">This form is currently for demonstration only.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <Label htmlFor="name-disabled" className="text-muted-foreground">Full Name</Label>
                <Input id="name-disabled" placeholder="Your Name" disabled className="bg-muted/50 cursor-not-allowed" />
              </div>
              <div className="space-y-2 text-left">
                <Label htmlFor="email-disabled" className="text-muted-foreground">Email Address</Label>
                <Input id="email-disabled" type="email" placeholder="your@email.com" disabled className="bg-muted/50 cursor-not-allowed" />
              </div>
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="date-disabled" className="text-muted-foreground">Preferred Date</Label>
              {/* Display a disabled calendar for visual effect */}
              <div className="rounded-md border border-input p-3 bg-muted/50 cursor-not-allowed opacity-50">
                 <Calendar mode="single" disabled/>
              </div>
            </div>
            <Button 
              type="button" // Important: not submit
              size="lg" 
              className="w-full bg-brand-blue hover:bg-brand-pink text-white text-base py-3 px-6 rounded-md shadow-md transition-all duration-300 transform hover:scale-105" // Added text-base
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Book Your Visit - links to contact form"
            >
              Book Your Visit
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
