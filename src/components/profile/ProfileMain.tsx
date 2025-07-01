import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, FileText, Upload, Plus, Building, User } from "lucide-react";

const ProfileMain = () => {
  const [userType, setUserType] = useState("seller");
  const [isEditingSeller, setIsEditingSeller] = useState(false);
  const [isEditingBuyer, setIsEditingBuyer] = useState(false);
  const [profileData, setProfileData] = useState({
    // Seller data
    businessName: "TechVision Solutions GmbH",
    industry: "Software Entwicklung",
    location: "Leipzig",
    revenue: "2,8M",
    ebit: "450K",
    employees: "18",
    propertyStatus: "Eigentum",
    description: "Innovatives Software-Entwicklungsunternehmen spezialisiert auf Unternehmenslösungen mit starkem Fokus auf KI und maschinelles Lernen.",
    
    // Buyer data
    name: "Max Mustermann",
    industryInterests: "Software, Technologie",
    regionPreferences: "Leipzig, Dresden, Chemnitz",
    availableCapital: "5M",
    experience: "15 Jahre im Technologiesektor",
    timeline: "6-12 Monate"
  });

  const [listings, setListings] = useState([
    {
      id: 1,
      title: "TechVision Solutions GmbH",
      industry: "Software Entwicklung",
      price: "2,8M €",
      status: "Aktiv",
      views: 45,
      inquiries: 8
    },
    {
      id: 2,
      title: "E-Commerce Plattform",
      industry: "Online Handel",
      price: "1,2M €",
      status: "Verhandlung",
      views: 23,
      inquiries: 3
    }
  ]);

  const documents = [
    { name: "Finanzbericht_2023.pdf", type: "Finanzen", date: "15.03.2024", access: "Privat" },
    { name: "Geschäftsplan.pdf", type: "Strategisch", date: "10.03.2024", access: "Geteilt" },
    { name: "Handelsregisterauszug.pdf", type: "Legal", date: "05.03.2024", access: "Verifiziert" },
    { name: "Steuererklärung_2023.pdf", type: "Finanzen", date: "01.03.2024", access: "Privat" }
  ];

  const buyerDocuments = [
    { name: "Identitätsnachweis.pdf", type: "Identität", date: "20.03.2024", access: "Verifiziert" },
    { name: "Finanzierungsnachweis.pdf", type: "Finanzen", date: "18.03.2024", access: "Privat" },
    { name: "Referenzen.pdf", type: "Beruflich", date: "15.03.2024", access: "Geteilt" },
    { name: "Bankbestätigung.pdf", type: "Finanzen", date: "10.03.2024", access: "Verifiziert" }
  ];

  useEffect(() => {
    const demoUser = localStorage.getItem("demoUser");
    if (demoUser) {
      const user = JSON.parse(demoUser);
      setUserType(user.type || "seller");
    }
  }, []);

  const handleSaveSeller = () => {
    setIsEditingSeller(false);
  };

  const handleSaveBuyer = () => {
    setIsEditingBuyer(false);
  };

  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mein Profil</h1>
        <p className="text-gray-600">Verwalten Sie Ihre Profilinformationen und Inserate</p>
      </div>

      <Tabs defaultValue="listings" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="listings" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            Meine Inserate
          </TabsTrigger>
          <TabsTrigger value="seller" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            Verkäufer Profil
          </TabsTrigger>
          <TabsTrigger value="buyer" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Käufer Profil
          </TabsTrigger>
        </TabsList>

        {/* Listings Tab */}
        <TabsContent value="listings" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Meine Inserate</CardTitle>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Neues Inserat erstellen
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {listings.map((listing) => (
                  <div key={listing.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{listing.title}</h3>
                        <p className="text-gray-600">{listing.industry}</p>
                        <p className="text-brand-blue font-semibold text-xl mt-1">{listing.price}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={listing.status === "Aktiv" ? "default" : "secondary"}>
                          {listing.status}
                        </Badge>
                        <div className="mt-2 text-sm text-gray-500">
                          <p>{listing.views} Aufrufe</p>
                          <p>{listing.inquiries} Anfragen</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm">Bearbeiten</Button>
                      <Button size="sm" variant="outline">Statistiken</Button>
                      <Button size="sm" variant="outline">Vorschau</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Seller Profile Tab */}
        <TabsContent value="seller" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Unternehmensinformationen</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditingSeller(!isEditingSeller)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    {isEditingSeller ? "Abbrechen" : "Bearbeiten"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Unternehmensname</label>
                      <Input
                        value={profileData.businessName}
                        readOnly={!isEditingSeller}
                        onChange={(e) => setProfileData({...profileData, businessName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Branche</label>
                      <Select value={profileData.industry} disabled={!isEditingSeller}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="Software Entwicklung">Software Entwicklung</SelectItem>
                          <SelectItem value="Fertigung">Fertigung</SelectItem>
                          <SelectItem value="Gesundheitswesen">Gesundheitswesen</SelectItem>
                          <SelectItem value="Finanzen">Finanzen</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Standort</label>
                      <Input
                        value={profileData.location}
                        readOnly={!isEditingSeller}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Jahresumsatz (3J Ø)</label>
                      <Input
                        value={profileData.revenue}
                        readOnly={!isEditingSeller}
                        onChange={(e) => setProfileData({...profileData, revenue: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">EBIT (3J Ø)</label>
                      <Input
                        value={profileData.ebit}
                        readOnly={!isEditingSeller}
                        onChange={(e) => setProfileData({...profileData, ebit: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mitarbeiteranzahl</label>
                      <Input
                        value={profileData.employees}
                        readOnly={!isEditingSeller}
                        onChange={(e) => setProfileData({...profileData, employees: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Immobilienstatus</label>
                      <Select value={profileData.propertyStatus} disabled={!isEditingSeller}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="Eigentum">Eigentum</SelectItem>
                          <SelectItem value="Gemietet">Gemietet</SelectItem>
                          <SelectItem value="Gepachtet">Gepachtet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Unternehmensbeschreibung</label>
                    <Textarea
                      value={profileData.description}
                      readOnly={!isEditingSeller}
                      onChange={(e) => setProfileData({...profileData, description: e.target.value})}
                      rows={4}
                    />
                  </div>

                  {isEditingSeller && (
                    <div className="flex gap-2 pt-4">
                      <Button onClick={handleSaveSeller}>Speichern</Button>
                      <Button variant="outline" onClick={() => setIsEditingSeller(false)}>
                        Abbrechen
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Documents Section */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Dokumente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-4" variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Dokument hochladen
                  </Button>
                  
                  <div className="space-y-3">
                    {documents.map((doc, index) => (
                      <div key={index} className="border rounded-lg p-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{doc.name}</p>
                            <p className="text-xs text-gray-500">{doc.date}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {doc.access}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Buyer Profile Tab */}
        <TabsContent value="buyer" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Käuferinformationen & Präferenzen</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditingBuyer(!isEditingBuyer)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    {isEditingBuyer ? "Abbrechen" : "Bearbeiten"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        value={profileData.name}
                        readOnly={!isEditingBuyer}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Verfügbares Kapital</label>
                      <Input
                        value={profileData.availableCapital}
                        readOnly={!isEditingBuyer}
                        onChange={(e) => setProfileData({...profileData, availableCapital: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Brancheninteressen</label>
                      <Input
                        value={profileData.industryInterests}
                        readOnly={!isEditingBuyer}
                        onChange={(e) => setProfileData({...profileData, industryInterests: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Regionspräferenzen</label>
                      <Input
                        value={profileData.regionPreferences}
                        readOnly={!isEditingBuyer}
                        onChange={(e) => setProfileData({...profileData, regionPreferences: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Zeitrahmen</label>
                      <Select value={profileData.timeline} disabled={!isEditingBuyer}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="3-6 Monate">3-6 Monate</SelectItem>
                          <SelectItem value="6-12 Monate">6-12 Monate</SelectItem>
                          <SelectItem value="12+ Monate">12+ Monate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Erfahrung & Hintergrund</label>
                    <Textarea
                      value={profileData.experience}
                      readOnly={!isEditingBuyer}
                      onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
                      rows={4}
                    />
                  </div>

                  {isEditingBuyer && (
                    <div className="flex gap-2 pt-4">
                      <Button onClick={handleSaveBuyer}>Speichern</Button>
                      <Button variant="outline" onClick={() => setIsEditingBuyer(false)}>
                        Abbrechen
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Buyer Documents Section */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Dokumente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-4" variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Dokument hochladen
                  </Button>
                  
                  <div className="space-y-3">
                    {buyerDocuments.map((doc, index) => (
                      <div key={index} className="border rounded-lg p-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{doc.name}</p>
                            <p className="text-xs text-gray-500">{doc.date}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {doc.access}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileMain;
