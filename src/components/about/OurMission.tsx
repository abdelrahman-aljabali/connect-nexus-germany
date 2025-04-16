
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, BadgeCheck, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurMission = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-brand-blue/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-1/4 w-1/4 h-1/3 bg-gradient-to-br from-brand-teal/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Image frame with gradient border */}
              <div className="absolute -inset-6 rounded-2xl bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-soft-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80" 
                  alt="Business handshake" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent opacity-20"></div>
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-soft p-4 border border-gray-100 animate-pulse">
                <div className="flex items-center">
                  <div className="mr-3 bg-brand-blue/10 text-brand-blue p-2 rounded-xl">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium text-gray-800">Seit 2018 im Dienst des Mittelstands</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center mb-4">
              <div className="h-1 w-10 bg-gradient-to-r from-brand-blue to-brand-teal rounded-full"></div>
              <span className="ml-3 text-brand-blue font-medium text-sm uppercase tracking-wide">Unsere Vision</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">Unsere Mission</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Connect.Now wurde mit einer klaren Vision gegründet: Die Unternehmensnachfolge in Deutschland 
              zu revolutionieren und sie für alle Beteiligten effizienter, sicherer und erfolgreicher zu gestalten.
            </p>
            
            <div className="space-y-6">
              <Card className="border-none shadow-soft bg-white hover:shadow-soft-lg transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 flex items-start">
                  <div className="shrink-0 mr-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue/80 flex items-center justify-center text-white shadow-soft transform transition-all duration-300 group-hover:scale-110">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-blue transition-colors">Ziel</h3>
                    <p className="text-gray-600">
                      Wir schaffen perfekte Verbindungen zwischen Verkäufern und Nachfolgern, 
                      damit Lebenswerke in den richtigen Händen weiterleben können.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-soft bg-white hover:shadow-soft-lg transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 flex items-start">
                  <div className="shrink-0 mr-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-teal/80 flex items-center justify-center text-white shadow-soft transform transition-all duration-300 group-hover:scale-110">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-teal transition-colors">Strategie</h3>
                    <p className="text-gray-600">
                      Durch modernste Technologie und persönliche Betreuung schaffen wir 
                      einen sicheren Rahmen für eine erfolgreiche Unternehmensnachfolge.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-soft bg-white hover:shadow-soft-lg transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 flex items-start">
                  <div className="shrink-0 mr-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-400 flex items-center justify-center text-white shadow-soft transform transition-all duration-300 group-hover:scale-110">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-500 transition-colors">Versprechen</h3>
                    <p className="text-gray-600">
                      Wir garantieren höchste Diskretion, Professionalität und Sicherheit 
                      in jedem Schritt des Nachfolgeprozesses.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10">
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="rounded-xl border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 group"
                >
                  Kontaktieren Sie uns
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
