"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { sectionContent, usefulLinks } from "@/data/mock";

import { Card, CardContent } from "./ui/card";

export function UsefulLinks() {
  return (
    <section id="useful-links" className="bg-brand-ivory py-16 sm:py-20" aria-label="Useful links">
      <div className="section-frame">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title">{sectionContent.usefulLinks.title}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{sectionContent.usefulLinks.subtitle}</p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {usefulLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
            >
              <Card className="h-full border-brand-navy/10 hover:border-brand-gold/80 hover:shadow-none">
                <CardContent className="p-0">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-2 p-5 text-sm font-medium text-brand-navy"
                    aria-label={`Open ${link.title} in new tab`}
                  >
                    <span>{link.title}</span>
                    <ExternalLink className="h-4 w-4 text-brand-gold" aria-hidden="true" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
