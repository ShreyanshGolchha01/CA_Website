"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { firmInfo, partners, sectionContent } from "@/data/mock";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export function Hero() {
  const profile = partners[0];
  const hasProfile = Boolean(profile);
  const title = firmInfo.tagline || sectionContent.hero.placeholderTitle;
  const subtitle = firmInfo.subTagline || sectionContent.hero.placeholderSubtitle;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-navy py-20 text-brand-ivory sm:py-24 lg:py-28"
      aria-label="Hero section"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-35"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="heroPattern" width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M72 0H0V72" fill="none" stroke="#C9A84C" strokeOpacity="0.18" />
            <circle cx="0" cy="0" r="1.4" fill="#C9A84C" fillOpacity="0.26" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroPattern)" />
      </svg>
      <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-brand-gold/90" aria-hidden="true" />
      <div
        className="absolute -left-20 top-20 h-52 w-52 rounded-full border border-brand-gold/20"
        aria-hidden="true"
      />
      <div
        className="absolute -right-16 bottom-10 h-44 w-44 rounded-full border border-brand-gold/20"
        aria-hidden="true"
      />

      <div
        className={cn(
          "section-frame relative grid gap-12",
          hasProfile ? "lg:grid-cols-[1.25fr_0.75fr] lg:items-center" : null
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.24em] text-brand-gold sm:text-base">
            {sectionContent.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base text-brand-ivory/85 sm:text-lg">{subtitle}</p>
          <div className="gold-divider" />

          <div className="mt-9">
            <Button asChild variant="gold" size="lg">
              <a href="#contact" aria-label="Scroll to contact section">
                {sectionContent.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {profile ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: "easeOut" }}
            className="mx-auto w-full max-w-[320px]"
          >
            <div className="rounded-2xl border border-brand-gold/30 bg-white/5 p-5 shadow-soft backdrop-blur-sm">
              <Image
                src={profile.image}
                alt="Firm partner"
                width={280}
                height={350}
                className="h-auto w-full rounded-xl border border-brand-ivory/20 object-cover"
                priority
              />
              <div className="mt-4 border-t border-brand-gold/30 pt-4 text-center">
                <p className="text-base font-semibold text-brand-ivory">{profile.name}</p>
                <p className="mt-1 text-sm text-brand-ivory/75">{profile.qualification}</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
