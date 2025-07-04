
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        {/* MOBILE layout only (stacked) */}
        <div className="lg:hidden space-y-8 animate-fade-in px-4">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Sichere Unternehmensnachfolge{" "}
            <span className="text-brand-blue">einfach</span> gemacht
          </h1>

          {/* Image */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-teal rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <img
                src="/lovable-uploads/99b83dc1-c164-48ec-a96e-7e663479a385.png"
                alt="Leipzig cityscape with business district"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100 max-w-xs animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <p className="text-sm font-medium">
                  Ihre Nachfolge in besten Händen
                </p>
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100 animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-brand-teal rounded-full"></div>
                <p className="text-sm font-medium">Höchste Datensicherheit</p>
              </div>
            </div>
          </div>

          {/* Description + Buttons */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              ConnectNow bringt Unternehmer, die ihr Geschäft übergeben
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
            <div className="flex flex-wrap gap-x-6 text-sm text-gray-500">
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
        </div>

        {/* DESKTOP layout only */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900">
              Sichere Unternehmensnachfolge{" "}
              <span className="text-brand-blue">einfach</span> gemacht
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              ConnectNow bringt Unternehmer, die ihr Geschäft übergeben
              möchten, mit qualifizierten Nachfolgern zusammen – diskret, sicher
              und professionell.
            </p>
            <div className="flex gap-4">
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

          {/* Image Side */}
          <div className="relative w-full animate-fade-in px-4">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-teal rounded-2xl blur opacity-20"></div>

            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <img
                src="/lovable-uploads/99b83dc1-c164-48ec-a96e-7e663479a385.png"
                alt="Leipzig cityscape with business district"
                className="w-full h-96 object-cover"
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
