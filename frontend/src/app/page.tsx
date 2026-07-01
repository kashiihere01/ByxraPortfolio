import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import PortfolioShowcase from "@/components/home/PortfolioShowcase";
import CaseStudies from "@/components/home/CaseStudies";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <HeroSection />
      <TrustSection />
      <ServicesGrid />
      <PortfolioShowcase />
      <CaseStudies />
      <ProcessTimeline />
      <TestimonialsSection />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
