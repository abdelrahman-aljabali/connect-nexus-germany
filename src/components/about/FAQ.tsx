
import { useState } from "react";
import { FAQ as FAQType } from "@/types";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs: FAQType[] = [
  {
    question: "Was kostet die Nutzung von Connect.Now?",
    answer: "Die Registrierung und Erstellung eines Profils ist kostenlos. Kosten entstehen erst, wenn es zu einer erfolgreichen Vermittlung kommt. Wir arbeiten mit einem erfolgsbasierten Provisionsmodell, das transparent und fair gestaltet ist."
  },
  {
    question: "Wie wird die Vertraulichkeit gewährleistet?",
    answer: "Wir setzen auf ein mehrstufiges Vertraulichkeitskonzept. Sensible Unternehmensdaten werden nur nach Unterzeichnung einer NDA und nur an vorqualifizierte Interessenten weitergegeben. Alle Kommunikation läuft verschlüsselt über unsere Plattform."
  },
  {
    question: "Wie lange dauert der Verkaufsprozess durchschnittlich?",
    answer: "Die Dauer variiert je nach Unternehmensgröße, Branche und Komplexität. Im Durchschnitt dauert der gesamte Prozess von der Registrierung bis zum erfolgreichen Abschluss 6-12 Monate."
  },
  {
    question: "Unterstützt Connect.Now auch bei rechtlichen und steuerlichen Fragen?",
    answer: "Ja, wir bieten Zugang zu einem Netzwerk spezialisierter Rechtsanwälte, Steuerberater und Wirtschaftsprüfer, die auf Unternehmensnachfolge spezialisiert sind und Sie in allen rechtlichen und steuerlichen Aspekten beraten können."
  },
  {
    question: "In welchen Regionen ist Connect.Now aktiv?",
    answer: "Connect.Now ist aktuell in ganz Deutschland tätig. Eine Expansion in weitere europäische Länder ist für die nahe Zukunft geplant."
  },
  {
    question: "Was passiert, wenn kein passender Käufer gefunden wird?",
    answer: "Wir arbeiten kontinuierlich daran, unser Netzwerk an qualifizierten Käufern zu erweitern. Sollte innerhalb eines vereinbarten Zeitraums kein passender Käufer gefunden werden, besprechen wir alternative Strategien oder passen die Suchkriterien an."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Häufig gestellte Fragen</h2>
          <p className="text-lg text-gray-600">
            Antworten auf die wichtigsten Fragen zu unserer Plattform und dem Prozess der Unternehmensnachfolge.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-brand-blue flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
