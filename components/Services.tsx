"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  Building2,
  Calculator,
  ClipboardList,
  FileCheck,
  FileText,
  Landmark,
} from "lucide-react";

import { sectionContent, services } from "@/data/mock";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const serviceIconMap = {
  statutoryAudit: FileCheck,
  taxAudit: FileText,
  incomeTax: Calculator,
  gst: Landmark,
  incorporation: Building2,
  roc: ClipboardList,
  bookkeeping: BookOpen,
  advisory: BarChart3,
};

export function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20" aria-label="Services section">
      <div className="section-frame">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title">{sectionContent.services.title}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{sectionContent.services.subtitle}</p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              >
                <Card className="group h-full border-brand-navy/10 hover:border-brand-gold/80 hover:shadow-none">
                  <CardHeader>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 transition-colors group-hover:bg-brand-gold/20">
                      <Icon className="h-5 w-5 text-brand-navy" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg leading-snug text-brand-navy">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-brand-light">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
