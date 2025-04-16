
import { useState } from "react";
import { TeamMember } from "@/types";
import { Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Markus Weber",
    role: "Gründer & CEO",
    bio: "Mit über 20 Jahren Erfahrung in der Unternehmensberatung und M&A hat Markus Connect.Now gegründet, um den Mittelstand zu stärken.",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah Müller",
    role: "COO",
    bio: "Sarah hat zuvor erfolgreiche Startups im Fintech-Bereich aufgebaut und bringt wertvolle operative Expertise ein.",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Thomas Becker",
    role: "CTO",
    bio: "Als Tech-Visionär hat Thomas die innovative Matchmaking-Plattform von Connect.Now entwickelt und ständig verbessert.",
    imageUrl: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    name: "Julia Schmidt",
    role: "Head of M&A",
    bio: "Mit ihrem Hintergrund in Wirtschaftsrecht und Unternehmensbewertung leitet Julia unser M&A-Team mit höchster Präzision.",
    imageUrl: "https://randomuser.me/api/portraits/women/29.jpg"
  },
  {
    name: "Alexander Krause",
    role: "Chief Financial Officer",
    bio: "Alexander bringt seine Expertise aus führenden Investmentbanken ein, um finanzielle Aspekte der Übernahmen zu optimieren.",
    imageUrl: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Laura Schneider",
    role: "Head of Customer Success",
    bio: "Laura sorgt mit ihrem Team dafür, dass jeder Kunde auf seiner Reise optimal betreut wird.",
    imageUrl: "https://randomuser.me/api/portraits/women/17.jpg"
  }
];

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const membersPerView = 3;
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Unser Team</h2>
          <p className="text-lg text-gray-600">
            Lernen Sie die Experten kennen, die Connect.Now zu dem gemacht haben, was es heute ist.
            Ein Team mit Leidenschaft für erfolgreiche Unternehmensnachfolge.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-soft overflow-hidden group hover:shadow-soft-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="flex space-x-4">
                      <a href="#" className="text-white hover:text-brand-teal transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-white hover:text-brand-teal transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-brand-teal font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
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
                className="rounded-full h-12 w-12"
                aria-label="Previous team members"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center space-x-2">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                      idx === currentIndex ? "bg-brand-blue" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full h-12 w-12"
                aria-label="Next team members"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
