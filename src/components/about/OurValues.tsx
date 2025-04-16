
import { Heart, Shield, Users, Lightbulb, Rocket, Scale } from "lucide-react";

const values = [
  {
    title: "Vertrauen",
    description: "Wir schaffen eine vertrauensvolle Umgebung für alle Beteiligten.",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    shadowColor: "shadow-red-500/10",
  },
  {
    title: "Diskretion",
    description: "Absolute Vertraulichkeit ist die Grundlage unserer Arbeit.",
    icon: Shield,
    color: "from-brand-blue to-blue-400",
    shadowColor: "shadow-blue-500/10",
  },
  {
    title: "Gemeinschaft",
    description: "Wir verbinden Menschen mit gemeinsamen Zielen und Werten.",
    icon: Users,
    color: "from-amber-500 to-yellow-400",
    shadowColor: "shadow-amber-500/10",
  },
  {
    title: "Innovation",
    description: "Wir entwickeln ständig neue Lösungen für komplexe Herausforderungen.",
    icon: Lightbulb,
    color: "from-yellow-400 to-amber-300",
    shadowColor: "shadow-yellow-400/10",
  },
  {
    title: "Dynamik",
    description: "Wir arbeiten agil und passen uns schnell an Veränderungen an.",
    icon: Rocket,
    color: "from-brand-teal to-emerald-400",
    shadowColor: "shadow-emerald-500/10",
  },
  {
    title: "Fairness",
    description: "Wir sorgen für ausgewogene und faire Lösungen für alle Parteien.",
    icon: Scale,
    color: "from-indigo-500 to-purple-400",
    shadowColor: "shadow-indigo-500/10",
  },
];

const OurValues = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[40%] h-[40%] bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[40%] bg-gradient-to-tr from-indigo-50 to-blue-50 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-red-500 mr-3" />
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-red-500/20"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">
            Unsere Werte
          </h2>
          <p className="text-lg text-gray-600">
            Diese Grundsätze leiten unser Handeln und definieren, 
            wie wir mit unseren Kunden, Partnern und miteinander umgehen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-all duration-500 ${value.shadowColor}`}></div>
              
              <div 
                className="relative bg-white rounded-2xl shadow-soft p-8 hover:shadow-soft-lg transition-all duration-300 group-hover:translate-y-[-5px] h-full animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-teal transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
