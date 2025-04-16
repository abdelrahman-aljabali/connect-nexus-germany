
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-brand-teal to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-brand-blue to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="font-bold text-2xl text-white">Connect<span className="text-brand-teal">.</span>Now</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Die Plattform für Unternehmensnachfolge in Deutschland. Wir verbinden Verkäufer mit den passenden Nachfolgern.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="bg-gray-800 hover:bg-brand-blue text-gray-400 hover:text-white p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="bg-gray-800 hover:bg-brand-blue text-gray-400 hover:text-white p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-gray-800 hover:bg-brand-blue text-gray-400 hover:text-white p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="bg-gray-800 hover:bg-brand-blue text-gray-400 hover:text-white p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 h-1 w-12 bg-gradient-to-r from-brand-blue to-brand-teal rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/sellers" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center">
                  <span className="h-1 w-2 bg-brand-teal/50 rounded-full mr-2"></span>
                  Für Verkäufer
                </Link>
              </li>
              <li>
                <Link to="/services/buyers" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center">
                  <span className="h-1 w-2 bg-brand-teal/50 rounded-full mr-2"></span>
                  Für Käufer
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center">
                  <span className="h-1 w-2 bg-brand-teal/50 rounded-full mr-2"></span>
                  Beratung
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center">
                  <span className="h-1 w-2 bg-brand-teal/50 rounded-full mr-2"></span>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white relative inline-block">
              Unternehmen
              <span className="absolute -bottom-1 left-0 h-1 w-12 bg-gradient-to-r from-brand-blue to-brand-teal rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center">
                  <span className="h-1 w-2 bg-brand-teal/50 rounded-full mr-2"></span>
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center">
                  <span className="h-1 w-2 bg-brand-teal/50 rounded-full mr-2"></span>
                  Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center">
                  <span className="h-1 w-2 bg-brand-teal/50 rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-brand-teal transition-colors flex items-center">
                  <span className="h-1 w-2 bg-brand-teal/50 rounded-full mr-2"></span>
                  Karriere
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white relative inline-block">
              Kontakt
              <span className="absolute -bottom-1 left-0 h-1 w-12 bg-gradient-to-r from-brand-blue to-brand-teal rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-gray-800 p-2 rounded-lg text-brand-teal mr-3 mt-0.5">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-gray-400">
                  Südbahnstr. 4<br />
                  09111 Chemnitz<br />
                  Deutschland
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-gray-800 p-2 rounded-lg text-brand-teal mr-3">
                  <Phone className="h-5 w-5" />
                </div>
                <a href="tel:+4917655739750" className="text-gray-400 hover:text-brand-teal transition-colors">
                  +49 176 55739750
                </a>
              </li>
              <li className="flex items-center">
                <div className="bg-gray-800 p-2 rounded-lg text-brand-teal mr-3">
                  <Mail className="h-5 w-5" />
                </div>
                <a href="mailto:info@connect-now.de" className="text-gray-400 hover:text-brand-teal transition-colors">
                  info@connect-now.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} Connect.Now. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 hover:text-brand-teal transition-colors">
                Datenschutz
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-brand-teal transition-colors">
                AGB
              </Link>
              <Link to="/imprint" className="text-gray-500 hover:text-brand-teal transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
