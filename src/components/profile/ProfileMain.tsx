
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Edit, FileText, Upload } from "lucide-react";

const ProfileMain = () => {
  const [userType, setUserType] = useState("seller");
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    // Seller data
    businessName: "TechVision Solutions GmbH",
    industry: "Software Development",
    location: "Berlin",
    revenue: "2.8M",
    ebit: "450K",
    employees: "18",
    propertyStatus: "Owned",
    description: "Innovative software development company specializing in enterprise solutions with a strong focus on AI and machine learning technologies.",
    
    // Buyer data
    name: "Max Mustermann",
    industryInterests: "Software, Technology",
    regionPreferences: "Berlin, Munich, Hamburg",
    availableCapital: "5M",
    experience: "15 years in technology sector",
    timeline: "6-12 months"
  });

  const documents = [
    { name: "Financial_Report_2023.pdf", type: "Financial", date: "15.03.2024", access: "Private" },
    { name: "Business_Plan.pdf", type: "Strategic", date: "10.03.2024", access: "Shared" },
    { name: "Company_Registration.pdf", type: "Legal", date: "05.03.2024", access: "Verified" },
    { name: "Tax_Returns_2023.pdf", type: "Financial", date: "01.03.2024", access: "Private" }
  ];

  useEffect(() => {
    const demoUser = localStorage.getItem("demoUser");
    if (demoUser) {
      const user = JSON.parse(demoUser);
      setUserType(user.type || "seller");
    }
  }, []);

  const handleSave = () => {
    setIsEditing(false);
    // Save to localStorage or API
  };

  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mein Profil</h1>
        <p className="text-gray-600">Verwalten Sie Ihre Profilinformationen</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>
                {userType === "seller" ? "Unternehmensinformationen" : "Käuferinformationen"}
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit className="h-4 w-4 mr-2" />
                {isEditing ? "Abbrechen" : "Bearbeiten"}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {userType === "seller" ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Unternehmensname</label>
                      <Input
                        value={profileData.businessName}
                        readOnly={!isEditing}
                        onChange={(e) => setProfileData({...profileData, businessName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Branche</label>
                      <Select value={profileData.industry} disabled={!isEditing}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="Software Development">Software Development</SelectItem>
                          <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="Healthcare">Healthcare</SelectItem>
                          <SelectItem value="Finance">Finance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Standort</label>
                      <Input
                        value={profileData.location}
                        readOnly={!isEditing}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Jahresumsatz (3J Ø)</label>
                      <Input
                        value={profileData.revenue}
                        readOnly={!isEditing}
                        onChange={(e) => setProfileData({...profileData, revenue: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">EBIT (3J Ø)</label>
                      <Input
                        value={profileData.ebit}
                        readOnly={!isEditing}
                        onChange={(e) => setProfileData({...profileData, ebit: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mitarbeiteranzahl</label>
                      <Input
                        value={profileData.employees}
                        readOnly={!isEditing}
                        onChange={(e) => setProfileData({...profileData, employees: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Immobilienstatus</label>
                      <Select value={profileData.propertyStatus} disabled={!isEditing}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="Owned">Eigentum</SelectItem>
                          <SelectItem value="Rented">Gemietet</SelectItem>
                          <SelectItem value="Leased">Gepachtet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Unternehmensbeschreibung</label>
                    <Textarea
                      value={profileData.description}
                      readOnly={!isEditing}
                      onChange={(e) => setProfileData({...profileData, description: e.target.value})}
                      rows={4}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        value={profileData.name}
                        readOnly={!isEditing}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Verfügbares Kapital</label>
                      <Input
                        value={profileData.availableCapital}
                        readOnly={!isEditing}
                        onChange={(e) => setProfileData({...profileData, availableCapital: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Brancheninteressen</label>
                      <Input
                        value={profileData.industryInterests}
                        readOnly={!isEditing}
                        onChange={(e) => setProfileData({...profileData, industryInterests: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Regionspräferenzen</label>
                      <Input
                        value={profileData.regionPreferences}
                        readOnly={!isEditing}
                        onChange={(e) => setProfileData({...profileData, regionPreferences: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Zeitrahmen</label>
                      <Select value={profileData.timeline} disabled={!isEditing}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="3-6 months">3-6 Monate</SelectItem>
                          <SelectItem value="6-12 months">6-12 Monate</SelectItem>
                          <SelectItem value="12+ months">12+ Monate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Erfahrung & Hintergrund</label>
                    <Textarea
                      value={profileData.experience}
                      readOnly={!isEditing}
                      onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
                      rows={4}
                    />
                  </div>
                </>
              )}

              {isEditing && (
                <div className="flex gap-2 pt-4">
                  <Button onClick={handleSave}>Speichern</Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
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
    </div>
  );
};

export default ProfileMain;
