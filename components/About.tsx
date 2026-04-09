"use client";

import { motion } from "framer-motion";
import { Handshake, Scale, ShieldCheck } from "lucide-react";

import { firmInfo, sectionContent, valuePillars } from "@/data/mock";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const iconMap = {
  integrity: ShieldCheck,
  expertise: Scale,
  commitment: Handshake,
};

export function About() {
  return (
    <section id="about" className="bg-brand-ivory py-16 sm:py-20" aria-label="About section">
      <div className="section-frame">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title">{sectionContent.about.title}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{firmInfo.about}</p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-brand-navy">ICAI Membership</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-light">{firmInfo.icaiMembershipNumber}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-brand-navy">Firm Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-light">{firmInfo.frn}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {valuePillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10">
                      <Icon className="h-5 w-5 text-brand-navy" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl text-brand-navy">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-brand-light">{pillar.description}</p>
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
