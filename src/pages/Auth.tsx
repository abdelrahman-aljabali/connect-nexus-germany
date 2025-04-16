
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthForm from "@/components/auth/AuthForm";
import { ArrowLeft } from "lucide-react";

const Auth = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Anmelden / Registrieren | Connect.Now</title>
        <meta name="description" content="Melden Sie sich bei Connect.Now an oder erstellen Sie ein neues Konto." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-4 md:mb-6">
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-brand-blue transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Startseite
            </Link>
          </div>
          
          <AuthForm />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Auth;
