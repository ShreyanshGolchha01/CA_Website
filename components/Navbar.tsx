"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { firmInfo, navItems, sectionContent } from "@/data/mock";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-brand-gold/30 bg-brand-navy px-4 py-2 text-center text-xs text-brand-ivory sm:text-sm">
        {firmInfo.complianceBanner}
      </div>

      <nav
        aria-label="Main navigation"
        className={cn(
          "border-b border-brand-navy/10 transition-all duration-300",
          isScrolled
            ? "bg-brand-ivory/90 shadow-soft backdrop-blur-xl"
            : "bg-brand-ivory/80 backdrop-blur-sm"
        )}
      >
        <div className="section-frame flex h-16 items-center justify-between">
          <Link
            href="#home"
            className="font-heading text-xl font-semibold text-brand-navy"
            aria-label="Go to home"
          >
            {firmInfo.name}
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group relative text-sm font-medium text-brand-text transition-colors hover:text-brand-navy"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open mobile navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>{firmInfo.name}</SheetTitle>
                  <SheetDescription>
                    {sectionContent.navbar.mobileDescription}
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-8 grid gap-4">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className="rounded-md px-2 py-2 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-navy/5"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
