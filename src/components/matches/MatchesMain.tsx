import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Building2,
  Sparkles,
  Search,
} from "lucide-react";

const MatchesMain = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="flex-1 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Search Section */}
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              Ein Unternehmen zum 
              <span className="text-brand-blue"> Verkauf </span>
              finden
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Finden Sie das perfekte Unternehmen in Sachsen mit unserer intelligenten Suchfunktion
            </p>
            
            {/* Search Form */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none"
                  >
                    <option value="" className="text-gray-800">Alle Standorte in Sachsen</option>
                    <option value="leipzig" className="text-gray-800">Leipzig</option>
                    <option value="dresden" className="text-gray-800">Dresden</option>
                    <option value="chemnitz" className="text-gray-800">Chemnitz</option>
                    <option value="zwickau" className="text-gray-800">Zwickau</option>
                    <option value="plauen" className="text-gray-800">Plauen</option>
                    <option value="gorlitz" className="text-gray-800">Görlitz</option>
                    <option value="freiberg" className="text-gray-800">Freiberg</option>
                  </select>
                  <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70 pointer-events-none" />
                </div>
                
                <div className="relative">
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none"
                  >
                    <option value="" className="text-gray-800">Alle Branchen</option>
                    <option value="technology" className="text-gray-800">Technologie</option>
                    <option value="manufacturing" className="text-gray-800">Fertigung</option>
                    <option value="retail" className="text-gray-800">Einzelhandel</option>
                    <option value="services" className="text-gray-800">Dienstleistungen</option>
                    <option value="gastronomy" className="text-gray-800">Gastronomie</option>
                    <option value="healthcare" className="text-gray-800">Gesundheitswesen</option>
                    <option value="construction" className="text-gray-800">Bauwesen</option>
                    <option value="automotive" className="text-gray-800">Automobil</option>
                  </select>
                  <Building2 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70 pointer-events-none" />
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    placeholder="KI-gestützte Suche: Beschreiben Sie Ihr gewünschtes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Sparkles className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                </div>
              </div>
              
              <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-5 font-bold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <Search className="mr-2 h-5 w-5" />
                Suchen
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Listings Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Top Inserate in Sachsen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Listing Card (Repeat this for each listing) */}
            <div className="rounded-3xl shadow-xl overflow-hidden">
              <img
                src="/placeholder-company.jpg"
                alt="Company Name"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Musterfirma GmbH
                </h3>
                <p className="text-gray-600 mb-4">
                  Wir sind ein führendes Unternehmen im Bereich [Branche] und
                  suchen einen Nachfolger, der unser Geschäft mit Leidenschaft
                  weiterführt.
                </p>
                <Button variant="outline">Mehr erfahren</Button>
              </div>
            </div>
            {/* End Example Listing Card */}
            <div className="rounded-3xl shadow-xl overflow-hidden">
              <img
                src="/placeholder-company.jpg"
                alt="Company Name"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Musterfirma GmbH
                </h3>
                <p className="text-gray-600 mb-4">
                  Wir sind ein führendes Unternehmen im Bereich [Branche] und
                  suchen einen Nachfolger, der unser Geschäft mit Leidenschaft
                  weiterführt.
                </p>
                <Button variant="outline">Mehr erfahren</Button>
              </div>
            </div>
            <div className="rounded-3xl shadow-xl overflow-hidden">
              <img
                src="/placeholder-company.jpg"
                alt="Company Name"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Musterfirma GmbH
                </h3>
                <p className="text-gray-600 mb-4">
                  Wir sind ein führendes Unternehmen im Bereich [Branche] und
                  suchen einen Nachfolger, der unser Geschäft mit Leidenschaft
                  weiterführt.
                </p>
                <Button variant="outline">Mehr erfahren</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-brand-blue text-white rounded-3xl py-12 px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl mb-8">
            Kontaktieren Sie uns noch heute, um mehr über unsere Dienstleistungen
            zu erfahren und wie wir Ihnen bei der Unternehmensnachfolge helfen
            können.
          </p>
          <Button className="bg-white text-brand-blue hover:bg-blue-100 px-8 py-5 font-bold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Kostenlose Beratung vereinbaren
          </Button>
        </section>
      </div>
    </main>
  );
};

export default MatchesMain;
