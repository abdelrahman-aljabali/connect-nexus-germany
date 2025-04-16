
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurMission from "@/components/about/OurMission";
import OurTeam from "@/components/about/OurTeam";
import OurValues from "@/components/about/OurValues";
import FAQ from "@/components/about/FAQ";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Über Uns | Connect.Now</title>
        <meta name="description" content="Lernen Sie Connect.Now kennen - die führende Plattform für Unternehmensnachfolge in Deutschland. Unsere Mission, unser Team und unsere Werte." />
      </Helmet>
      
      <Navbar />
      
      <main>
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
