
import { Card, CardContent } from "@/components/ui/card";

const WelcomeBanner = () => {
  return (
    <Card className="bg-gradient-to-r from-brand-blue to-brand-teal text-white shadow-soft-lg">
      <CardContent className="p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">
              Willkommen zurück, Max!
            </h1>
            <p className="text-blue-100 text-lg">
              Verwalten Sie Ihre Unternehmensnachfolge und entdecken Sie neue Matches.
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <img
              src="/placeholder-dashboard.svg"
              alt="Dashboard Illustration"
              className="w-32 h-32 lg:w-40 lg:h-40 opacity-20"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeBanner;
