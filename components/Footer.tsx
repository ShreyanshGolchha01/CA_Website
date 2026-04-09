import Link from "next/link";

import { firmInfo, navItems, sectionContent } from "@/data/mock";

export function Footer() {
  return (
    <footer className="border-t border-brand-navy/10 bg-brand-navy py-12 text-brand-ivory" aria-label="Footer">
      <div className="section-frame grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-heading text-2xl">{firmInfo.name}</p>
          <p className="mt-2 text-sm text-brand-ivory/80">{firmInfo.frn}</p>
          <p className="mt-2 text-sm text-brand-ivory/80">
            {sectionContent.footer.memberLine}
          </p>
          <p className="mt-4 max-w-2xl text-xs leading-6 text-brand-ivory/75">
            {firmInfo.disclaimer}
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-brand-gold">
            {sectionContent.footer.quickLinks}
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-brand-ivory/85 transition-colors hover:text-brand-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-frame mt-10 border-t border-brand-ivory/15 pt-6 text-xs text-brand-ivory/70">
        <p>
          © {new Date().getFullYear()} {firmInfo.name}. {sectionContent.footer.rights}
        </p>
      </div>
    </footer>
  );
}
