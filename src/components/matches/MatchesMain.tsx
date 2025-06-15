
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageSquare, Star, MapPin, Euro, Users, Search, Filter, Sparkles } from "lucide-react";

const demoMatches = [
  {
    id: 1,
    name: "TechSoft Solutions GmbH",
    industry: "Software Entwicklung",
    location: "Berlin",
    revenue: "2,5M",
    employees: 15,
    matchScore: 92,
    status: "confirmed",
    description: "Führendes Software-Entwicklungsunternehmen spezialisiert auf Unternehmenslösungen.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    name: "GreenTech Innovations",
    industry: "Saubere Energie",
    location: "München",
    revenue: "1,8M",
    employees: 12,
    matchScore: 88,
    status: "shortlisted",
    description: "Innovative Lösungen für saubere Energie für eine nachhaltige Zukunft.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    name: "Digital Marketing Pro",
    industry: "Marketing",
    location: "Hamburg",
    revenue: "950K",
    employees: 8,
    matchScore: 84,
    status: "new",
    description: "Full-Service Digital Marketing Agentur mit nachgewiesener Erfolgsbilanz.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    name: "MedTech Devices AG",
    industry: "Medizintechnik",
    location: "Frankfurt",
    revenue: "3,2M",
    employees: 25,
    matchScore: 91,
    status: "confirmed",
    description: "Medizingerätehersteller mit internationaler Präsenz.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    name: "AutoParts Excellence",
    industry: "Automotive",
    location: "Stuttgart",
    revenue: "4,1M",
    employees: 35,
    matchScore: 87,
    status: "new",
    description: "Premium Automobilteile-Lieferant für große Hersteller.",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    name: "FoodTech Solutions",
    industry: "Lebensmitteltechnologie",
    location: "Köln",
    revenue: "1,2M",
    employees: 10,
    matchScore: 82,
    status: "shortlisted",
    description: "Innovative Lebensmittelverarbeitungstechnologie-Unternehmen.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
  }
];

const MatchesMain = () => {
  const [filters, setFilters] = useState({
    search: "",
    location: "all",
    industry: "all",
    revenueMin: "",
    revenueMax: "",
    employees: "all",
    matchScore: "all"
  });

  const [filteredMatches, setFilteredMatches] = useState(demoMatches);
  const [showFilters, setShowFilters] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "shortlisted": return "bg-yellow-100 text-yellow-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed": return "Bestätigtes Match";
      case "shortlisted": return "Auf Merkliste";
      default: return "Neues Match";
    }
  };

  const handleSearch = (searchTerm: string) => {
    setFilters({...filters, search: searchTerm});
    if (searchTerm.trim() === "") {
      setFilteredMatches(demoMatches);
    } else {
      const filtered = demoMatches.filter(match => 
        match.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        match.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMatches(filtered);
    }
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      location: "all",
      industry: "all",
      revenueMin: "",
      revenueMax: "",
      employees: "all",
      matchScore: "all"
    });
    setFilteredMatches(demoMatches);
  };

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Ein Unternehmen zum Verkauf finden</h1>
            <div className="flex justify-center space-x-4 mb-8">
              <Button 
                variant="secondary" 
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
              >
                Unternehmen
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-semibold"
              >
                Franchises
              </Button>
            </div>
          </div>

          {/* Main Search Bar */}
          <div className="bg-white rounded-lg p-6 shadow-2xl max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Sparkles className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="KI-gestützte Suche: Beschreiben Sie Ihr gewünschtes Unternehmen..."
                  value={filters.search}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 pr-4 py-4 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="md:w-64">
                <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                  <SelectTrigger className="h-12 border-gray-300">
                    <SelectValue placeholder="Alle Standorte" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="all">Alle Standorte</SelectItem>
                    <SelectItem value="berlin">Berlin</SelectItem>
                    <SelectItem value="munich">München</SelectItem>
                    <SelectItem value="hamburg">Hamburg</SelectItem>
                    <SelectItem value="frankfurt">Frankfurt</SelectItem>
                    <SelectItem value="stuttgart">Stuttgart</SelectItem>
                    <SelectItem value="cologne">Köln</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                Suchen
              </Button>
            </div>

            {/* Optional Advanced Filters */}
            <div className="mt-4">
              <Button
                variant="ghost"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Filter className="h-4 w-4" />
                {showFilters ? "Erweiterte Filter ausblenden" : "Erweiterte Filter anzeigen"}
              </Button>

              {showFilters && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Branche</label>
                      <Select value={filters.industry} onValueChange={(value) => setFilters({...filters, industry: value})}>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Alle Branchen" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="all">Alle Branchen</SelectItem>
                          <SelectItem value="software">Software Entwicklung</SelectItem>
                          <SelectItem value="energy">Saubere Energie</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="medical">Medizintechnik</SelectItem>
                          <SelectItem value="automotive">Automotive</SelectItem>
                          <SelectItem value="food">Lebensmitteltechnologie</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Min. Umsatz</label>
                      <Input 
                        placeholder="z.B. 500K" 
                        value={filters.revenueMin}
                        onChange={(e) => setFilters({...filters, revenueMin: e.target.value})}
                        className="bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Max. Umsatz</label>
                      <Input 
                        placeholder="z.B. 5M" 
                        value={filters.revenueMax}
                        onChange={(e) => setFilters({...filters, revenueMax: e.target.value})}
                        className="bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Unternehmensgröße</label>
                      <Select value={filters.employees} onValueChange={(value) => setFilters({...filters, employees: value})}>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Alle Größen" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="all">Alle Größen</SelectItem>
                          <SelectItem value="1-10">1-10 Mitarbeiter</SelectItem>
                          <SelectItem value="11-25">11-25 Mitarbeiter</SelectItem>
                          <SelectItem value="26-50">26-50 Mitarbeiter</SelectItem>
                          <SelectItem value="50+">50+ Mitarbeiter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-4">
                    <Button onClick={resetFilters} variant="outline">
                      Filter zurücksetzen
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Filter anwenden
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 text-center">
            <div>
              <h3 className="text-sm font-medium text-blue-200 mb-2">Deutschlands größter</h3>
              <p className="text-2xl font-bold">Unternehmens-Marktplatz</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-blue-200 mb-2">Die meisten Käufer</h3>
              <p className="text-2xl font-bold">100.000+ erfolgreiche Verkäufe</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-blue-200 mb-2">Die meisten Verkäufer</h3>
              <p className="text-2xl font-bold">65.000+ Unternehmen jährlich gelistet</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-blue-200 mb-2">Der meiste Traffic</h3>
              <p className="text-2xl font-bold">15M monatliche Seitenaufrufe</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-brand-blue">{filteredMatches.length}</span> Inserate gefunden
          </p>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMatches.map((match) => (
            <Card key={match.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={match.image} 
                  alt={match.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(match.status)}>
                    {getStatusText(match.status)}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-semibold text-sm">{match.matchScore}%</span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div>
                  <CardTitle className="text-xl mb-1 group-hover:text-brand-blue transition-colors">
                    {match.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 font-medium">{match.industry}</p>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{match.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{match.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Euro className="h-4 w-4 text-gray-500" />
                    <span>{match.revenue} Umsatz</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span>{match.employees} Mitarbeiter</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    Profil ansehen
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Keine Inserate gefunden</h3>
            <p className="text-gray-600 mb-4">Versuchen Sie andere Suchbegriffe oder Filter.</p>
            <Button onClick={resetFilters} variant="outline">
              Filter zurücksetzen
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchesMain;
