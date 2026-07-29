import { SEO } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CampaignTimeline } from "@/components/sections/CampaignTimeline";
import { WhyChooseUsGrid } from "@/components/sections/WhyChooseUsGrid";
import { ClientsMarquee } from "@/components/sections/ClientsMarquee";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <SEO
        title="The Brand Advertising"
        description="Outdoor advertising, transit and vehicle branding, retail branding, and brand activation. The Brand Advertising plans and executes campaigns that move brands into real-world view."
        path="/"
      />
      <Hero />
      <AboutPreview />
      <ServicesGrid dark showAll={false} />
      <CampaignTimeline compact />
      <WhyChooseUsGrid />
      <ClientsMarquee />
      <TestimonialsCarousel />
      <ContactCTA />
    </>
  );
}
