import { useState } from "react";
import { Search, MapPin, Building2, Euro, Calendar, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MatchesMain = () => {
  // State variables
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [revenueFilter, setRevenueFilter] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [matches, setMatches] = useState([
    {
      id: 1,
      title: "Bäckerei zum Verkauf in Top-Lage",
      location: "München",
      industry: "Gastronomie",
      revenue: "500.000 - 1 Mio. €",
      description: "Traditionsbäckerei sucht Nachfolger",
      date: "2023-01-15",
    },
    {
      id: 2,
      title: "IT-Firma mit Spezialisierung auf Cloud-Lösungen",
      location: "Berlin",
      industry: "IT",
      revenue: "1 - 5 Mio. €",
      description: "Erfolgreiches IT-Unternehmen sucht Käufer",
      date: "2023-02-20",
    },
    {
      id: 3,
      title: "Boutique-Hotel in malerischer Umgebung",
      location: "Hamburg",
      industry: "Tourismus",
      revenue: "200.000 - 500.000 €",
      description: "Kleines Hotel mit großem Potenzial",
      date: "2023-03-10",
    },
    {
      id: 4,
      title: "Etablierter Handwerksbetrieb im Herzen der Stadt",
      location: "Köln",
      industry: "Handwerk",
      revenue: "100.000 - 200.000 €",
      description: "Familienbetrieb sucht erfahrenen Nachfolger",
      date: "2023-04-05",
    },
    {
      id: 5,
      title: "Modernes Café mit Fokus auf Nachhaltigkeit",
      location: "Frankfurt",
      industry: "Gastronomie",
      revenue: "Bis 100.000 €",
      description: "Trendiges Café sucht umweltbewussten Betreiber",
      date: "2023-05-12",
    },
    {
      id: 6,
      title: "Innovatives Software-Startup mit viel Potenzial",
      location: "Stuttgart",
      industry: "IT",
      revenue: "5 - 10 Mio. €",
      description: "Zukunftsorientiertes Startup sucht Investor",
      date: "2023-06-18",
    },
    {
      id: 7,
      title: "Gemütliches Gasthaus mit regionaler Küche",
      location: "Nürnberg",
      industry: "Tourismus",
      revenue: "300.000 - 700.000 €",
      description: "Traditionsreiches Gasthaus sucht neuen Pächter",
      date: "2023-07-24",
    },
    {
      id: 8,
      title: "Erfolgreiches Architekturbüro mit renommierten Projekten",
      location: "Düsseldorf",
      industry: "Handwerk",
      revenue: "800.000 - 1,5 Mio. €",
      description: "Kreatives Büro sucht erfahrenen Architekten",
      date: "2023-08-30",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const matchesPerPage = 6;

  // Handlers
  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e: any) => {
    setLocationFilter(e.target.value);
  };

  const handleIndustryChange = (value: string) => {
    setIndustryFilter(value);
  };

  const handleRevenueChange = (value: string) => {
    setRevenueFilter(value);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setLocationFilter("");
    setIndustryFilter("");
    setRevenueFilter("");
  };

  // Pagination
  const indexOfLastMatch = currentPage * matchesPerPage;
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
  const currentMatches = matches.slice(indexOfFirstMatch, indexOfLastMatch);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 to-brand-blue/90 z-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Business succession handshake"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        <div className="container mx-auto relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ein Unternehmen zum{" "}
            <span className="text-brand-blue bg-white px-2 py-1 rounded">
              Verkauf
            </span>{" "}
            finden
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entdecken Sie Unternehmen aus verschiedenen Branchen, die einen
            Nachfolger suchen
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Nach Unternehmen suchen..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pr-12"
            />
            <Search className="absolute top-3 right-3 h-5 w-5 text-gray-500" />
          </div>

          <Button onClick={toggleFilter} variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
        </div>

        {/* Advanced Filters */}
        {isFilterOpen && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Input
                type="text"
                placeholder="Standort"
                value={locationFilter}
                onChange={handleLocationChange}
              />
            </div>

            <div>
              <Select onValueChange={handleIndustryChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Branche wählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Gastronomie">Gastronomie</SelectItem>
                  <SelectItem value="IT">IT</SelectItem>
                  <SelectItem value="Tourismus">Tourismus</SelectItem>
                  <SelectItem value="Handwerk">Handwerk</SelectItem>
                  {/* Add more industries as needed */}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select onValueChange={handleRevenueChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Umsatz wählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bis 100.000 €">Bis 100.000 €</SelectItem>
                  <SelectItem value="100.000 - 200.000 €">
                    100.000 - 200.000 €
                  </SelectItem>
                  <SelectItem value="200.000 - 500.000 €">
                    200.000 - 500.000 €
                  </SelectItem>
                  <SelectItem value="500.000 - 1 Mio. €">
                    500.000 - 1 Mio. €
                  </SelectItem>
                  <SelectItem value="1 - 5 Mio. €">1 - 5 Mio. €</SelectItem>
                  <SelectItem value="5 - 10 Mio. €">5 - 10 Mio. €</SelectItem>
                  {/* Add more revenue ranges as needed */}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Clear Filters Button */}
        {(searchTerm || locationFilter || industryFilter || revenueFilter) && (
          <Button
            variant="ghost"
            className="mt-4"
            onClick={clearFilters}
          >
            Filter löschen <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentMatches.map((match) => (
            <Card key={match.id}>
              <CardHeader>
                <CardTitle>{match.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="mr-2 h-4 w-4" />
                    {match.location}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Building2 className="mr-2 h-4 w-4" />
                    {match.industry}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Euro className="mr-2 h-4 w-4" />
                    {match.revenue}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="mr-2 h-4 w-4" />
                    {new Date(match.date).toLocaleDateString("de-DE")}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">{match.description}</p>
                <Button className="mt-4 w-full">
                  Details ansehen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(matches.length / matchesPerPage) }).map(
            (item, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                className="mx-1"
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchesMain;
