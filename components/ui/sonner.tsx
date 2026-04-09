"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:border group-[.toaster]:border-brand-navy/15 group-[.toaster]:bg-white group-[.toaster]:text-brand-text group-[.toaster]:shadow-soft",
          title: "group-[.toast]:font-medium",
          description: "group-[.toast]:text-brand-light",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
