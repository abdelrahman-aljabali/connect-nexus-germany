
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MessagesMain from "@/components/messages/MessagesMain";

const Messages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Nachrichten | Connect.Now</title>
        <meta name="description" content="Kommunizieren Sie mit Ihren Matches" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <DashboardNavbar />
        <div className="flex">
          <DashboardSidebar />
          <MessagesMain />
        </div>
      </div>
    </>
  );
};

export default Messages;
