import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue/90 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für den nächsten Schritt Ihrer Unternehmensreise?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8">
            Ob Sie Ihr Unternehmen in neue Hände geben oder als Nachfolger
            durchstarten möchten – Connect.Now begleitet Sie auf diesem Weg.
            Starten Sie noch heute!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/auth?type=seller">
              <Button
                size="lg"
                className="rounded-2xl bg-white text-brand-blue hover:bg-white/90 w-full sm:w-auto"
              >
                Unternehmen eintragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link to="/auth?type=buyer">
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl bg-white text-brand-blue hover:bg-white/90 w-full sm:w-auto"
              >
                Als Nachfolger registrieren
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-white/80 text-sm">
            Fragen? Kontaktieren Sie uns unter{" "}
            <a
              href="tel:+4930123456789"
              className="underline hover:text-white transition-colors"
            >
              +49 176 55739750
            </a>{" "}
            oder per{" "}
            <a
              href="mailto:info@connect-now.de"
              className="underline hover:text-white transition-colors"
            >
              E-Mail
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
