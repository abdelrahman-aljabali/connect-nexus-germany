
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";
import { useEffect } from "react";

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Kontakt | Connect.Now</title>
        <meta name="description" content="Kontaktieren Sie Connect.Now - Wir helfen Ihnen gerne bei allen Fragen zur Unternehmensnachfolge. Sprechen Sie mit unserem Team von Experten." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      <Navbar />
      
      <main className="overflow-hidden">
        <ContactHero />
        <div className="container mx-auto py-12 md:py-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
        <Map />
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
