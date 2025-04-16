
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-2xl text-brand-blue">Connect<span className="text-brand-teal">.</span>Now</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-brand-blue transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-brand-blue transition-colors">
            About
          </Link>
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-brand-blue transition-colors">
              Services <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
              <Link to="/services/sellers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-blue">
                For Sellers
              </Link>
              <Link to="/services/buyers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-blue">
                For Buyers
              </Link>
              <Link to="/services/consultancy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-blue">
                Consultancy
              </Link>
            </div>
          </div>
          <Link to="/contact" className="text-gray-700 hover:text-brand-blue transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/auth">
            <Button variant="outline" className="rounded-2xl">
              Login
            </Button>
          </Link>
          <Link to="/auth?register=true">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-2xl">
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-brand-blue"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-4 mt-2 bg-white shadow-md absolute left-0 right-0">
          <div className="flex flex-col space-y-3">
            <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue py-2">
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue py-2">
              About
            </Link>
            <div className="border-t border-gray-200 my-2"></div>
            <Link to="/services/sellers" onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue py-2 pl-4">
              For Sellers
            </Link>
            <Link to="/services/buyers" onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue py-2 pl-4">
              For Buyers
            </Link>
            <Link to="/services/consultancy" onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue py-2 pl-4">
              Consultancy
            </Link>
            <div className="border-t border-gray-200 my-2"></div>
            <Link to="/contact" onClick={toggleMenu} className="text-gray-700 hover:text-brand-blue py-2">
              Contact
            </Link>
            <div className="flex flex-col space-y-2 mt-4">
              <Link to="/auth" onClick={toggleMenu}>
                <Button variant="outline" className="w-full rounded-2xl">
                  Login
                </Button>
              </Link>
              <Link to="/auth?register=true" onClick={toggleMenu}>
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white rounded-2xl">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
