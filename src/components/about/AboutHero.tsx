
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with a gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/70 z-0">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80" 
          alt="Team collaboration" 
          className="w-full h-full object-cover mix-blend-overlay opacity-50"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Über Connect<span className="text-brand-teal">.</span>Now
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "150ms" }}>
            Wir revolutionieren die Unternehmensnachfolge in Deutschland durch Technologie, 
            Diskretion und persönliche Betreuung.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Link to="/contact">
              <Button size="lg" className="rounded-2xl bg-white text-brand-blue hover:bg-white/90">
                Kontaktieren Sie uns
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/auth?register=true">
              <Button size="lg" variant="outline" className="rounded-2xl border-white text-white hover:bg-white/10">
                Jetzt registrieren
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default AboutHero;
