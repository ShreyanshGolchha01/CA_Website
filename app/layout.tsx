import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ankit Lunawat & Associates | Chartered Accountants",
  description:
    "Ankit Lunawat & Associates is a trusted Chartered Accountant firm in Gotegaon, Narsinghpur (MP), providing GST, Income Tax, Audit, and Business Advisory services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} bg-brand-ivory font-body text-brand-text antialiased`}
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
