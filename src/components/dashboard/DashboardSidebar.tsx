
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  User,
  Heart,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Mein Profil",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Alle Inserate",
    href: "/dashboard/matches",
    icon: Heart,
  },
  {
    title: "Nachrichten",
    href: "/dashboard/messages",
    icon: MessageSquare,
  },
  {
    title: "Support",
    href: "/dashboard/support",
    icon: HelpCircle,
  },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen hidden lg:block sticky top-0 z-40">
      <nav className="p-6 h-screen overflow-y-auto">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-brand-blue text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
