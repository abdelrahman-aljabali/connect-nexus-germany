
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import ProfileMain from "@/components/profile/ProfileMain";

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Mein Profil | Connect.Now</title>
        <meta name="description" content="Verwalten Sie Ihr Unternehmensprofil" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex">
          <DashboardSidebar />
          <ProfileMain />
        </div>
      </div>
    </>
  );
};

export default Profile;
