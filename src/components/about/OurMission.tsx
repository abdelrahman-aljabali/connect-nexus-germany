
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, BadgeCheck } from "lucide-react";

const OurMission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-soft-lg">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80" 
                  alt="Business handshake" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <p className="text-sm font-medium text-brand-blue">Seit 2018 im Dienst des Mittelstands</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6">Unsere Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              Connect.Now wurde mit einer klaren Vision gegründet: Die Unternehmensnachfolge in Deutschland 
              zu revolutionieren und sie für alle Beteiligten effizienter, sicherer und erfolgreicher zu gestalten.
            </p>
            
            <div className="space-y-6">
              <Card className="border-none shadow-soft hover:shadow-soft-lg transition-all duration-300">
                <CardContent className="p-6 flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ziel</h3>
                    <p className="text-gray-600">
                      Wir schaffen perfekte Verbindungen zwischen Verkäufern und Nachfolgern, 
                      damit Lebenswerke in den richtigen Händen weiterleben können.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-soft hover:shadow-soft-lg transition-all duration-300">
                <CardContent className="p-6 flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Strategie</h3>
                    <p className="text-gray-600">
                      Durch modernste Technologie und persönliche Betreuung schaffen wir 
                      einen sicheren Rahmen für eine erfolgreiche Unternehmensnachfolge.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-soft hover:shadow-soft-lg transition-all duration-300">
                <CardContent className="p-6 flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <BadgeCheck className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Versprechen</h3>
                    <p className="text-gray-600">
                      Wir garantieren höchste Diskretion, Professionalität und Sicherheit 
                      in jedem Schritt des Nachfolgeprozesses.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
