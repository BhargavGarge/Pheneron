import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Origin from "@/components/Origin";
// import CaseStudies from "@/components/CaseStudies";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Origin />
      <CTABanner />
      <Footer />
    </main>
  );
}
