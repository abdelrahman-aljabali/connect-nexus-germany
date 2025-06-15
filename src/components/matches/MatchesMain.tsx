
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageSquare, Star, MapPin, Euro, Users, Search, Filter, Sparkles, TrendingUp, Building, Target, Eye } from "lucide-react";

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
      {/* Hero Section with Real Background */}
      <div 
        className="relative min-h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')"
        }}
      >
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-30 animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            {/* Main Title with Animation */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
                Ein Unternehmen zum 
                <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"> Verkauf </span>
                finden
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Entdecken Sie Deutschlands größten Marktplatz für Unternehmensverkäufe mit KI-gestützter Suche
              </p>
            </div>

            {/* Category Buttons with Glass Effect */}
            <div className="flex justify-center space-x-4 mb-12">
              <Button className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Building className="mr-2 h-5 w-5" />
                Unternehmen
              </Button>
              <Button variant="outline" className="border-white/50 text-white hover:bg-white/20 backdrop-blur-md px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Target className="mr-2 h-5 w-5" />
                Franchises
              </Button>
            </div>
          </div>

          {/* Enhanced Search Card */}
          <div className="relative">
            {/* Background Blur Effect */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl"></div>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* Main Search Bar */}
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 h-6 w-6 z-10" />
                  <Input
                    type="text"
                    placeholder="KI-gestützte Suche: Beschreiben Sie Ihr gewünschtes Unternehmen..."
                    value={filters.search}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="relative pl-12 pr-4 py-6 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-2xl bg-white shadow-inner transition-all duration-300"
                  />
                </div>
                
                <div className="lg:w-72">
                  <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                    <SelectTrigger className="h-14 border-2 border-gray-200 rounded-2xl bg-white shadow-inner text-lg">
                      <MapPin className="mr-2 h-5 w-5 text-gray-500" />
                      <SelectValue placeholder="Alle Standorte" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200 rounded-xl shadow-xl">
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
                
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <Search className="mr-2 h-6 w-6" />
                  Suchen
                </Button>
              </div>

              {/* Advanced Filters Toggle */}
              <div className="text-center">
                <Button
                  variant="ghost"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl px-6 py-3 transition-all duration-300"
                >
                  <Filter className="h-5 w-5" />
                  {showFilters ? "Erweiterte Filter ausblenden" : "Erweiterte Filter anzeigen"}
                </Button>

                {showFilters && (
                  <div className="mt-6 p-6 bg-gray-50/80 backdrop-blur-sm rounded-2xl border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-gray-700">Branche</label>
                        <Select value={filters.industry} onValueChange={(value) => setFilters({...filters, industry: value})}>
                          <SelectTrigger className="bg-white border-gray-300 rounded-xl shadow-sm">
                            <SelectValue placeholder="Alle Branchen" />
                          </SelectTrigger>
                          <SelectContent className="bg-white rounded-xl shadow-xl">
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
                        <label className="block text-sm font-semibold mb-3 text-gray-700">Min. Umsatz</label>
                        <Input 
                          placeholder="z.B. 500K" 
                          value={filters.revenueMin}
                          onChange={(e) => setFilters({...filters, revenueMin: e.target.value})}
                          className="bg-white border-gray-300 rounded-xl shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-3 text-gray-700">Max. Umsatz</label>
                        <Input 
                          placeholder="z.B. 5M" 
                          value={filters.revenueMax}
                          onChange={(e) => setFilters({...filters, revenueMax: e.target.value})}
                          className="bg-white border-gray-300 rounded-xl shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-3 text-gray-700">Unternehmensgröße</label>
                        <Select value={filters.employees} onValueChange={(value) => setFilters({...filters, employees: value})}>
                          <SelectTrigger className="bg-white border-gray-300 rounded-xl shadow-sm">
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

                    <div className="mt-6 flex gap-4 justify-center">
                      <Button onClick={resetFilters} variant="outline" className="px-6 py-2 rounded-xl">
                        Filter zurücksetzen
                      </Button>
                      <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl">
                        Filter anwenden
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: Building,
                title: "Deutschlands größter",
                subtitle: "Unternehmens-Marktplatz",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: TrendingUp,
                title: "Die meisten Käufer",
                subtitle: "100.000+ erfolgreiche Verkäufe",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Target,
                title: "Die meisten Verkäufer",
                subtitle: "65.000+ Unternehmen jährlich gelistet",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Eye,
                title: "Der meiste Traffic",
                subtitle: "15M monatliche Seitenaufrufe",
                color: "from-orange-500 to-red-500"
              }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-200 mb-2">{stat.title}</h3>
                  <p className="text-xl font-bold text-white leading-tight">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto p-6 bg-gray-50">
        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Verfügbare Unternehmen</h2>
            <p className="text-gray-600">
              <span className="font-semibold text-blue-600">{filteredMatches.length}</span> Inserate gefunden
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Sortieren
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Trending
            </Button>
          </div>
        </div>

        {/* Enhanced Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMatches.map((match) => (
            <Card key={match.id} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white border-0 shadow-lg hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={match.image} 
                  alt={match.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(match.status)} shadow-lg`}>
                    {getStatusText(match.status)}
                  </Badge>
                </div>
                
                {/* Match Score */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-bold text-sm text-gray-900">{match.matchScore}%</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-6 py-2 font-semibold shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="mr-2 h-4 w-4" />
                    Details ansehen
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {match.name}
                </CardTitle>
                <p className="text-sm text-gray-600 font-medium bg-gray-100 rounded-full px-3 py-1 inline-block">
                  {match.industry}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                  {match.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="font-medium">{match.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Euro className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium">{match.revenue} Umsatz</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium">{match.employees} Mitarbeiter</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl shadow-lg" size="sm">
                    Profil ansehen
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1 border-2 hover:bg-red-50 hover:border-red-200 rounded-xl">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1 border-2 hover:bg-blue-50 hover:border-blue-200 rounded-xl">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results State */}
        {filteredMatches.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Keine Inserate gefunden</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Versuchen Sie andere Suchbegriffe oder passen Sie Ihre Filter an, um mehr Ergebnisse zu finden.
            </p>
            <Button onClick={resetFilters} className="bg-blue-600 hover:bg-blue-700 rounded-xl px-8 py-3">
              Filter zurücksetzen
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchesMain;
