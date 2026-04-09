"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { FormEvent } from "react";
import { toast } from "sonner";

import { firmInfo, sectionContent } from "@/data/mock";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    toast.success(sectionContent.contact.successTitle, {
      description: sectionContent.contact.successDescription,
    });

    form.reset();
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-20" aria-label="Contact section">
      <div className="section-frame">
        <h2 className="section-title">{sectionContent.contact.title}</h2>
        <div className="gold-divider" />
        <p className="section-subtitle">{sectionContent.contact.subtitle}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                {sectionContent.contact.officeDetailsTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-brand-light">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <span>{firmInfo.address}</span>
              </p>
              <p className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <a href={`tel:${firmInfo.phone}`} className="hover:text-brand-navy">
                  {firmInfo.phone}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                <a href={`mailto:${firmInfo.email}`} className="hover:text-brand-navy">
                  {firmInfo.email}
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href={firmInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-brand-navy hover:text-brand-gold"
                >
                  {sectionContent.contact.linkedinText}
                </a>
              </p>

              <div className="overflow-hidden rounded-lg border border-brand-navy/15">
                <iframe
                  title="Office location map placeholder"
                  src="https://www.google.com/maps?q=Jaipur%20Rajasthan&output=embed"
                  className="h-[240px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                {sectionContent.contact.formTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-text">
                    {sectionContent.contact.formLabels.name}
                  </label>
                  <Input id="name" name="name" required aria-label="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-text">
                    {sectionContent.contact.formLabels.email}
                  </label>
                  <Input id="email" name="email" type="email" required aria-label="Your email" />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-text">
                    {sectionContent.contact.formLabels.phone}
                  </label>
                  <Input id="phone" name="phone" type="tel" required aria-label="Your phone number" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-text">
                    {sectionContent.contact.formLabels.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    aria-label="Your message"
                    placeholder={sectionContent.contact.formLabels.messagePlaceholder}
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  {sectionContent.contact.formLabels.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
