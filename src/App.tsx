import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { BackToTop } from "@/components/layout/BackToTop";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { useLenis } from "@/hooks/useLenis";
import { OrganizationSchema } from "@/lib/seo";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Gallery from "@/pages/Gallery";
import CampaignProcess from "@/pages/CampaignProcess";
import WhyChooseUs from "@/pages/WhyChooseUs";
import Clients from "@/pages/Clients";
import Testimonials from "@/pages/Testimonials";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  useLenis();

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <OrganizationSchema />
      <LoadingScreen />
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/campaign-process" element={<CampaignProcess />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
