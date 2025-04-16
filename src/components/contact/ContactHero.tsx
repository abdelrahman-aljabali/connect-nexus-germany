
import { ArrowRight, MessageCircle } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative py-32 bg-gradient-to-r from-brand-blue to-indigo-700 overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-teal rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-flex items-center justify-center mb-6 bg-white/10 backdrop-blur-sm py-2 px-4 rounded-full text-white/90 text-sm">
            <MessageCircle className="mr-2 h-4 w-4" />
            Wir freuen uns auf Ihre Nachricht
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Kontaktieren Sie Uns
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "150ms" }}>
            Unser Expertenteam steht Ihnen für alle Fragen rund um die Unternehmensnachfolge zur Verfügung.
          </p>
          
          <div className="flex items-center justify-center space-x-3 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-white/50"></span>
            <a href="#contactForm" className="group inline-flex items-center text-white font-medium px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300">
              Zum Kontaktformular
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-white/50"></span>
          </div>
          
          {/* Contact details summary */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-white/70">Telefon</p>
                <p className="text-white">+49 176 55739750</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-white/70">E-Mail</p>
                <p className="text-white">info@connect-now.de</p>
              </div>
            </div>
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
