import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageSquare, Star, MapPin, Euro, Users, Search, Filter, Sparkles, Building, Target, Eye } from "lucide-react";

const demoMatches = [
  {
    id: 1,
    name: "DresdTech Solutions GmbH",
    industry: "Software Entwicklung",
    location: "Dresden",
    revenue: "2,5M",
    employees: 15,
    matchScore: 92,
    status: "confirmed",
    description: "Führendes Software-Entwicklungsunternehmen spezialisiert auf Unternehmenslösungen in Dresden.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    name: "Sächsische Bäckerei Meister",
    industry: "Bäckerei",
    location: "Leipzig",
    revenue: "850K",
    employees: 12,
    matchScore: 88,
    status: "shortlisted",
    description: "Traditionelle Bäckerei mit modernen Backverfahren und 3 Filialen in Leipzig.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    name: "Chemnitzer Maschinenbau AG",
    industry: "Maschinenbau",
    location: "Chemnitz",
    revenue: "4,2M",
    employees: 35,
    matchScore: 90,
    status: "new",
    description: "Spezialist für Industriemaschinen mit 50-jähriger Tradition in Chemnitz.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    name: "Erzgebirge Holzwerk",
    industry: "Holzverarbeitung",
    location: "Annaberg-Buchholz",
    revenue: "1,8M",
    employees: 22,
    matchScore: 85,
    status: "confirmed",
    description: "Traditionelle Holzverarbeitung und Spielwarenherstellung aus dem Erzgebirge.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    name: "Sächsische Textil Innovation",
    industry: "Textilproduktion",
    location: "Plauen",
    revenue: "3,1M",
    employees: 28,
    matchScore: 87,
    status: "new",
    description: "Moderne Textilproduktion mit Fokus auf nachhaltige Materialien in Plauen.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    name: "Lausitzer Energietechnik",
    industry: "Erneuerbare Energie",
    location: "Görlitz",
    revenue: "2,8M",
    employees: 19,
    matchScore: 89,
    status: "shortlisted",
    description: "Spezialist für Solartechnik und Windenergieanlagen in der Lausitz.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop"
  },
  {
    id: 7,
    name: "Vogtländer Gastronomiebetrieb",
    industry: "Gastronomie",
    location: "Zwickau",
    revenue: "950K",
    employees: 16,
    matchScore: 83,
    status: "new",
    description: "Etablierter Gastronomiebetrieb mit regionalem Fokus im Vogtland.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop"
  },
  {
    id: 8,
    name: "Freiberger Pharmalogistik",
    industry: "Logistik",
    location: "Freiberg",
    revenue: "3,5M",
    employees: 42,
    matchScore: 91,
    status: "confirmed",
    description: "Spezialisierte Pharmalogistik mit modernsten Kühlketten in Freiberg.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop"
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

  const handleBusinessClick = (business: any) => {
    console.log("Business clicked:", business);
  };

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div 
        className="relative min-h-[500px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            {/* Main Title */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                Ein Unternehmen zum{' '}
                <span className="text-brand-blue font-extrabold tracking-wide drop-shadow-md">
                  Verkauf
                </span>{' '}
                finden
              </h1>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Entdecken Sie Sachsens größten Marktplatz für Unternehmensverkäufe mit KI-gestützter Suche
              </p>
            </div>

            {/* Category Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <Button className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Building className="mr-2 h-4 w-4" />
                Unternehmen
              </Button>
              <Button variant="outline" className="border-white/50 text-black bg-white/90 hover:bg-white backdrop-blur-md px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Target className="mr-2 h-4 w-4" />
                Franchises
              </Button>
            </div>
          </div>

          {/* Enhanced Search Card with Blur Background */}
          <div className="relative">
            <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20">
              {/* Main Search Bar */}
              <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <div className="flex-1 relative group">
                  <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 h-5 w-5 z-10" />
                  <Input
  type="text"
  placeholder="KI-gestützte Suche: Beschreiben Sie Ihr gewünschtes Unternehmen in Sachsen..."
  value={filters.search}
  onChange={(e) => handleSearch(e.target.value)}
  className="relative pl-12 pr-4 py-5 text-base border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-2xl bg-white/20 backdrop-blur-sm shadow-inner transition-all duration-300 placeholder:text-white text-white"
/>



                </div>
                
                <div className="lg:w-60">
                  <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                    <SelectTrigger className="h-12 border-2 border-gray-200 rounded-2xl bg-white/20 backdrop-blur-sm shadow-inner text-white">
                      <MapPin className="mr-2 h-4 w-4 text-white" />
                      <SelectValue placeholder="Alle Standorte in Sachsen" className="text-white" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200 rounded-xl shadow-xl">
                      <SelectItem value="all">Alle Standorte in Sachsen</SelectItem>
                      <SelectItem value="dresden">Dresden</SelectItem>
                      <SelectItem value="leipzig">Leipzig</SelectItem>
                      <SelectItem value="chemnitz">Chemnitz</SelectItem>
                      <SelectItem value="zwickau">Zwickau</SelectItem>
                      <SelectItem value="plauen">Plauen</SelectItem>
                      <SelectItem value="goerlitz">Görlitz</SelectItem>
                      <SelectItem value="freiberg">Freiberg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-5 font-bold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <Search className="mr-2 h-5 w-5" />
                  Suchen
                </Button>
              </div>

              {/* Advanced Filters Toggle */}
              <div className="text-center">
                <Button
                  variant="ghost"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-white/10 rounded-xl px-6 py-2 transition-all duration-300"
                >
                  <Filter className="h-4 w-4" />
                  {showFilters ? "Erweiterte Filter ausblenden" : "Erweiterte Filter anzeigen"}
                </Button>

                {showFilters && (
                  <div className="mt-4 p-5 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-white">Branche</label>
                        <Select value={filters.industry} onValueChange={(value) => setFilters({...filters, industry: value})}>
                          <SelectTrigger className="bg-white/90 border-gray-300 rounded-xl shadow-sm">
                            <SelectValue placeholder="Alle Branchen" />
                          </SelectTrigger>
                          <SelectContent className="bg-white rounded-xl shadow-xl">
                            <SelectItem value="all">Alle Branchen</SelectItem>
                            <SelectItem value="software">Software Entwicklung</SelectItem>
                            <SelectItem value="baeckerei">Bäckerei</SelectItem>
                            <SelectItem value="maschinenbau">Maschinenbau</SelectItem>
                            <SelectItem value="holzverarbeitung">Holzverarbeitung</SelectItem>
                            <SelectItem value="textil">Textilproduktion</SelectItem>
                            <SelectItem value="energie">Erneuerbare Energie</SelectItem>
                            <SelectItem value="gastronomie">Gastronomie</SelectItem>
                            <SelectItem value="logistik">Logistik</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-white">Min. Umsatz</label>
                        <Input 
                          placeholder="z.B. 500K" 
                          value={filters.revenueMin}
                          onChange={(e) => setFilters({...filters, revenueMin: e.target.value})}
                          className="bg-white/90 border-gray-300 rounded-xl shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-white">Max. Umsatz</label>
                        <Input 
                          placeholder="z.B. 5M" 
                          value={filters.revenueMax}
                          onChange={(e) => setFilters({...filters, revenueMax: e.target.value})}
                          className="bg-white/90 border-gray-300 rounded-xl shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-white">Unternehmensgröße</label>
                        <Select value={filters.employees} onValueChange={(value) => setFilters({...filters, employees: value})}>
                          <SelectTrigger className="bg-white/90 border-gray-300 rounded-xl shadow-sm">
                            <SelectValue placeholder="Alle Größen" />
                          </SelectTrigger>
                          <SelectContent className="bg-white rounded-xl shadow-xl">
                            <SelectItem value="all">Alle Größen</SelectItem>
                            <SelectItem value="1-10">1-10 Mitarbeiter</SelectItem>
                            <SelectItem value="11-25">11-25 Mitarbeiter</SelectItem>
                            <SelectItem value="26-50">26-50 Mitarbeiter</SelectItem>
                            <SelectItem value="50+">50+ Mitarbeiter</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-4 justify-center">
                      <Button onClick={resetFilters} variant="outline" className="px-6 py-2 rounded-xl bg-white/90 text-gray-900 border-white/50">
                        Filter zurücksetzen
                      </Button>
                      <Button className="bg-brand-blue hover:bg-brand-blue/90 px-6 py-2 rounded-xl">
                        Filter anwenden
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto p-6 bg-gray-50">
        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Verfügbare Unternehmen in Sachsen</h2>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-blue-600">{filteredMatches.length}</span> Inserate gefunden
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2 text-sm">
              <Filter className="h-4 w-4" />
              Sortieren
            </Button>
          </div>
        </div>

        {/* Enhanced Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMatches.map((match) => (
            <Card key={match.id} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white border-0 shadow-lg hover:-translate-y-2 cursor-pointer" onClick={() => handleBusinessClick(match)}>
              <div className="relative overflow-hidden">
                <img 
                  src={match.image} 
                  alt={match.name}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <Badge className={`${getStatusColor(match.status)} shadow-lg text-xs`}>
                    {getStatusText(match.status)}
                  </Badge>
                </div>
                
                {/* Match Score */}
                <div className="absolute top-3 left-3">
                  <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 shadow-lg">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="font-bold text-xs text-gray-900">{match.matchScore}%</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Button className="bg-white text-brand-blue hover:bg-gray-100 rounded-full px-4 py-1 text-sm font-semibold shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="mr-1 h-3 w-3" />
                    Details ansehen
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg mb-1 group-hover:text-brand-blue transition-colors line-clamp-1">
                  {match.name}
                </CardTitle>
                <p className="text-xs text-gray-600 font-medium bg-gray-100 rounded-full px-2 py-1 inline-block w-fit">
                  {match.industry}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-xs text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {match.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-3 w-3 text-gray-600" />
                    </div>
                    <span className="font-medium">{match.location}, Sachsen</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Euro className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="font-medium">{match.revenue} Umsatz</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="font-medium">{match.employees} Mitarbeiter</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-brand-blue hover:bg-brand-blue/90 rounded-xl shadow-lg text-sm" size="sm">
                    Profil ansehen
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1 border-2 hover:bg-red-50 hover:border-red-200 rounded-xl">
                    <Heart className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1 border-2 hover:bg-blue-50 hover:border-blue-200 rounded-xl">
                    <MessageSquare className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results State */}
        {filteredMatches.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Keine Inserate gefunden</h3>
            <p className="text-gray-600 mb-4 max-w-md mx-auto text-sm">
              Versuchen Sie andere Suchbegriffe oder passen Sie Ihre Filter an, um mehr Ergebnisse zu finden.
            </p>
            <Button onClick={resetFilters} className="bg-brand-blue hover:bg-brand-blue/90 rounded-xl px-6 py-2 text-sm">
              Filter zurücksetzen
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchesMain;
