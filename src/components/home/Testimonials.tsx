
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TestimonialItem } from "@/types";

const testimonialsData: TestimonialItem[] = [
  {
    content: "Nach 30 Jahren erfolgreicher Geschäftsführung wollte ich mein Unternehmen in gute Hände übergeben. Connect.Now hat innerhalb weniger Monate den perfekten Nachfolger gefunden. Der gesamte Prozess war professionell, sicher und respektvoll.",
    author: "Martin Schmidt",
    role: "Ehemaliger Inhaber, Schmidt Maschinenbau GmbH",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "Als junger Unternehmer war es mein Traum, ein etabliertes Geschäft zu übernehmen statt bei null anzufangen. Über Connect.Now fand ich ein Unternehmen, das genau meinen Vorstellungen entsprach. Die Plattform hat den gesamten Übernahmeprozess enorm vereinfacht.",
    author: "Laura Weber",
    role: "Neue Inhaberin, Webdesign Studio München",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    content: "Die diskrete Vermittlung war für uns entscheidend. Wir wollten nicht, dass Mitarbeiter und Kunden vorzeitig von unseren Verkaufsabsichten erfahren. Connect.Now hat diesen sensiblen Prozess hervorragend gemanagt.",
    author: "Thomas Becker",
    role: "Verkäufer eines mittelständischen Handelsunternehmens",
    avatarUrl: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Was unsere Kunden sagen</h2>
          <p className="text-lg text-gray-600">
            Erfahren Sie, wie Connect.Now Unternehmern geholfen hat, ihre Nachfolge erfolgreich zu gestalten.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
            <Quote className="h-16 w-16 text-gray-200" />
          </div>
          
          <div className="relative bg-white rounded-2xl shadow-soft p-8 md:p-12 border border-gray-100 animate-fade-in">
            <div className="mb-8">
              <p className="text-lg md:text-xl text-gray-700 italic">
                "{testimonialsData[currentIndex].content}"
              </p>
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <img 
                  src={testimonialsData[currentIndex].avatarUrl} 
                  alt={testimonialsData[currentIndex].author} 
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">{testimonialsData[currentIndex].author}</p>
                <p className="text-sm text-gray-600">{testimonialsData[currentIndex].role}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-brand-blue transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? "bg-brand-blue" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-brand-blue transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
