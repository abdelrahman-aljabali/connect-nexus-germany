import { useState } from "react";
import { TeamMember } from "@/types";
import {
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
  Award,
  Briefcase,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Jan-Olav Henck",
    role: "CEO",
    bio: "30 Jahre internationale Erfahrung in Führungspositionen in der Pharmaindustrie.",
    imageUrl: "/lovable-uploads/2eed3487-7338-4578-aad4-e1969c646162.png",
  },
  {
    name: "Adrian Tobisch",
    role: "COO",
    bio: "15 Jahre in Führungspositionen in der Fertigung sowie Aufbau und Verkauf von zwei Unternehmen.",
    imageUrl: "/lovable-uploads/65659df0-e4fd-4300-bed8-315ad1b97014.png",
  },
  {
    name: "Abdelrahman Aljabali",
    role: "CTO",
    bio: "Technologievisionär mit umfangreicher Erfahrung in der Entwicklung innovativer digitaler Lösungen.",
    imageUrl: "/lovable-uploads/321549e1-f430-4762-95d8-88d8c4f87bf7.png",
  },
];

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const membersPerView =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const totalSlides = Math.ceil(teamMembers.length / membersPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleMembers = teamMembers.slice(
    currentIndex * membersPerView,
    (currentIndex + 1) * membersPerView
  );

  return (
    <section className="py-24 overflow-hidden relative bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-brand-blue/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-brand-teal/5 blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-brand-blue/5 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-brand-blue mr-3" />
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-brand-blue/20"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">
            Unser Expertentam
          </h2>
          <p className="text-lg text-gray-600">
            Lernen Sie die Experten kennen, die Connect.Now zu dem gemacht
            haben, was es heute ist. Ein Team mit Leidenschaft für erfolgreiche
            Unternehmensnachfolge.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {visibleMembers.map((member, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                <div
                  className="bg-white rounded-2xl shadow-soft overflow-hidden group-hover:shadow-soft-lg transition-all duration-300 animate-fade-in h-full flex flex-col"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-tr from-brand-blue to-brand-teal/60"></div>
                    <Avatar className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-32 border-4 border-white shadow-lg">
                      <AvatarImage src={member.imageUrl} alt={member.name} />
                      <AvatarFallback className="bg-brand-blue text-white text-2xl">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-1 text-center">
                      {member.name}
                    </h3>
                    <p className="text-brand-teal font-medium mb-4 text-center">
                      {member.role}
                    </p>
                    <div className="flex items-start mb-4 flex-grow">
                      <div className="mr-3 mt-1 text-brand-blue">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                    <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-brand-blue transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-brand-blue transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation controls */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-12 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full h-12 w-12 border-brand-blue/20 hover:bg-brand-blue/5 hover:border-brand-blue transition-colors"
                aria-label="Previous team members"
              >
                <ChevronLeft className="h-5 w-5 text-brand-blue" />
              </Button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-gradient-to-r from-brand-blue to-brand-teal scale-125"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full h-12 w-12 border-brand-blue/20 hover:bg-brand-blue/5 hover:border-brand-blue transition-colors"
                aria-label="Next team members"
              >
                <ChevronRight className="h-5 w-5 text-brand-blue" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
