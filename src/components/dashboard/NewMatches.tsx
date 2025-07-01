
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Euro, Users, Eye } from "lucide-react";

const newMatches = [
  {
    id: 1,
    name: "Leipziger Tech Innovation",
    industry: "Software Entwicklung",
    location: "Leipzig",
    revenue: "1,8M",
    employees: 14,
    matchScore: 94,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    name: "Dresdner Maschinenbau Plus",
    industry: "Maschinenbau",
    location: "Dresden",
    revenue: "3,2M",
    employees: 28,
    matchScore: 91,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop"
  }
];

const NewMatches = () => {
  const handleMatchClick = (match: any) => {
    console.log("New match clicked:", match);
    // Navigate to detailed view
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <Building className="h-5 w-5 text-brand-blue" />
          Neue Matches
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {newMatches.map((match) => (
            <div
              key={match.id}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => handleMatchClick(match)}
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={match.image} 
                  alt={match.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-green-100 text-green-800 text-xs">
                    {match.matchScore}% Match
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1 group-hover:text-brand-blue transition-colors">
                  {match.name}
                </h3>
                <p className="text-xs text-gray-600 mb-2">{match.industry}</p>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <MapPin className="h-3 w-3" />
                    <span>{match.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Euro className="h-3 w-3" />
                    <span>{match.revenue} Umsatz</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Users className="h-3 w-3" />
                    <span>{match.employees} Mitarbeiter</span>
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  className="w-full mt-3 bg-brand-blue hover:bg-brand-blue/90 text-xs"
                >
                  <Eye className="mr-1 h-3 w-3" />
                  Details ansehen
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <Button variant="outline" size="sm" className="text-brand-blue border-brand-blue hover:bg-brand-blue/10">
            Alle neuen Matches anzeigen
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewMatches;
