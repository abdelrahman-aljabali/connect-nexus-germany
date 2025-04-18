import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Sichere Unternehmensnachfolge{" "}
              <span className="text-brand-blue">einfach</span> gemacht
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
              Connect.Now bringt Unternehmer, die ihr Geschäft übergeben
              möchten, mit qualifizierten Nachfolgern zusammen – diskret, sicher
              und professionell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth?type=seller">
                <Button
                  size="lg"
                  className="rounded-2xl bg-brand-blue hover:bg-brand-blue/90 text-white"
                >
                  Unternehmen eintragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/auth?type=buyer">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                >
                  Als Nachfolger registrieren
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                <span>100% Vertraulich</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                <span>Persönliche Betreuung</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                <span>Geprüfte Kontakte</span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block animate-fade-in">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue to-brand-teal rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
                alt="Business succession meeting"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-gray-100 max-w-xs animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <p className="text-sm font-medium">
                  Ihre Nachfolge in besten Händen
                </p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-gray-100 animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-brand-teal rounded-full"></div>
                <p className="text-sm font-medium">Höchste Datensicherheit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
