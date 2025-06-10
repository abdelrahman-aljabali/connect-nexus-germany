
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageSquare, FileText, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Aktive Matches",
    value: "12",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    title: "Ungelesene Nachrichten",
    value: "5",
    icon: MessageSquare,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Hochgeladene Dokumente",
    value: "8",
    icon: FileText,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    title: "Prozessfortschritt",
    value: "Phase 3",
    icon: TrendingUp,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
];

const QuickStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-soft hover:shadow-soft-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickStats;
