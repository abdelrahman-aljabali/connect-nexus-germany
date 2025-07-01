
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Check if user is logged in
  useEffect(() => {
    const demoUser = localStorage.getItem("demoUser");
    setIsLoggedIn(!!demoUser);
  }, [location]);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("demoUser");
    window.location.href = "/";
  };

  return (
    <nav className={`bg-white py-3 md:py-4 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to={isLoggedIn ? "/dashboard" : "/"} className="flex items-center">
          <span className="font-bold text-xl md:text-2xl text-brand-blue">Connect<span className="text-brand-teal">.</span>Now</span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className={`text-gray-700 hover:text-brand-blue transition-colors ${location.pathname === '/' ? 'text-brand-blue font-medium' : ''}`}>
            Start
          </Link>
          <Link to="/matches" className={`text-gray-700 hover:text-brand-blue transition-colors ${location.pathname === '/matches' || location.pathname === '/dashboard/matches' ? 'text-brand-blue font-medium' : ''}`}>
            Alle Inserate
          </Link>
          <Link to="/about" className={`text-gray-700 hover:text-brand-blue transition-colors ${location.pathname === '/about' ? 'text-brand-blue font-medium' : ''}`}>
            Über uns
          </Link>
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-brand-blue transition-colors">
              Services <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
              <Link to="/services/sellers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-blue">
                Für Verkäufer
              </Link>
              <Link to="/services/buyers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-blue">
                Für Käufer
              </Link>
              <Link to="/services/consultancy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-blue">
                Beratung
              </Link>
            </div>
          </div>
          <Link to="/contact" className={`text-gray-700 hover:text-brand-blue transition-colors ${location.pathname === '/contact' ? 'text-brand-blue font-medium' : ''}`}>
            Kontakt
          </Link>
        </div>

        {/* Right side - Login/Logout buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <Button onClick={handleLogout} variant="outline" className="rounded-2xl text-sm">
              Abmelden
            </Button>
          ) : (
            <>
              <Link to="/auth">
                <Button variant="outline" className="rounded-2xl text-sm">
                  Anmelden
                </Button>
              </Link>
              <Link to="/auth?register=true">
                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-2xl text-sm">
                  Registrieren
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-brand-blue"
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-4 mt-2 bg-white shadow-md absolute left-0 right-0 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <Link to="/" onClick={toggleMenu} className={`text-gray-700 hover:text-brand-blue py-2 ${location.pathname === '/' ? 'text-brand-blue font-medium' : ''}`}>
              Start
            </Link>
            <Link to="/matches" onClick={toggleMenu} className={`text-gray-700 hover:text-brand-blue py-2 ${location.pathname === '/matches' || location.pathname === '/dashboard/matches' ? 'text-brand-blue font-medium' : ''}`}>
              Alle Inserate
            </Link>
            <Link to="/about" onClick={toggleMenu} className={`text-gray-700 hover:text-brand-blue py-2 ${location.pathname === '/about' ? 'text-brand-blue font-medium' : ''}`}>
              Über uns
            </Link>
            <div className="border-t border-gray-200 my-2"></div>
            <Link to="/services/sellers" onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue py-2 pl-4">
              Für Verkäufer
            </Link>
            <Link to="/services/buyers" onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue py-2 pl-4">
              Für Käufer
            </Link>
            <Link to="/services/consultancy" onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue py-2 pl-4">
              Beratung
            </Link>
            <div className="border-t border-gray-200 my-2"></div>
            <Link to="/contact" onClick={toggleMenu} className={`text-gray-700 hover:text-brand-blue py-2 ${location.pathname === '/contact' ? 'text-brand-blue font-medium' : ''}`}>
              Kontakt
            </Link>
            
            {isLoggedIn ? (
              <Button onClick={handleLogout} variant="outline" className="w-full rounded-2xl mt-4">
                Abmelden
              </Button>
            ) : (
              <div className="flex flex-col space-y-2 mt-4">
                <Link to="/auth" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full rounded-2xl">
                    Anmelden
                  </Button>
                </Link>
                <Link to="/auth?register=true" onClick={toggleMenu}>
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white rounded-2xl">
                    Registrieren
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
