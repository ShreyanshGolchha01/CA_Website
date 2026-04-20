"use client";

import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

import { firmInfo, sectionContent } from "@/data/mock";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasAddress = Boolean(firmInfo.address.trim());
  const hasPhone = Boolean(firmInfo.phone.trim());
  const hasWhatsapp = Boolean(firmInfo.whatsapp.trim());
  const hasOfficeTimings = Boolean(firmInfo.officeTimings.trim());
  const hasEmail = Boolean(firmInfo.email.trim());
  const hasInstagram = Boolean(firmInfo.instagram.trim());
  const hasLinkedin = Boolean(firmInfo.linkedin.trim());
  const hasMapEmbedUrl = Boolean(firmInfo.mapEmbedUrl.trim());
  const hasMapShareUrl = Boolean(firmInfo.mapShareUrl.trim());
  const hasContactDetails =
    hasAddress || hasPhone || hasWhatsapp || hasOfficeTimings || hasEmail || hasInstagram || hasLinkedin;
  const whatsappDigits = hasWhatsapp ? firmInfo.whatsapp.replace(/\D/g, "") : "";
  const whatsappNumber = whatsappDigits.length === 10 ? `91${whatsappDigits}` : whatsappDigits;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response
        .json()
        .catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || sectionContent.contact.errorDescription);
      }

      toast.success(sectionContent.contact.successTitle, {
        description: sectionContent.contact.successDescription,
      });

      form.reset();
    } catch (error) {
      toast.error(sectionContent.contact.errorTitle, {
        description:
          error instanceof Error ? error.message : sectionContent.contact.errorDescription,
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <CardContent className="space-y-4 text-base text-brand-light">
                {hasContactDetails ? (
                  <>
                    {hasAddress ? (
                      <p className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                        <span>{firmInfo.address}</span>
                      </p>
                    ) : null}

                    {hasPhone ? (
                      <p className="flex items-start gap-3">
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                        <a href={`tel:${firmInfo.phone}`} className="hover:text-brand-navy">
                          {firmInfo.phone}
                        </a>
                      </p>
                    ) : null}

                    {hasWhatsapp ? (
                      <p className="flex items-start gap-3">
                        <MessageCircle
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold"
                          aria-hidden="true"
                        />
                        <span>
                          {sectionContent.contact.whatsappLabel}:{" "}
                          <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-brand-navy"
                          >
                            {firmInfo.whatsapp}
                          </a>
                        </span>
                      </p>
                    ) : null}

                    {hasOfficeTimings ? (
                      <p className="flex items-start gap-3">
                        <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                        <span>
                          {sectionContent.contact.officeHoursLabel}: {firmInfo.officeTimings}
                        </span>
                      </p>
                    ) : null}

                    {hasEmail ? (
                      <p className="flex items-start gap-3">
                        <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                        <a href={`mailto:${firmInfo.email}`} className="hover:text-brand-navy">
                          {firmInfo.email}
                        </a>
                      </p>
                    ) : null}

                    {hasInstagram ? (
                      <p className="flex items-start gap-3">
                        <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" aria-hidden="true" />
                        <span>
                          Instagram:{" "}
                          <a
                            href={firmInfo.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-brand-navy hover:text-brand-gold"
                          >
                            {sectionContent.contact.instagramText}
                          </a>
                        </span>
                      </p>
                    ) : null}

                    {hasLinkedin ? (
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
                    ) : null}
                  </>
                ) : (
                  <p>{sectionContent.contact.detailsPending}</p>
                )}

                {hasMapEmbedUrl ? (
                  <div className="overflow-hidden rounded-lg border border-brand-navy/15">
                    <iframe
                      title="Office location map"
                      src={firmInfo.mapEmbedUrl}
                      className="h-[240px] w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                ) : (
                  <div className="rounded-lg border border-brand-navy/15 bg-brand-ivory p-4">
                    <p className="text-sm text-brand-light">{sectionContent.contact.mapPending}</p>
                  </div>
                )}

                {hasMapShareUrl ? (
                  <p>
                    <a
                      href={firmInfo.mapShareUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-brand-navy hover:text-brand-gold"
                    >
                      {sectionContent.contact.mapLinkText}
                    </a>
                  </p>
                ) : null}
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
                  <label htmlFor="name" className="mb-1.5 block text-base font-medium text-brand-text">
                    {sectionContent.contact.formLabels.name}
                  </label>
                  <Input id="name" name="name" required aria-label="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-base font-medium text-brand-text">
                    {sectionContent.contact.formLabels.email}
                  </label>
                  <Input id="email" name="email" type="email" required aria-label="Your email" />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-base font-medium text-brand-text">
                    {sectionContent.contact.formLabels.phone}
                  </label>
                  <Input id="phone" name="phone" type="tel" required aria-label="Your phone number" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-base font-medium text-brand-text">
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

                <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting
                    ? sectionContent.contact.formLabels.submitting
                    : sectionContent.contact.formLabels.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
