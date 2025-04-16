
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthForm from "@/components/auth/AuthForm";
import { ArrowLeft } from "lucide-react";

const Auth = () => {
  return (
    <>
      <Helmet>
        <title>Anmelden / Registrieren | Connect.Now</title>
        <meta name="description" content="Melden Sie sich bei Connect.Now an oder erstellen Sie ein neues Konto." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-6">
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
