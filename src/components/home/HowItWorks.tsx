
import { UserPlus, Building, ListChecks, SearchCheck, Handshake } from "lucide-react";
import { HowItWorksStep } from "@/types";

const stepsData: HowItWorksStep[] = [
  {
    title: "1. Registrieren",
    description: "Erstellen Sie ein kostenloses Konto als Verkäufer oder Nachfolger.",
    icon: UserPlus,
  },
  {
    title: "2. Profil erstellen",
    description: "Verkäufer: Erfassen Sie relevante Informationen zu Ihrem Unternehmen.",
    icon: Building,
  },
  {
    title: "3. Anforderungen definieren",
    description: "Käufer: Geben Sie Ihre Suchkriterien und Qualifikationen an.",
    icon: ListChecks,
  },
  {
    title: "4. Matching",
    description: "Unser Algorithmus schlägt passende Verkäufer/Käufer vor.",
    icon: SearchCheck,
  },
  {
    title: "5. Kontaktaufnahme",
    description: "Bei beidseitigem Interesse: diskrete Kontaktaufnahme und Begleitung.",
    icon: Handshake,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">So funktioniert's</h2>
          <p className="text-lg text-gray-600">
            Connect.Now bietet einen sicheren und effizienten Prozess für die Unternehmensnachfolge.
            Folgen Sie diesen Schritten zu einer erfolgreichen Übergabe oder Übernahme.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {stepsData.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-center max-w-4xl w-full mb-8 md:mb-12 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center text-white mb-4 md:mb-0 md:mr-8">
                <step.icon className="h-8 w-8" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < stepsData.length - 1 && (
                <div className="hidden md:block h-16 border-l-2 border-dashed border-gray-300 mx-8 my-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
