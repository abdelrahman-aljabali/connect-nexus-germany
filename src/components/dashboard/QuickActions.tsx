
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Upload, Search, MessageSquare } from "lucide-react";

const actions = [
  {
    title: "Profil vervollständigen",
    description: "Vervollständigen Sie Ihr Profil für bessere Matches",
    icon: User,
    action: "Profil bearbeiten",
    variant: "default" as const,
  },
  {
    title: "Unternehmensprofil hochladen",
    description: "Laden Sie wichtige Dokumente hoch",
    icon: Upload,
    action: "Dokumente hochladen",
    variant: "outline" as const,
  },
  {
    title: "Matches anzeigen",
    description: "Entdecken Sie potenzielle Partner",
    icon: Search,
    action: "Matches ansehen",
    variant: "outline" as const,
  },
  {
    title: "Nachrichten bearbeiten",
    description: "Bearbeiten Sie Ihre Unterhaltungen",
    icon: MessageSquare,
    action: "Nachrichten öffnen",
    variant: "outline" as const,
  },
];

const QuickActions = () => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">
          Schnellaktionen
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {actions.map((action, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 hover:border-brand-blue transition-colors"
            >
              <div className="p-2 bg-brand-blue/10 rounded-lg">
                <action.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {action.description}
                </p>
                <Button
                  variant={action.variant}
                  size="sm"
                  className={action.variant === "default" ? "bg-brand-blue hover:bg-brand-blue/90" : ""}
                >
                  {action.action}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
