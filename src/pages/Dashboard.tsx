
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardMain from "@/components/dashboard/DashboardMain";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard | Connect.Now</title>
        <meta name="description" content="Verwalten Sie Ihre Unternehmensnachfolge und Matches." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <div className="flex">
          <DashboardSidebar />
          <DashboardMain />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
