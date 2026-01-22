"use client";
import { LayoutDashboard, Store, Users, Settings } from "lucide-react";
import Link from "next/link";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Kitchen", icon: Store, href: "/dashboard/kitchen" },
  { name: "Orders", icon: Users, href: "/dashboard/orders" },
  { name: "Reports", icon: Users, href: "/dashboard/reports" },
  { name: "Inventory", icon: Users, href: "/dashboard/inventory" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function Sidebar({ currentPage }) {
  return (
    <aside className="hidden md:block w-64 h-[calc(100vh-72px)] border-r border-amber-200 dark:border-amber-900/30 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
      <div className="p-4 space-y-1">
        {menu.map((item, i) => {
          const isActive = item.href.endsWith(currentPage);

          return (
            <Link
              key={i}
              href={item.href}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                ${
                  isActive
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md"
                    : "text-amber-900 dark:text-amber-100 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 hover:text-white"
                }
              `}
            >
              <item.icon className="w-5 h-5 opacity-80 group-hover:opacity-100" />
              {item.name}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
