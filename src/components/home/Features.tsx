
import { 
  Shield, 
  Users, 
  SearchCheck, 
  MessageSquare, 
  TrendingUp, 
  FileCheck 
} from "lucide-react";
import { FeatureItem } from "@/types";

const featuresData: FeatureItem[] = [
  {
    title: "Diskrete Vermittlung",
    description: "Sensible Unternehmensdaten werden nur mit geprüften Interessenten geteilt.",
    icon: Shield
  },
  {
    title: "Qualifizierte Käufer",
    description: "Alle potenziellen Käufer werden sorgfältig überprüft und vorqualifiziert.",
    icon: Users
  },
  {
    title: "Intelligente Matching-Algorithmen",
    description: "Unsere KI findet die passenden Käufer für Ihr Unternehmen.",
    icon: SearchCheck
  },
  {
    title: "Sichere Kommunikation",
    description: "Ende-zu-Ende verschlüsselte Kommunikation zwischen allen Parteien.",
    icon: MessageSquare
  },
  {
    title: "Marktgerechte Bewertung",
    description: "Professionelle Unterstützung bei der Unternehmensbewertung.",
    icon: TrendingUp
  },
  {
    title: "Rechtliche Unterstützung",
    description: "Zugang zu spezialisierten Anwälten und Steuerberatern.",
    icon: FileCheck
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Warum Connect.Now?</h2>
          <p className="text-lg text-gray-600">
            Unsere Plattform vereinfacht die Unternehmensnachfolge durch innovative Technologie 
            und persönliche Betreuung – für einen sicheren und erfolgreichen Verkauf.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-soft-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue mb-6">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
