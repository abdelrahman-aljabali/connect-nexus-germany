
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="font-bold text-2xl text-white">Connect<span className="text-brand-teal">.</span>Now</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Die Plattform für Unternehmensnachfolge in Deutschland. Wir verbinden Verkäufer mit den passenden Nachfolgern.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/sellers" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Für Verkäufer
                </Link>
              </li>
              <li>
                <Link to="/services/buyers" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Für Käufer
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Beratung
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-brand-teal transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Karriere
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-brand-teal shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Musterstraße 123<br />
                  10115 Berlin<br />
                  Deutschland
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-brand-teal shrink-0" />
                <a href="tel:+4930123456789" className="text-gray-400 hover:text-brand-teal transition-colors">
                  +49 30 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-brand-teal shrink-0" />
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
