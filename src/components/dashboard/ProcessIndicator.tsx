
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Circle, ArrowRight } from "lucide-react";

const phases = [
  { name: "Registrierung", completed: true },
  { name: "Matching", completed: true },
  { name: "Erstkontakt", completed: true },
  { name: "Due Diligence", completed: false, current: true },
  { name: "Vertragsgestaltung", completed: false },
  { name: "Notarielle Abwicklung", completed: false },
];

const ProcessIndicator = () => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">
          Prozessfortschritt
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {phases.map((phase, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center space-x-2">
                {phase.completed ? (
                  <CheckCircle className="h-6 w-6 text-green-500" />
                ) : (
                  <Circle
                    className={`h-6 w-6 ${
                      phase.current ? "text-brand-blue" : "text-gray-300"
                    }`}
                  />
                )}
                <span
                  className={`text-sm font-medium ${
                    phase.current
                      ? "text-brand-blue"
                      : phase.completed
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {phase.name}
                </span>
              </div>
              {index < phases.length - 1 && (
                <ArrowRight className="h-4 w-4 text-gray-300 mx-2 hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessIndicator;
