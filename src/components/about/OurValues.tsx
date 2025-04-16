
import { Heart, Shield, Users, Lightbulb, Rocket, Scale } from "lucide-react";

const values = [
  {
    title: "Vertrauen",
    description: "Wir schaffen eine vertrauensvolle Umgebung für alle Beteiligten.",
    icon: Heart,
    color: "bg-red-500",
  },
  {
    title: "Diskretion",
    description: "Absolute Vertraulichkeit ist die Grundlage unserer Arbeit.",
    icon: Shield,
    color: "bg-brand-blue",
  },
  {
    title: "Gemeinschaft",
    description: "Wir verbinden Menschen mit gemeinsamen Zielen und Werten.",
    icon: Users,
    color: "bg-amber-500",
  },
  {
    title: "Innovation",
    description: "Wir entwickeln ständig neue Lösungen für komplexe Herausforderungen.",
    icon: Lightbulb,
    color: "bg-yellow-400",
  },
  {
    title: "Dynamik",
    description: "Wir arbeiten agil und passen uns schnell an Veränderungen an.",
    icon: Rocket,
    color: "bg-brand-teal",
  },
  {
    title: "Fairness",
    description: "Wir sorgen für ausgewogene und faire Lösungen für alle Parteien.",
    icon: Scale,
    color: "bg-indigo-500",
  },
];

const OurValues = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Unsere Werte</h2>
          <p className="text-lg text-gray-600">
            Diese Grundsätze leiten unser Handeln und definieren, 
            wie wir mit unseren Kunden, Partnern und miteinander umgehen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-soft-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-14 w-14 rounded-2xl ${value.color} flex items-center justify-center text-white mb-6`}>
                <value.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
