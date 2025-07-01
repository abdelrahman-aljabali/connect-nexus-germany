
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import QuickStats from "@/components/dashboard/QuickStats";
import ProcessIndicator from "@/components/dashboard/ProcessIndicator";
import QuickActions from "@/components/dashboard/QuickActions";
import NewMatches from "@/components/dashboard/NewMatches";

const DashboardMain = () => {
  return (
    <main className="flex-1 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <WelcomeBanner />
        <QuickStats />
        <ProcessIndicator />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <QuickActions />
          <NewMatches />
        </div>
      </div>
    </main>
  );
};

export default DashboardMain;
