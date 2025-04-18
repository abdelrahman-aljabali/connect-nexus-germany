import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 to-brand-blue/90 z-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
        {/* Overlay pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6 bg-white/10 backdrop-blur-sm py-2 px-4 rounded-full text-white/90 text-sm">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-brand-teal"></span>
            Entdecken Sie unsere Geschichte
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in">
            Über Connect<span className="text-brand-teal">.</span>Now
          </h1>

          <p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in"
            style={{ animationDelay: "150ms" }}
          >
            Wir revolutionieren die Unternehmensnachfolge in Deutschland durch
            Technologie, Diskretion und persönliche Betreuung.
          </p>

          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="rounded-xl bg-white text-brand-blue hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8"
              >
                Kontaktieren Sie uns
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/auth?register=true">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl bg-white text-brand-blue hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8"
              >
                Jetzt registrieren
              </Button>
            </Link>
          </div>

          {/* Highlight indicators */}
          <div className="flex justify-center items-center mt-16 space-x-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-sm text-white/70">Jahre Erfahrung</p>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">200+</p>
              <p className="text-sm text-white/70">Erfolgreiche Matches</p>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-sm text-white/70">Kundenzufriedenheit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>

      {/* Animated wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,85.3C672,96,768,96,864,80C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutHero;
