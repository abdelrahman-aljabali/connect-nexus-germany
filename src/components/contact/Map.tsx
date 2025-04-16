
import { Navigation } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Map = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center mb-4 md:mb-6">
            <Navigation className="h-6 w-6 md:h-8 md:w-8 text-brand-teal mr-3" />
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-brand-teal/20"></span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">
            Besuchen Sie uns
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Wir freuen uns auf Ihren Besuch in unserem Büro in Chemnitz.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-3 bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 rounded-2xl blur-lg -z-10"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-soft-lg animate-fade-in h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.1622687518877!2d12.9184899!3d50.8276305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a744b572537c11%3A0xb52b73ffc2b89b15!2sS%C3%BCdbahnstra%C3%9Fe%204%2C%2009111%20Chemnitz%2C%20Germany!5e0!3m2!1sen!2sde!4v1618308853499!5m2!1sen!2sde" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              title="Connect.Now Bürostandort in Chemnitz"
            ></iframe>
            <div className={`absolute ${isMobile ? 'bottom-4 left-1/2 transform -translate-x-1/2' : 'top-4 left-4'} bg-white py-2 px-3 md:py-3 md:px-5 rounded-xl shadow-soft flex items-center`}>
              <div className="bg-brand-blue/10 p-1.5 md:p-2 rounded-lg mr-2 md:mr-3">
                <Navigation className="h-4 w-4 md:h-5 md:w-5 text-brand-blue" />
              </div>
              <div>
                <div className="text-xs md:text-sm font-medium text-gray-900">Connect.Now</div>
                <div className="text-xs text-gray-500">Südbahnstr. 4, 09111 Chemnitz</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
