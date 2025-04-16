
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Connect.Now | Unternehmensnachfolge in Deutschland</title>
        <meta name="description" content="Connect.Now ist die führende Plattform für Unternehmensnachfolge in Deutschland. Wir verbinden Verkäufer mit qualifizierten Käufern - diskret, sicher und professionell." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      <Navbar />
      
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
