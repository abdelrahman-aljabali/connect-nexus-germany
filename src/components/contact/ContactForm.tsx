
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2, User, Mail, Phone, Building, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze mit Ihnen in Verbindung setzen.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div id="contactForm" className="relative">
      {/* Background decorative elements */}
      <div className="absolute -inset-3 bg-gradient-to-r from-brand-blue/10 to-brand-teal/10 rounded-2xl blur-lg -z-10"></div>
      
      <div className="bg-white rounded-2xl shadow-soft p-8 animate-fade-in relative z-10">
        <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal">Schreiben Sie uns</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                  <User className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors bg-gray-50/50"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-Mail*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors bg-gray-50/50"
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                  <Phone className="h-5 w-5" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors bg-gray-50/50"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Unternehmen
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                  <Building className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors bg-gray-50/50"
                />
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Betreff*
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors bg-gray-50/50"
              required
            >
              <option value="" disabled>Bitte wählen Sie</option>
              <option value="Unternehmen verkaufen">Unternehmen verkaufen</option>
              <option value="Unternehmen kaufen">Unternehmen kaufen</option>
              <option value="Beratung">Beratung</option>
              <option value="Partnerschaft">Partnerschaft</option>
              <option value="Sonstiges">Sonstiges</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Nachricht*
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 text-gray-400">
                <MessageSquare className="h-5 w-5" />
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors resize-none bg-gray-50/50"
                required
              ></textarea>
            </div>
          </div>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="privacy" 
              className="h-4 w-4 text-brand-blue rounded border-gray-300 focus:ring-brand-blue" 
              required 
            />
            <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
              Ich stimme der <a href="/privacy" className="text-brand-blue hover:underline">Datenschutzerklärung</a> zu*
            </label>
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full rounded-xl bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-blue/90 hover:to-brand-teal/90 text-white py-3 px-8 shadow-soft hover:shadow-soft-lg transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              <>
                Nachricht senden
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
          
          <p className="text-sm text-gray-500">
            *Pflichtfelder
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
