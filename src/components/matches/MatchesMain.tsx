
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageSquare, Star, MapPin, Euro, Users } from "lucide-react";

const demoMatches = [
  {
    id: 1,
    name: "TechSoft Solutions GmbH",
    industry: "Software Development",
    location: "Berlin",
    revenue: "2.5M",
    employees: 15,
    matchScore: 92,
    status: "confirmed",
    description: "Leading software development company specializing in enterprise solutions."
  },
  {
    id: 2,
    name: "GreenTech Innovations",
    industry: "Clean Energy",
    location: "Munich",
    revenue: "1.8M",
    employees: 12,
    matchScore: 88,
    status: "shortlisted",
    description: "Innovative clean energy solutions for sustainable future."
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
    description: "Full-service digital marketing agency with proven track record."
  },
  {
    id: 4,
    name: "MedTech Devices AG",
    industry: "Medical Technology",
    location: "Frankfurt",
    revenue: "3.2M",
    employees: 25,
    matchScore: 91,
    status: "confirmed",
    description: "Medical device manufacturer with international presence."
  },
  {
    id: 5,
    name: "AutoParts Excellence",
    industry: "Automotive",
    location: "Stuttgart",
    revenue: "4.1M",
    employees: 35,
    matchScore: 87,
    status: "new",
    description: "Premium automotive parts supplier to major manufacturers."
  },
  {
    id: 6,
    name: "FoodTech Solutions",
    industry: "Food Technology",
    location: "Cologne",
    revenue: "1.2M",
    employees: 10,
    matchScore: 82,
    status: "shortlisted",
    description: "Innovative food processing technology company."
  }
];

const MatchesMain = () => {
  const [filters, setFilters] = useState({
    location: "",
    industry: "",
    revenueMin: "",
    revenueMax: "",
    employees: "",
    matchScore: ""
  });

  const [filteredMatches, setFilteredMatches] = useState(demoMatches);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "shortlisted": return "bg-yellow-100 text-yellow-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed": return "Confirmed Match";
      case "shortlisted": return "Shortlisted";
      default: return "New Match";
    }
  };

  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Matches</h1>
        <p className="text-gray-600">Discover your perfect business partnership opportunities</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <Select value={filters.location} onValueChange={(value) => setFilters({...filters, location: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="All locations" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="">All locations</SelectItem>
                    <SelectItem value="berlin">Berlin</SelectItem>
                    <SelectItem value="munich">Munich</SelectItem>
                    <SelectItem value="hamburg">Hamburg</SelectItem>
                    <SelectItem value="frankfurt">Frankfurt</SelectItem>
                    <SelectItem value="stuttgart">Stuttgart</SelectItem>
                    <SelectItem value="cologne">Cologne</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Industry</label>
                <Select value={filters.industry} onValueChange={(value) => setFilters({...filters, industry: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="All industries" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="">All industries</SelectItem>
                    <SelectItem value="software">Software Development</SelectItem>
                    <SelectItem value="energy">Clean Energy</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="medical">Medical Technology</SelectItem>
                    <SelectItem value="automotive">Automotive</SelectItem>
                    <SelectItem value="food">Food Technology</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Revenue Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input 
                    placeholder="Min" 
                    value={filters.revenueMin}
                    onChange={(e) => setFilters({...filters, revenueMin: e.target.value})}
                  />
                  <Input 
                    placeholder="Max" 
                    value={filters.revenueMax}
                    onChange={(e) => setFilters({...filters, revenueMax: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company Size</label>
                <Select value={filters.employees} onValueChange={(value) => setFilters({...filters, employees: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="All sizes" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="">All sizes</SelectItem>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-25">11-25 employees</SelectItem>
                    <SelectItem value="26-50">26-50 employees</SelectItem>
                    <SelectItem value="50+">50+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Match Score</label>
                <Select value={filters.matchScore} onValueChange={(value) => setFilters({...filters, matchScore: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="All scores" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="">All scores</SelectItem>
                    <SelectItem value="90+">90%+ match</SelectItem>
                    <SelectItem value="80+">80%+ match</SelectItem>
                    <SelectItem value="70+">70%+ match</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={() => setFilters({location: "", industry: "", revenueMin: "", revenueMax: "", employees: "", matchScore: ""})}
                variant="outline" 
                className="w-full"
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Matches Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMatches.map((match) => (
              <Card key={match.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{match.name}</CardTitle>
                      <p className="text-sm text-gray-600">{match.industry}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{match.matchScore}%</span>
                      </div>
                      <Badge className={getStatusColor(match.status)}>
                        {getStatusText(match.status)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{match.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{match.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Euro className="h-4 w-4 text-gray-500" />
                      <span>{match.revenue} Revenue</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>{match.employees} Employees</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      View Profile
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
        </div>
      </div>
    </div>
  );
};

export default MatchesMain;
