
import { ArrowRight } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative py-24 bg-brand-blue overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-teal rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Kontaktieren Sie Uns
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "150ms" }}>
            Unser Expertenteam steht Ihnen für alle Fragen rund um die Unternehmensnachfolge zur Verfügung.
          </p>
          <div className="flex items-center justify-center space-x-3 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <span className="h-px w-10 bg-white/30"></span>
            <a href="#contactForm" className="group inline-flex items-center text-white font-medium">
              Zum Kontaktformular
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="h-px w-10 bg-white/30"></span>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
          <path d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,80C840,96,960,96,1080,80C1200,64,1320,32,1380,16L1440,0L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactHero;
