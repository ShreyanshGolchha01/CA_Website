"use client";

import { motion } from "framer-motion";
import { BookMarked, FileStack, PlayCircle } from "lucide-react";

import {
  articles,
  professionalUpdates,
  sectionContent,
  videoResources,
} from "@/data/mock";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Resources() {
  return (
    <section id="resources" className="bg-white py-16 sm:py-20" aria-label="Educational resources">
      <div className="section-frame">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title">{sectionContent.resources.title}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{sectionContent.resources.subtitle}</p>
        </motion.div>

        <div className="mt-10">
          <h3 className="text-2xl text-brand-navy">{sectionContent.resources.articlesTitle}</h3>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10">
                      <BookMarked className="h-4 w-4 text-brand-navy" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg text-brand-navy">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-brand-light">{article.excerpt}</p>
                    <p className="mt-3 text-xs tracking-wide text-brand-navy/70">{article.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl text-brand-navy">{sectionContent.resources.videosTitle}</h3>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {videoResources.length > 0 ? (
              videoResources.map((video, index) => (
                <motion.div
                  key={video.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex aspect-video items-center justify-center rounded-lg border border-brand-navy/15 bg-brand-ivory">
                        <div className="text-center">
                          <PlayCircle className="mx-auto h-8 w-8 text-brand-gold" aria-hidden="true" />
                          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-brand-light">
                            {sectionContent.resources.embedPlaceholder}
                          </p>
                        </div>
                      </div>
                      <CardTitle className="text-lg text-brand-navy">{video.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-brand-light">{video.summary}</p>
                      <p className="mt-4 text-xs text-brand-navy/70">{video.duration}</p>
                      <p className="mt-1 text-xs text-brand-navy/70">
                        {sectionContent.resources.embedUrlLabel}: {video.embedUrl}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="md:col-span-3"
              >
                <Card className="border border-dashed border-brand-gold/50 bg-brand-ivory/70">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10">
                      <PlayCircle className="h-6 w-6 text-brand-gold" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl text-brand-navy">
                      {sectionContent.resources.videosComingSoonTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-7 text-brand-light">
                      {sectionContent.resources.videosComingSoonDescription}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl text-brand-navy">{sectionContent.resources.updatesTitle}</h3>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {professionalUpdates.map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10">
                      <FileStack className="h-4 w-4 text-brand-navy" aria-hidden="true" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.14em] text-brand-light">{update.source}</p>
                    <CardTitle className="text-lg text-brand-navy">{update.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-brand-light">{update.summary}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
