"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { partners, sectionContent } from "@/data/mock";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Team() {
  return (
    <section id="team" className="bg-brand-ivory py-16 sm:py-20" aria-label="Team section">
      <div className="section-frame">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="section-title">{sectionContent.team.title}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{sectionContent.team.subtitle}</p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Image
                    src={partner.image}
                    alt={`Passport-size placeholder of ${partner.name}`}
                    width={140}
                    height={180}
                    className="h-[180px] w-[140px] rounded-md border border-brand-navy/15 object-cover"
                  />
                  <CardTitle className="pt-4 text-xl text-brand-navy">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-brand-light">
                  <p>{partner.qualification}</p>
                  <p>{partner.membershipNumber}</p>
                  <p className="leading-6">{partner.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
