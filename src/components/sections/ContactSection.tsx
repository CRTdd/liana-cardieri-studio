
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Facebook, Clock, Download, Award, Users } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

const TrustBadge = ({ Icon, text }: { Icon: React.ElementType; text: string }) => (
  <div className="flex items-center space-x-2 bg-secondary/50 p-2 rounded-md">
    <Icon className="h-5 w-5 text-primary" />
    <span className="text-sm font-medium text-foreground/80">{text}</span>
  </div>
);

export default function ContactSection() {
  const t = useTranslations("ContactSection");
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactFormSchema = z.object({
    name: z.string().min(2, { message: t("formValidation.nameMin") }),
    email: z.string().email({ message: t("formValidation.emailValid") }),
    phone: z.string().optional(),
    message: z.string().min(10, { message: t("formValidation.messageMin") }).max(500, { message: t("formValidation.messageMax") }),
    gdprConsent: z.boolean().refine(val => val === true, { message: t("formValidation.gdprRequired") }),
  });

  type ContactFormValues = z.infer<typeof contactFormSchema>;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      gdprConsent: false,
    },
  });

  async function onSubmit(data: ContactFormValues) {
    console.log(data);
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    setFormSubmitted(true);
    toast({
      title: t("formThankYouTitle"),
      description: t("formThankYouMessage"),
      variant: "default",
    });
    form.reset(); 
  }

  const phoneNumber = t('phoneNumber');
  const email = t('email');
  const address = t.raw('address'); // Use t.raw for HTML content

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("headline")}</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Details & Map */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">{t("contactInfoTitle")}</h3>
              <ul className="space-y-3 text-foreground/80 font-light">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-brand-blue mt-1 shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: address }} />
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-brand-blue shrink-0" />
                  <a href={`tel:${phoneNumber}`} className="hover:text-brand-blue transition-colors">{phoneNumber}</a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-blue shrink-0" />
                  <a href={`mailto:${email}`} className="hover:text-brand-blue transition-colors">{email}</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">{t("officeHoursTitle")}</h3>
              <ul className="space-y-2 text-foreground/80 font-light">
                <li className="flex items-center space-x-3"><Clock className="h-5 w-5 text-brand-blue shrink-0" /><span>{t("hoursMF")}</span></li>
                <li className="flex items-center space-x-3"><Clock className="h-5 w-5 text-brand-blue shrink-0" /><span>{t("hoursSat")}</span></li>
                <li className="flex items-center space-x-3"><Clock className="h-5 w-5 text-brand-blue shrink-0" /><span>{t("hoursSun")}</span></li>
              </ul>
            </div>
             <div className="mt-6">
                <a 
                  href="https://www.facebook.com/cardieridentaloffice" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-brand-blue hover:text-brand-pink group transition-colors"
                  aria-label={t("followFacebookAria")}
                >
                  <span className="bg-brand-blue group-hover:bg-brand-pink p-2 rounded-md inline-flex items-center justify-center mr-2 transition-colors">
                    <Facebook className="h-5 w-5 text-white" />
                  </span>
                  {t("followFacebook")}
                </a>
              </div>
            
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.8000000000005!2d-80.4924!3d43.4516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf40000000001%3A0x0!2sKitchener%2C%20ON!5e0!3m2!1sen!2sca!4v1622000000000!5m2!1sen!2sca"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("mapTitle")}
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="bg-secondary/30 p-6 sm:p-8 rounded-xl shadow-xl border border-border">
            <div className="flex flex-col sm:flex-row gap-2 items-center mb-6">
                <TrustBadge Icon={Award} text={t("formTrustBadgeExperience")} />
                <TrustBadge Icon={Users} text={t("formTrustBadgeODA")} />
            </div>
            {formSubmitted ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">{t("formThankYouTitle")}</h3>
                <p className="text-foreground/80 mb-6">{t("formThankYouMessage")}</p>
                <Button asChild className="bg-brand-blue hover:bg-brand-pink text-white transition-all duration-300 transform hover:scale-105">
                  <a href="/documents/FreeDentalCareGuide.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    {t("formDownloadGuideButton")}
                  </a>
                </Button>
                 <Button variant="link" onClick={() => setFormSubmitted(false)} className="mt-4 text-brand-blue">
                  {t("formSendAnotherMessageButton")}
                </Button>
              </div>
            ) : (
              <>
                <p className="text-sm text-foreground/70 mb-2 text-center bg-primary/10 p-3 rounded-md border border-primary/20"
                   dangerouslySetInnerHTML={{ __html: t.raw('formFreeGuidePitch') }} />
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("formLabelName")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("formPlaceholderName")} {...field} className="bg-background border-input focus:border-primary focus:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("formLabelEmail")}</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder={t("formPlaceholderEmail")} {...field} className="bg-background border-input focus:border-primary focus:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("formLabelPhone")}</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder={t("formPlaceholderPhone")} {...field} className="bg-background border-input focus:border-primary focus:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("formLabelMessage")}</FormLabel>
                          <FormControl>
                            <Textarea placeholder={t("formPlaceholderMessage")} {...field} rows={5} className="bg-background border-input focus:border-primary focus:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="gdprConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4 bg-background">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="font-normal text-foreground/80">
                              {t("formGdprConsent")}
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full bg-brand-blue hover:bg-brand-pink text-white text-lg transition-all duration-300 transform hover:scale-105" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? t("formSubmittingButton") : t("formSubmitButton")}
                    </Button>
                  </form>
                </Form>
                <p className="mt-4 text-xs text-muted-foreground text-center">
                  {t("formReplyPromise")}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

