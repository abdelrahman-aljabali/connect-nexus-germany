
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { ContactInfo as ContactInfoType } from "@/types";

const contactInfo: ContactInfoType = {
  address: ["Musterstraße 123", "10115 Berlin", "Deutschland"],
  phone: "+49 30 123 456 789",
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
    <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
      <h2 className="text-2xl font-semibold mb-6">Kontaktinformationen</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-brand-blue/10 rounded-full p-3 mr-4">
            <MapPin className="h-6 w-6 text-brand-blue" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Adresse</h3>
            <address className="not-italic text-gray-600">
              {contactInfo.address.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </address>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-brand-blue/10 rounded-full p-3 mr-4">
            <Phone className="h-6 w-6 text-brand-blue" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Telefon</h3>
            <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-brand-blue transition-colors">
              {contactInfo.phone}
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-brand-blue/10 rounded-full p-3 mr-4">
            <Mail className="h-6 w-6 text-brand-blue" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">E-Mail</h3>
            <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-brand-blue transition-colors">
              {contactInfo.email}
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-brand-blue/10 rounded-full p-3 mr-4">
            <Clock className="h-6 w-6 text-brand-blue" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Öffnungszeiten</h3>
            <div className="text-gray-600">
              <p>Montag - Freitag: 9:00 - 18:00 Uhr</p>
              <p>Wochenende: Geschlossen</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <h3 className="font-semibold mb-4">Folgen Sie uns</h3>
        <div className="flex space-x-4">
          {contactInfo.socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              aria-label={link.name}
              className="bg-gray-100 hover:bg-brand-blue/10 hover:text-brand-blue text-gray-600 p-3 rounded-full transition-colors"
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
