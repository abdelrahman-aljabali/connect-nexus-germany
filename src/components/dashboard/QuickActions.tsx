
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, MessageSquare } from "lucide-react";

const actions = [
  {
    title: "Profil vervollständigen",
    description: "Vervollständigen Sie Ihr Profil für bessere Matches",
    icon: User,
    action: "Profil bearbeiten",
    variant: "default" as const,
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
    <Card className="shadow-soft h-fit">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-900">
          Schnellaktionen
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200 hover:border-brand-blue transition-colors"
            >
              <div className="p-2 bg-brand-blue/10 rounded-lg">
                <action.icon className="h-5 w-5 text-brand-blue" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                  {action.title}
                </h3>
                <p className="text-xs text-gray-600 mb-2">
                  {action.description}
                </p>
                <Button
                  variant={action.variant}
                  size="sm"
                  className={`text-xs ${action.variant === "default" ? "bg-brand-blue hover:bg-brand-blue/90" : ""}`}
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
