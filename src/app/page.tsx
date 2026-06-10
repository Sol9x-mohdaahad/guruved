import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustedSchools } from "@/components/site/TrustedSchools";
import { Features } from "@/components/site/Features";
import { Stats } from "@/components/site/Stats";
import { PlatformIntro } from "@/components/site/PlatformIntro";
import { About } from "@/components/site/About";
import { Modules } from "@/components/site/Modules";
import { MobileApp } from "@/components/site/MobileApp";
import { DemoCTA } from "@/components/site/DemoCTA";
import { AIAssistant } from "@/components/site/AIAssistant";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Navbar />
      <main>
        <Hero />
        <TrustedSchools />
        <Features />
        <Stats />
        <PlatformIntro />
        <About />
        <Modules />
        <MobileApp />
        <DemoCTA />
        <AIAssistant />
      </main>
      <Footer />
    </div>
  );
}
