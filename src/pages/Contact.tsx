
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt | Connect.Now</title>
        <meta name="description" content="Kontaktieren Sie Connect.Now - Wir helfen Ihnen gerne bei allen Fragen zur Unternehmensnachfolge. Sprechen Sie mit unserem Team von Experten." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <ContactHero />
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
