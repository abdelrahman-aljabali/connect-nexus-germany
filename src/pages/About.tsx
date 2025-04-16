
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurMission from "@/components/about/OurMission";
import OurTeam from "@/components/about/OurTeam";
import OurValues from "@/components/about/OurValues";
import FAQ from "@/components/about/FAQ";
import { useEffect } from "react";

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Über Uns | Connect.Now</title>
        <meta name="description" content="Lernen Sie Connect.Now kennen - die führende Plattform für Unternehmensnachfolge in Deutschland. Unsere Mission, unser Team und unsere Werte." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      <Navbar />
      
      <main className="overflow-hidden">
        <AboutHero />
        <OurMission />
        <OurValues />
        <OurTeam />
        <FAQ />
      </main>
      
      <Footer />
    </>
  );
};

export default About;
