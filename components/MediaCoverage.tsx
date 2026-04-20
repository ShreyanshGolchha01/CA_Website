"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import {
  featuredPublications,
  mediaCoverage,
  mediaInterviews,
  sectionContent,
  type MediaCoverageItem,
} from "@/data/mock";
import { cn } from "@/lib/utils";

import { Card, CardContent } from "./ui/card";

type NewsLanguage = "hi" | "en" | "mr";

const languageOptions: Array<{ value: NewsLanguage; label: string }> = [
  { value: "hi", label: "हिंदी" },
  { value: "en", label: "English" },
  { value: "mr", label: "Marathi" },
];

function getItemsPerView(width: number) {
  if (width < 640) {
    return 1;
  }
  if (width < 1024) {
    return 2;
  }
  return 3;
}

export function MediaCoverage() {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [activeItem, setActiveItem] = useState<MediaCoverageItem | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<NewsLanguage>("hi");

  const totalItems = mediaCoverage.length;

  const slides = useMemo(() => {
    if (totalItems === 0) {
      return [];
    }
    const leading = mediaCoverage.slice(-itemsPerView);
    const trailing = mediaCoverage.slice(0, itemsPerView);
    return [...leading, ...mediaCoverage, ...trailing];
  }, [itemsPerView, totalItems]);

  const normalizedIndex = useMemo(() => {
    if (totalItems === 0) {
      return 0;
    }
    const raw = (currentIndex - itemsPerView) % totalItems;
    return raw < 0 ? raw + totalItems : raw;
  }, [currentIndex, itemsPerView, totalItems]);

  useEffect(() => {
    const handleResize = () => {
      const next = getItemsPerView(window.innerWidth);
      setItemsPerView(next);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (totalItems === 0) {
      return;
    }
    setIsTransitionEnabled(false);
    setCurrentIndex(itemsPerView);
  }, [itemsPerView, totalItems]);

  useEffect(() => {
    if (isTransitionEnabled) {
      return;
    }
    const frame = requestAnimationFrame(() => {
      setIsTransitionEnabled(true);
    });
    return () => cancelAnimationFrame(frame);
  }, [isTransitionEnabled]);

  useEffect(() => {
    if (totalItems <= 1 || isHovering || activeItem) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((value) => value + 1);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [activeItem, isHovering, totalItems]);

  useEffect(() => {
    if (!activeItem) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem]);

  const handleTransitionEnd = () => {
    if (totalItems === 0) {
      return;
    }

    if (currentIndex === totalItems + itemsPerView) {
      setIsTransitionEnabled(false);
      setCurrentIndex(itemsPerView);
      return;
    }

    if (currentIndex === itemsPerView - 1) {
      setIsTransitionEnabled(false);
      setCurrentIndex(totalItems + itemsPerView - 1);
    }
  };

  const handleOpenItem = (item: MediaCoverageItem) => {
    setSelectedLanguage("hi");
    setActiveItem(item);
  };

  const handleViewCutout = (imageUrl: string) => {
    window.open(imageUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="news" className="bg-brand-ivory/45 py-16 sm:py-20" aria-label="Media coverage section">
      <div className="section-frame">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title">{sectionContent.news.title}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{sectionContent.news.subtitle}</p>
        </motion.div>

        <div className="mt-10">
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-brand-ivory to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-brand-ivory to-transparent" />

            <div
              className="flex"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
                transition: isTransitionEnabled ? "transform 0.4s ease-in-out" : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="box-border shrink-0 px-2"
                  style={{ flexBasis: `${100 / itemsPerView}%` }}
                >
                  <button
                    type="button"
                    onClick={() => handleOpenItem(item)}
                    className="group h-[320px] w-full cursor-pointer overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white text-left transition-transform duration-200 hover:-translate-y-1"
                    aria-label={`Open ${item.publication} article`}
                  >
                    <div className="relative h-40 w-full">
                      <Image
                        src={item.cardImage}
                        alt={`${item.publication} article clipping`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex h-[160px] flex-col space-y-3 p-4">
                      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-light">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: item.publicationColor }}
                          aria-hidden="true"
                        />
                        {item.publication}
                      </p>

                      <h3 className="line-clamp-2 text-[0.95rem] font-semibold leading-6 text-brand-navy">
                        {item.headline.hi}
                      </h3>

                      <p className="mt-auto text-xs text-brand-light">
                        {item.date} • {item.page}
                      </p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {mediaCoverage.map((item, dotIndex) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setIsTransitionEnabled(true);
                  setCurrentIndex(itemsPerView + dotIndex);
                }}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all",
                  normalizedIndex === dotIndex ? "bg-brand-navy" : "bg-brand-navy/25 hover:bg-brand-navy/45"
                )}
                aria-label={`Go to article ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>

        {featuredPublications.length > 0 ? (
          <div className="mt-10 rounded-2xl border border-brand-navy/10 bg-white p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-brand-navy sm:text-xl">
              {sectionContent.news.featuredInTitle}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {featuredPublications.map((publication) => (
                <span
                  key={publication}
                  className="rounded-full border border-brand-navy/15 bg-brand-ivory px-3 py-1.5 text-xs font-medium text-brand-navy sm:text-sm"
                >
                  {publication}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {mediaInterviews.length > 0 ? (
          <div className="mt-10">
            <h3 className="text-2xl text-brand-navy">{sectionContent.news.interviewsTitle}</h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-brand-light">
              {sectionContent.news.interviewsSubtitle}
            </p>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {mediaInterviews.map((interview, index) => (
                <motion.div
                  key={`${interview.channel}-${interview.date}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                >
                  <Card className="overflow-hidden border-brand-navy/10 bg-white shadow-none">
                    <div className="aspect-video w-full bg-brand-ivory">
                      <iframe
                        src={interview.embedUrl}
                        title={`${interview.channel} interview`}
                        className="h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    <CardContent className="space-y-2 p-5">
                      <p className="text-xs uppercase tracking-[0.12em] text-brand-light">{interview.channel}</p>
                      <h4 className="text-base font-semibold leading-6 text-brand-navy">{interview.title}</h4>
                      <p className="text-sm text-brand-light">{interview.date}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
              onClick={() => setActiveItem(null)}
              aria-label="Close quick view"
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-brand-navy/10 bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label={`${activeItem.publication} quick view`}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="h-1 w-full" style={{ backgroundColor: activeItem.publicationColor }} />

              <div className="grid md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[18rem] bg-white p-2 md:min-h-full">
                  <Image
                    src={activeItem.fullImage}
                    alt={`Expanded news clipping from ${activeItem.publication}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="relative p-5 sm:p-7">
                  <button
                    type="button"
                    onClick={() => setActiveItem(null)}
                    className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-navy/10 bg-brand-ivory text-brand-navy transition-colors hover:border-brand-gold/70 hover:bg-brand-gold/10"
                    aria-label="Close quick view"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>

                  <div className="pr-12">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-light">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: activeItem.publicationColor }}
                        aria-hidden="true"
                      />
                      {activeItem.publication}
                    </p>
                    <p className="mt-3 inline-flex rounded-full border border-brand-navy/15 bg-brand-ivory px-3 py-1 text-xs font-semibold text-brand-navy">
                      {activeItem.badge}
                    </p>
                    <h3 className="mt-4 text-2xl leading-tight text-brand-navy sm:text-3xl">
                      {activeItem.headline[selectedLanguage]}
                    </h3>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {languageOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setSelectedLanguage(option.value)}
                          className={cn(
                            "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                            selectedLanguage === option.value
                              ? "border-brand-navy bg-brand-navy text-white"
                              : "border-brand-navy/20 bg-white text-brand-navy hover:border-brand-gold"
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>

                    <ul className="grid gap-2 text-sm leading-6 text-brand-light">
                      {activeItem.details[selectedLanguage].map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-1 text-sm text-brand-light">
                      <p>
                        Date: {activeItem.date} | {activeItem.page}
                      </p>
                      <p>Source: {activeItem.publication}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleViewCutout(activeItem.fullImage)}
                      className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#185FA5] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#144F8A]"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      View Article Cutout
                    </button>

                    <p className="text-sm leading-6 text-brand-light">
                      Click outside this card or use the close button to return to the page.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}