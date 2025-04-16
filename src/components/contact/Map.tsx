
const Map = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Besuchen Sie uns</h2>
          <p className="text-lg text-gray-600">
            Wir freuen uns auf Ihren Besuch in unserem Büro in Berlin-Mitte.
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-soft-lg animate-fade-in h-[400px] md:h-[500px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.3561921848866!2d13.3886613!3d52.5171866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c337663549%3A0xd97051add3a195d8!2sBerliner%20Fernsehturm!5e0!3m2!1sde!2sde!4v1643809743619!5m2!1sde!2sde" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            title="Connect.Now Bürostandort in Berlin"
          ></iframe>
          <div className="absolute top-4 left-4 bg-white py-2 px-4 rounded-lg shadow-md text-sm font-medium">
            Connect.Now Hauptsitz
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
