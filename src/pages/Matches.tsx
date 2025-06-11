
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MatchesMain from "@/components/matches/MatchesMain";

const Matches = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const demoUser = localStorage.getItem("demoUser");
    setIsLoggedIn(!!demoUser);
  }, []);

  if (isDashboard) {
    return (
      <>
        <Helmet>
          <title>Alle Inserate | Connect.Now</title>
          <meta name="description" content="Finden Sie Ihr perfektes Unternehmen" />
        </Helmet>
        
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div className="flex">
            <DashboardSidebar />
            <MatchesMain />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Alle Inserate | Connect.Now</title>
        <meta name="description" content="Finden Sie Ihr perfektes Unternehmen" />
      </Helmet>
      
      <Navbar />
      <main className="min-h-screen py-8 bg-gray-50">
        <MatchesMain />
      </main>
      <Footer />
    </>
  );
};

export default Matches;
