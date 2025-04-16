
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { ContactInfo as ContactInfoType } from "@/types";

const contactInfo: ContactInfoType = {
  address: ["Südbahnstr. 4", "09111 Chemnitz", "Deutschland"],
  phone: "+49 176 55739750",
  email: "info@connect-now.de",
  socialLinks: [
    { name: "Facebook", url: "#", icon: Facebook },
    { name: "Twitter", url: "#", icon: Twitter },
    { name: "LinkedIn", url: "#", icon: Linkedin },
    { name: "Instagram", url: "#", icon: Instagram }
  ]
};

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-2xl shadow-soft-lg p-8 animate-fade-in" style={{ animationDelay: "150ms" }}>
      <h2 className="text-2xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">Kontaktinformationen</h2>
      
      <div className="space-y-8">
        <div className="flex items-start group transition-all duration-300 hover:translate-x-1">
          <div className="bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl p-3 mr-4 shadow-soft text-white transform transition-all duration-300 group-hover:shadow-soft-lg">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Adresse</h3>
            <address className="not-italic text-gray-600">
              {contactInfo.address.map((line, index) => (
                <p key={index} className="mb-1">{line}</p>
              ))}
            </address>
          </div>
        </div>
        
        <div className="flex items-start group transition-all duration-300 hover:translate-x-1">
          <div className="bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl p-3 mr-4 shadow-soft text-white transform transition-all duration-300 group-hover:shadow-soft-lg">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Telefon</h3>
            <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-brand-blue transition-colors">
              {contactInfo.phone}
            </a>
          </div>
        </div>
        
        <div className="flex items-start group transition-all duration-300 hover:translate-x-1">
          <div className="bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl p-3 mr-4 shadow-soft text-white transform transition-all duration-300 group-hover:shadow-soft-lg">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-gray-800">E-Mail</h3>
            <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-brand-blue transition-colors">
              {contactInfo.email}
            </a>
          </div>
        </div>
        
        <div className="flex items-start group transition-all duration-300 hover:translate-x-1">
          <div className="bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl p-3 mr-4 shadow-soft text-white transform transition-all duration-300 group-hover:shadow-soft-lg">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Öffnungszeiten</h3>
            <div className="text-gray-600">
              <p className="mb-1">Montag - Freitag: 9:00 - 18:00 Uhr</p>
              <p>Wochenende: Geschlossen</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-100">
        <h3 className="font-semibold mb-4 text-gray-800">Folgen Sie uns</h3>
        <div className="flex space-x-4">
          {contactInfo.socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              aria-label={link.name}
              className="bg-gray-50 hover:bg-brand-blue text-gray-400 hover:text-white p-3 rounded-xl shadow-soft transition-all duration-300 hover:shadow-soft-lg"
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
