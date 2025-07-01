
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Euro, 
  TrendingUp, 
  Phone, 
  Video,
  Eye
} from "lucide-react";
import ZoomInterface from "@/components/calls/ZoomInterface";

const matches = [
  {
    id: 1,
    name: "TechSoft Solutions GmbH",
    location: "Leipzig, Sachsen",
    industry: "Software-Entwicklung",
    employees: 25,
    revenue: "2.5M",
    growth: "+15%",
    image: "/lovable-uploads/65659df0-e4fd-4300-bed8-315ad1b97014.png",
    description: "Spezialisiert auf Unternehmenssoftware und Cloud-Lösungen",
    matchPercentage: 92
  },
  {
    id: 2,
    name: "Dresden Automotive Parts",
    location: "Dresden, Sachsen",
    industry: "Automobilzulieferer",
    employees: 85,
    revenue: "12.5M",
    growth: "+8%",
    image: "/lovable-uploads/321549e1-f430-4762-95d8-88d8c4f87bf7.png",
    description: "Führender Hersteller von Präzisionsteilen für die Automobilindustrie",
    matchPercentage: 88
  }
];

const NewMatches = () => {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const [isCallOpen, setIsCallOpen] = useState(false);

  const handleCallClick = (matchId: number) => {
    setSelectedMatch(matchId);
    setIsCallOpen(true);
  };

  return (
    <>
      <Card className="shadow-soft h-fit">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
            <TrendingUp className="h-5 w-5 text-brand-blue mr-2" />
            Neue Matches
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {matches.map((match) => (
              <div key={match.id} className="group relative">
                <Card className="border border-gray-200 hover:border-brand-blue transition-all duration-300 hover:shadow-lg cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <img
                          src={match.image}
                          alt={match.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="absolute -top-2 -right-2">
                          <Badge className="bg-green-500 text-white text-xs px-2 py-1">
                            {match.matchPercentage}%
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                          {match.name}
                        </h3>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                          {match.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-3">
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {match.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {match.employees} MA
                          </div>
                          <div className="flex items-center">
                            <Euro className="h-3 w-3 mr-1" />
                            {match.revenue}
                          </div>
                          <div className="flex items-center text-green-600">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {match.growth}
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs flex-1 hover:bg-brand-blue hover:text-white"
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            Details
                          </Button>
                          <Button
                            size="sm"
                            className="bg-brand-blue hover:bg-brand-blue/90 text-white text-xs"
                            onClick={() => handleCallClick(match.id)}
                          >
                            <Phone className="h-3 w-3 mr-1" />
                            Anrufen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <ZoomInterface 
        isOpen={isCallOpen} 
        onClose={() => setIsCallOpen(false)} 
      />
    </>
  );
};

export default NewMatches;
