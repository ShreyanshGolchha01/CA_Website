import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Resources } from "@/components/Resources";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { UsefulLinks } from "@/components/UsefulLinks";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-ivory">
      <Navbar />
      <main aria-label="Sharma & Associates website sections">
        <Hero />
        <About />
        <Services />
        <Team />
        <Resources />
        <UsefulLinks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
