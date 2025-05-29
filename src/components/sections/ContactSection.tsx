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
import { Phone, Mail, MapPin, Clock } from "lucide-react";
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

  const translatedPhoneNumber = t('phoneNumber');
  const translatedEmail = t('email');
  const translatedAddress = t.raw('address');

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("headline")}</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start min-h-[600px]">
          {/* Contact Details & Map */}
          <div className="flex flex-col h-full space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">{t("contactInfoTitle")}</h3>
              <ul className="space-y-3 text-foreground/80 font-light">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-brand-blue mt-1 shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: translatedAddress }} />
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-brand-blue shrink-0" />
                  <a href={`tel:${translatedPhoneNumber}`} className="hover:text-brand-blue transition-colors">{translatedPhoneNumber}</a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-blue shrink-0" />
                  <a href={`mailto:${translatedEmail}`} className="hover:text-brand-blue transition-colors">{translatedEmail}</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">{t("officeHoursTitle")}</h3>
              <ul className="space-y-2 text-foreground/80 font-light">
                <li className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-brand-blue shrink-0" />
                  <span>{t("hoursMondayThursday")}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-brand-blue shrink-0" />
                  <span>{t("hoursTuesdayWednesday")}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-brand-blue shrink-0" />
                  <span>{t("hoursFriday")}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-brand-blue shrink-0" />
                  <span>{t("hoursSaturday")}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-brand-blue shrink-0" />
                  <span>{t("hoursSundayHolidays")}</span>
                </li>
              </ul>
            </div>

            {/* Map fills remaining space */}
            <div className="flex-1 min-h-[220px]">
              <div className="w-full h-full rounded-lg overflow-hidden shadow-lg border border-border" style={{ minHeight: 220 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5793.801502348399!2d-80.51630912246563!3d43.441788771113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf44ee53599ff%3A0xd64d31f3b4bc82c8!2sDr.%20Liana%20Cardieri%20Family%20and%20Cosmetic%20Dentistry!5e0!3m2!1sen!2sca!4v1748527385298!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 220, height: "100%" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("mapTitle")}
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 p-6 sm:p-8 rounded-xl shadow-xl border border-border">
            {formSubmitted ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">{t("formThankYouTitle")}</h3>
                <p className="text-foreground/80 mb-6">{t("formThankYouMessage")}</p>
                 <Button variant="link" onClick={() => setFormSubmitted(false)} className="mt-4 text-brand-blue">
                  {t("formSendAnotherMessageButton")}
                </Button>
              </div>
            ) : (
              <>
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